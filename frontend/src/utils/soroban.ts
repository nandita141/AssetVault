import { rpc, TransactionBuilder, Networks, Contract, Address, nativeToScVal } from '@stellar/stellar-sdk';
import { signTransaction, getAddress } from '@stellar/freighter-api';

const SERVER_URL = 'https://soroban-testnet.stellar.org';
const NETWORK_PASSPHRASE = Networks.TESTNET;
export const CONTRACT_ID = 'CCD5G67T42N5VLGYTJH5KNMRCYE2C2M42A5R6X6WM4KVXOZWFUWRZV3X';

export const server = new rpc.Server(SERVER_URL);

export async function submitContractCall(method: string, args: any[]) {
    // 1. Get user's wallet address
    let pubKey = '';
    try {
        const addressObj = await getAddress();
        pubKey = typeof addressObj === 'string' ? addressObj : (addressObj as any).address;
    } catch (e) {
        throw new Error("Could not connect to Freighter wallet");
    }
    
    if (!pubKey) throw new Error("Freighter not connected or locked");

    // 2. Fetch Account details for Sequence Number
    let account;
    try {
        account = await server.getAccount(pubKey);
    } catch (e) {
        throw new Error("Failed to fetch account from Testnet. Make sure it's funded.");
    }

    // 3. Build Transaction
    const contract = new Contract(CONTRACT_ID);
    const tx = new TransactionBuilder(account, { fee: "10000", networkPassphrase: NETWORK_PASSPHRASE })
        .addOperation(contract.call(method, ...args))
        .setTimeout(30)
        .build();

    // 4. Simulate and Prepare Transaction (Soroban requirement)
    let preparedTx;
    try {
        preparedTx = await server.prepareTransaction(tx);
    } catch (e) {
        console.error("Simulation failed:", e);
        throw new Error("Smart contract simulation failed. Check inputs.");
    }

    // 5. Sign with Freighter
    let signedXdr;
    try {
        const xdrString = preparedTx.toXDR();
        console.log("Requesting signature for XDR:", xdrString);
        signedXdr = await signTransaction(xdrString, { 
            network: "TESTNET", 
            networkPassphrase: NETWORK_PASSPHRASE 
        });
        console.log("Freighter Response:", signedXdr);
    } catch (e) {
        throw new Error("User rejected the transaction signature");
    }
    
    if (signedXdr && typeof signedXdr === 'object' && (signedXdr as any).error) {
        throw new Error(`Freighter Error: ${(signedXdr as any).error}`);
    }

    const xdrString = typeof signedXdr === 'string' ? signedXdr : (signedXdr as any)?.signedTxXdr;
    if (!xdrString) {
        throw new Error(`Failed to get signed XDR from Freighter. Received: ${JSON.stringify(signedXdr)}`);
    }

    // 6. Submit to Network
    const signedTx = TransactionBuilder.fromXDR(xdrString, NETWORK_PASSPHRASE);
    const sendResponse = await server.sendTransaction(signedTx as any);
    
    if (sendResponse.status === 'ERROR') {
        throw new Error("Transaction submission failed on the network");
    }

    // 7. Poll for Completion
    let statusResponse = await server.getTransaction(sendResponse.hash);
    let attempts = 0;
    while (statusResponse.status === "NOT_FOUND" && attempts < 15) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        statusResponse = await server.getTransaction(sendResponse.hash);
        attempts++;
    }
    
    if (statusResponse.status === "FAILED") {
        throw new Error("Transaction failed on-chain");
    }

    return statusResponse;
}
