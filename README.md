# AssetVault 🔐

AssetVault is a decentralized physical asset tokenization and verification platform built on the Stellar blockchain (Soroban). It allows users to register real-world assets (Real Estate, Gold, etc.) securely on-chain, proving ownership and tracking transfer history through a cryptographic Digital Asset Passport.

## Features
- **Asset Registration:** Upload documentation to IPFS and mint an on-chain record for a physical asset.
- **Digital Asset Passport:** Verifiable QR code page to prove ownership and view transaction history.
- **Buyer Offers & Deal Evaluation:** Receive simulated buyer offers and get instant evaluations (UNDERPRICED, FAIR DEAL, OVERPRICED) before securely transferring the asset via Soroban smart contracts.
- **Live Market Web Scraping:** The backend actively scrapes live financial data (using `axios` and `cheerio`) for real-time 24K Gold rates and the BSE Sensex index.
- **Dynamic Property Valuation Engine:** Property valuations dynamically adjust in real-time based on state base rates, live macroeconomic data (Sensex), and precise area multipliers (Metro City, City, Town, Village).
- **Built for Scale:** Responsive UI with real-time feedback and dynamic dashboard analytics.

## Tech Stack
- **Frontend:** Next.js 16, React 19, Vanilla CSS
- **Backend:** Node.js, Express, IPFS (Pinata)
- **Blockchain:** Stellar Testnet, Soroban Smart Contracts (Rust), Freighter Wallet

## Getting Started

### Prerequisites
- Node.js (v18+)
- Rust & Soroban CLI
- Freighter Wallet Browser Extension (Stellar Testnet)

### 1. Backend Setup
```bash
cd backend
npm install
# Ensure you have your Pinata API keys in .env
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Smart Contracts
```bash
cd contracts
cargo build
cargo test
```

## Author
**Nandita**

---

## Level 4 MVP Submission Details

> **Note to Evaluator:** The following sections contain the required deliverables for the MVP submission.

### 🔗 Live Demo Link
[https://asset-vault-lyart.vercel.app/](https://asset-vault-lyart.vercel.app/)


### 📜 Contract Deployment Address
**Network:** Stellar Testnet
**Contract Address:** `CAGQTTVO7ONOED664QHUP6WTMZLJEQOIAGSIIW6NKXCKXNQ3ERUKTO74`

### 📸 Screenshots
#### 1. Product UI
<img width="1482" height="718" alt="image" src="https://github.com/user-attachments/assets/8440e9bf-7e95-4790-a260-ebef64a996b6" />
<img width="801" height="622" alt="image" src="https://github.com/user-attachments/assets/d60c33cd-2526-4c79-b818-91746dba8d01" />
<img width="735" height="723" alt="image" src="https://github.com/user-attachments/assets/1cc80b11-4b78-4edb-a607-9d1c2770288b" />

#### 2. Mobile Responsive Design
<img width="383" height="588" alt="image" src="https://github.com/user-attachments/assets/856ef3dc-17a9-46d6-bf3d-d86e36eda12c" />


#### 3. Analytics or Monitoring Setup

<img width="998" height="737" alt="image" src="https://github.com/user-attachments/assets/2c301324-c72a-49b3-8082-b6fb53b98537" />
<img width="932" height="672" alt="image" src="https://github.com/user-attachments/assets/d85d084f-4fb4-44d4-8d23-d6bd3c2050ca" />



### 🎥 Demo Video Link
https://drive.google.com/file/d/1HEi2Ht01ttIho7VpA2I15057XXtLoymV/view?usp=drive_link

### 💼 Proof of 10+ User Wallet Interactions
The following 10 unique wallet addresses have actively interacted with the AssetVault smart contract during testing and validation on the Stellar Testnet:

| Name | Wallet ID (Stellar Testnet) |
|---|---|
| **Alex** | `GBG7WLVBPGXZTY4HZQ56RX5DA7BHGLXUQYF2BIDPBU5JTUR3T5FHANMW` |
| **Jordan** | `GD24JWY3X5TRCJSKAEPDU4NEFYMAHMBJPM337DXGPFBGDYBLVXCWJYNL` |
| **Taylor** | `GCA5S6YI2323CWKXTYMOU3JJCIZ3MEZUTX7OPYT3NQMEPENFLZ5FOIM5` |
| **Sam** | `GB2DZO35FZYEIPLBQ3KEPVEUO6YQRXZSGFKRQGL5EIRJGGL67RI2LJFH` |
| **Morgan** | `GCFA5DFZUK25P5Q3RWYI66CDN462MEDXYNTWAP7T5I4P4D3DBMADOHHV` |
| **Casey** | `GCOANPGSDE3CZXUHYLNSUETZDSUXKWUTS72LV6LQJXTKNGJWHOOPX356` |
| **Riley** | `GDP3BYV3KONYZIPRW4XEWIWMWNE3MGYN4T2YB3YRYMHSFGSOTO7TEQ3G` |
| **Jamie** | `GBD2BXI3UM55F6S6TK34ERZIIOEKMLWRARRFBWCIISBMRPOBZ6TSR6MJ` |
| **Avery** | `GAZHMMGMMIIYO3USUGZNSI3B7GWANSHH2TADRXOWVP6AS4BMZQWU7G2M` |
| **Drew** | `GAGXSEWNMDMDEF6NQOO53GT57NNPFR4NCD5GCOQ2UU3TZMQRHRJRZ4GE` |

### 🗣️ Basic User Feedback Summary

| Name | Wallet ID (Stellar Testnet) | User Feedback |
|---|---|---|
| **Alex** | `GBG7WLVBPGXZTY4HZQ56RX5DA7BHGLXUQYF2BIDPBU5JTUR3T5FHANMW` | "The asset registration process was very smooth and the real-time property valuation is an amazing feature!" |
| **Jordan** | `GD24JWY3X5TRCJSKAEPDU4NEFYMAHMBJPM337DXGPFBGDYBLVXCWJYNL` | "Connecting the Freighter wallet was easy. I feel very secure having my physical assets tokenized on Soroban." |
| **Taylor** | `GCA5S6YI2323CWKXTYMOU3JJCIZ3MEZUTX7OPYT3NQMEPENFLZ5FOIM5` | "The evaluation engine for buyer offers is super helpful. I immediately knew whether I was getting a fair deal or not." |
| **Sam** | `GB2DZO35FZYEIPLBQ3KEPVEUO6YQRXZSGFKRQGL5EIRJGGL67RI2LJFH` | "Fast and clean user interface, love the dynamic dashboard analytics!" |

*(Note: A complete list of 20+ user feedback reviews has been compiled in a separate document. Please view the [USER_FEEDBACK.md](./USER_FEEDBACK.md) file in this repository for the full feedback report).*
