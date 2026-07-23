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
  // Offers Modal State
  const [offersAsset, setOffersAsset] = useState<any>(null);
  const [offersList, setOffersList] = useState<any[]>([]);
  const [isOffersLoading, setIsOffersLoading] = useState(false);

  // Mock Data (Base Purchase Details)
  const [assets, setAssets] = useState<any[]>([]);

  // Define API URL dynamically
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    checkWalletConnection();
    fetchLiveMarketData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchLiveMarketData = async () => {
    try {
      const assetsRes = await fetch(`${API_URL}/api/assets`);
      const assetsData = await assetsRes.json();
      const currentAssets = assetsData.success ? assetsData.assets : [];

      const updatedAssets = await Promise.all(currentAssets.map(async (asset: any) => {
        if (asset.type === 'Gold') {
          const res = await fetch(`${API_URL}/api/market/gold`);
          const data = await res.json();
          if (data.success) {
            return { ...asset, currentValue: data.currentPrice * 5 };
          }
        } else if (asset.type === 'Property') {
          const loc = asset.locationDetails || { state: 'maharashtra', areaType: 'metro', areaSqFt: 1000 };
          const res = await fetch(`${API_URL}/api/market/property?state=${loc.state}&areaType=${loc.areaType}&areaSqFt=${loc.areaSqFt}`);
          const data = await res.json();
          if (data.success) {
            return { ...asset, currentValue: data.currentPrice };
          }
        }
        return asset;
      }));
      setAssets(updatedAssets);
    } catch (e) {
      console.error("Failed to fetch live market data", e);
    }
  };

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

  const simulateOffer = async (asset: any) => {
    try {
      // Create a random realistic offer price (+- 20% of current value)
      const variance = (Math.random() * 0.4 - 0.2); 
      const offerPrice = Math.round(asset.currentValue * (1 + variance));
      
      const { Keypair } = await import('@stellar/stellar-sdk');
      const buyerAddress = Keypair.random().publicKey();
      
      const res = await fetch(`${API_URL}/api/offers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assetId: asset.id, buyerAddress, offerPrice })
      });
      if (res.ok) alert(`Simulated offer added for ${formatCurrency(offerPrice)}`);
    } catch (e) {
      console.error(e);
      alert('Failed to simulate offer');
    }
  };

  const fetchOffers = async (asset: any) => {
    setOffersAsset(asset);
    setIsOffersLoading(true);
    setOffersList([]);
    try {
      const res = await fetch(`${API_URL}/api/offers/${asset.id}`);
      const data = await res.json();
      
      // Evaluate each offer against current market value
      if (data.success && data.offers.length > 0) {
        const evaluatedOffers = await Promise.all(data.offers.map(async (offer: any) => {
          const evalRes = await fetch(`${API_URL}/api/evaluate-deal`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ offerPrice: offer.offerPrice, currentMarketValue: asset.currentValue })
          });
          const evalData = await evalRes.json();
          return { ...offer, evaluation: evalData };
        }));
        setOffersList(evaluatedOffers);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsOffersLoading(false);
    }
  };

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

  const totalPurchaseValue = assets.reduce((acc, asset) => acc + asset.purchasePrice, 0);
  const totalMarketValue = assets.reduce((acc, asset) => acc + asset.currentValue, 0);
  const totalProfit = totalMarketValue - totalPurchaseValue;
  const totalProfitPercent = totalPurchaseValue > 0 ? ((totalProfit / totalPurchaseValue) * 100).toFixed(2) : '0.00';
  const isProfit = totalProfit >= 0;

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
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/analytics">
            <button className="btn btn-outline">View Analytics</button>
          </Link>
          <Link href="/register">
            <button className="btn btn-primary">+ Register New Asset</button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 animate-fade-in stagger-3" style={{ marginBottom: '4rem' }}>
        <div className="card glass-panel">
          <div className="card-title">Total Portfolio Value (Purchase)</div>
          <div className="card-value">{formatCurrency(totalPurchaseValue)}</div>
        </div>
        <div className="card glass-panel" style={{ border: `1px solid ${isProfit ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}` }}>
          <div className="card-title">Current Market Value</div>
          <div className="card-value" style={{ color: isProfit ? 'var(--success)' : 'var(--danger)' }}>{formatCurrency(totalMarketValue)}</div>
          <div style={{ color: isProfit ? 'var(--success)' : 'var(--danger)', marginTop: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
            {isProfit ? '↑' : '↓'} {isProfit ? '+' : ''}{totalProfitPercent}% {isProfit ? 'Profit' : 'Loss'} (Live Data)
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
              <button className="btn btn-outline" onClick={() => simulateOffer(asset)}>Simulate Offer</button>
              <button className="btn btn-primary" onClick={() => fetchOffers(asset)}>View Offers</button>
              <Link href={`/verify/${asset.id}`}>
                <button className="btn btn-outline">View Passport</button>
              </Link>
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

      {/* Offers Modal overlay */}
      {offersAsset && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(5px)' }}>
          <div className="card glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '700px', padding: '2.5rem', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Offers for {offersAsset.name}</h3>
              <button className="btn btn-outline" onClick={() => setOffersAsset(null)}>Close</button>
            </div>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Current Market Value: <strong style={{ color: 'var(--success)' }}>{formatCurrency(offersAsset.currentValue)}</strong>
            </p>
            
            {isOffersLoading ? (
              <p>Loading offers...</p>
            ) : offersList.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No offers received yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {offersList.map(offer => (
                  <div key={offer.id} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                          {formatCurrency(offer.offerPrice)}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                          Buyer: {displayAddress(offer.buyerAddress)}
                        </div>
                      </div>
                      
                      {offer.evaluation && (
                        <div style={{ textAlign: 'right' }}>
                          <span className={`badge ${offer.evaluation.status === 'UNDERPRICED' ? 'badge-danger' : offer.evaluation.status === 'OVERPRICED' ? 'badge-success' : 'badge-primary'}`} style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                            {offer.evaluation.status.replace('_', ' ')}
                          </span>
                          <div style={{ fontSize: '0.85rem', color: offer.evaluation.status === 'UNDERPRICED' ? 'var(--danger)' : 'var(--text-muted)' }}>
                            {offer.evaluation.recommendation}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button 
                      className="btn btn-primary" 
                      style={{ width: '100%' }}
                      disabled={isTransferring}
                      onClick={async () => {
                        setIsTransferring(true);
                        try {
                          const { submitContractCall } = await import('@/utils/soroban');
                          const { nativeToScVal } = await import('@stellar/stellar-sdk');
                          const { getAddress } = await import('@stellar/freighter-api');
                          
                          const addressObj = await getAddress();
                          const currentOwner = typeof addressObj === 'string' ? addressObj : (addressObj as any).address;
                          
                          const args = [
                            nativeToScVal(offersAsset.id, { type: 'string' }),
                            nativeToScVal(currentOwner, { type: 'address' }),
                            nativeToScVal(offer.buyerAddress, { type: 'address' }),
                            nativeToScVal(Math.floor(Date.now() / 1000), { type: 'u64' }),
                            nativeToScVal(offer.offerPrice, { type: 'u64' })
                          ];
                          
                          if (offersAsset.id === 'LAND-0001' || offersAsset.id === 'GOLD-0001') {
                            // Bypass blockchain for mock assets
                            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
                            alert("Demo Mode: Offer accepted! (Mock asset bypassed blockchain transfer)");
                          } else {
                            await submitContractCall('transfer_ownership', args);
                            alert("Offer accepted! Transaction submitted successfully to the blockchain!");
                          }
                          setOffersAsset(null);
                        } catch (error: any) {
                          console.error(error);
                          alert(`Transfer failed: ${error.message || error}`);
                        } finally {
                          setIsTransferring(false);
                        }
                      }}
                    >
                      {isTransferring ? 'Signing on Blockchain...' : 'Accept Offer & Transfer Asset'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
