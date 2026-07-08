'use client';

import React, { useState, useEffect } from 'react';
import { isAllowed, setAllowed, getAddress } from '@stellar/freighter-api';
import Link from 'next/link';

export default function Dashboard() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  
  // Transfer Modal State
  const [transferAsset, setTransferAsset] = useState<any>(null);
  const [recipient, setRecipient] = useState('');
  const [isTransferring, setIsTransferring] = useState(false);
  
  // Mock Data
  const [assets] = useState([
    {
      id: 'LAND-0001',
      name: 'Plot in Bandra, Mumbai',
      type: 'Property',
      purchasePrice: 1800000,
      currentValue: 2600000,
      status: 'Verified',
    },
    {
      id: 'GOLD-0001',
      name: '24K Gold Coins (50g)',
      type: 'Gold',
      purchasePrice: 200000,
      currentValue: 345000,
      status: 'Verified',
    }
  ]);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    try {
      const { isConnected } = await import('@stellar/freighter-api');
      if (await isConnected()) {
        if (await isAllowed()) {
          const result = await getAddress();
          if (typeof result === 'string') {
            setWalletAddress(result);
            setWalletConnected(true);
          } else if ((result as any)?.address) {
            setWalletAddress((result as any).address);
            setWalletConnected(true);
          }
        }
      }
    } catch (e) {
      console.error("Freighter is not installed or available.", e);
    }
  };

  const connectWallet = async () => {
    try {
      await setAllowed();
      const result = await getAddress();
      if (typeof result === 'string') {
        setWalletAddress(result);
        setWalletConnected(true);
      } else if ((result as any)?.address) {
        setWalletAddress((result as any).address);
        setWalletConnected(true);
      }
    } catch (e) {
      alert("Failed to connect wallet. Please ensure Freighter extension is installed.");
    }
  };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  const displayAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.substring(0, 5)}...${addr.substring(addr.length - 4)}`;
  }

  if (!walletConnected) {
    return (
      <main className="container grid" style={{ placeItems: 'center', minHeight: '100vh' }}>
        <div className="glass-panel animate-fade-in" style={{ padding: '4rem', textAlign: 'center', maxWidth: '600px' }}>
          <h1 className="title-glow" style={{ marginBottom: '1rem', fontSize: '3.5rem' }}>Asset<span className="text-gradient">Vault</span></h1>
          <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>Connect your Freighter wallet to access your decentralized physical asset portfolio.</p>
          <button className="btn btn-primary" onClick={connectWallet} style={{ width: '100%', padding: '1.2rem', fontSize: '1.2rem' }}>
            Connect Freighter Wallet
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <nav className="navbar animate-fade-in stagger-1">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand">Asset<span className="text-gradient">Vault</span></div>
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="badge badge-success">Stellar Testnet</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{displayAddress(walletAddress)}</span>
        </div>
      </nav>

      <div className="animate-fade-in stagger-2" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>My Dashboard</h2>
        <Link href="/register">
          <button className="btn btn-primary">+ Register New Asset</button>
        </Link>
      </div>

      <div className="grid grid-cols-2 animate-fade-in stagger-3" style={{ marginBottom: '4rem' }}>
        <div className="card glass-panel">
          <div className="card-title">Total Portfolio Value (Purchase)</div>
          <div className="card-value">{formatCurrency(2000000)}</div>
        </div>
        <div className="card glass-panel" style={{ border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div className="card-title">Current Market Value</div>
          <div className="card-value" style={{ color: 'var(--success)' }}>{formatCurrency(2945000)}</div>
          <div style={{ color: 'var(--success)', marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
            ↑ +47.25% Profit (Live Data)
          </div>
        </div>
      </div>

      <h3 className="animate-fade-in stagger-3" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Registered Assets</h3>
      <div className="grid animate-fade-in stagger-3">
        {assets.map(asset => (
          <div key={asset.id} className="card glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="badge badge-success">{asset.status}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{asset.id}</span>
              </div>
              <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-main)' }}>{asset.name}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)' }}>Type: {asset.type}</p>
            </div>
            
            <div style={{ textAlign: 'right', flex: 1, paddingRight: '2rem' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Purchase: {formatCurrency(asset.purchasePrice)}</div>
              <div className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.25rem 0' }}>
                Market: {formatCurrency(asset.currentValue)}
              </div>
              <div style={{ color: 'var(--success)', fontSize: '1rem', fontWeight: 600 }}>
                +{formatCurrency(asset.currentValue - asset.purchasePrice)}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flex: 1, justifyContent: 'flex-end' }}>
              <Link href={`/verify/${asset.id}`}>
                <button className="btn btn-outline">View Passport</button>
              </Link>
              <button className="btn btn-outline" onClick={() => setTransferAsset(asset)}>Transfer</button>
            </div>
          </div>
        ))}
      </div>

      {/* Transfer Modal overlay */}
      {transferAsset && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}>
          <div className="card glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '500px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transfer Asset</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Transferring <strong style={{ color: 'var(--text-main)' }}>{transferAsset.name}</strong> ({transferAsset.id})
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>RECIPIENT PUBLIC KEY (STELLAR)</label>
              <input 
                type="text" 
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="G..."
                style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'monospace', fontSize: '1.1rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button 
                className="btn btn-outline" 
                onClick={() => { setTransferAsset(null); setRecipient(''); }}
                disabled={isTransferring}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                disabled={!recipient || isTransferring}
                onClick={async () => {
                  setIsTransferring(true);
                  try {
                    const { submitContractCall } = await import('@/utils/soroban');
                    const { nativeToScVal } = await import('@stellar/stellar-sdk');
                    const { getAddress } = await import('@stellar/freighter-api');
                    
                    const addressObj = await getAddress();
                    const currentOwner = typeof addressObj === 'string' ? addressObj : (addressObj as any).address;

                    const args = [
                      nativeToScVal(transferAsset.id, { type: 'string' }),
                      nativeToScVal(currentOwner, { type: 'address' }),
                      nativeToScVal(recipient, { type: 'address' }),
                      nativeToScVal(Math.floor(Date.now() / 1000), { type: 'u64' }), // current date
                      nativeToScVal(transferAsset.currentValue || transferAsset.purchasePrice, { type: 'u64' })
                    ];

                    await submitContractCall('transfer_ownership', args);
                    
                    alert("Transfer transaction signed & submitted successfully to the blockchain!");
                    setTransferAsset(null);
                    setRecipient('');
                  } catch (error: any) {
                    console.error(error);
                    alert(`Transfer failed: ${error.message || error}`);
                  } finally {
                    setIsTransferring(false);
                  }
                }}
              >
                {isTransferring ? 'Signing on Blockchain...' : 'Confirm Transfer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
