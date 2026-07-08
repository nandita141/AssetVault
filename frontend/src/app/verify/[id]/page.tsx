'use client';

import React, { useEffect, useState, use } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';

export default function VerifyAsset({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [assetId, setAssetId] = useState<string>('');

  useEffect(() => {
    if (unwrappedParams?.id) {
        setAssetId(unwrappedParams.id);
    }
  }, [unwrappedParams]);

  const mockAssetData = {
    id: assetId || 'UNKNOWN',
    owner: 'GBLU...4X8A',
    purchaseDate: '2023-11-15',
    purchasePrice: 1800000,
    ipfsHash: 'QmYwAPJzv5CZsnA625s3Xf2bem1UjBvxe8Q9cW2zYQk8G7',
    status: 'Verified & Active',
    transfers: 0
  };

  const verificationUrl = `http://localhost:3000/verify/${assetId}`;

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <nav className="navbar animate-fade-in stagger-1">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand">Asset<span className="text-gradient">Vault</span></div>
        </Link>
      </nav>

      <div className="animate-fade-in stagger-2" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="title-glow" style={{ marginBottom: '1rem', fontSize: '3rem' }}>Digital Asset Passport</h2>
        <p style={{ marginBottom: '4rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Scan the unique QR code below to cryptographically verify the on-chain authenticity of this asset.</p>

        <div className="grid grid-cols-2" style={{ gap: '2.5rem', textAlign: 'left', alignItems: 'stretch' }}>
          
          {/* QR Code Panel */}
          <div className="glass-panel animate-fade-in stagger-3" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
            <div style={{ background: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
              {assetId && (
                <QRCodeSVG 
                  value={verificationUrl} 
                  size={260}
                  level="H"
                  includeMargin={true}
                  fgColor="#050505"
                />
              )}
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Scan to verify Asset {mockAssetData.id}
            </p>
          </div>

          {/* On-Chain Record Panel */}
          <div className="glass-panel animate-fade-in stagger-3" style={{ padding: '3rem', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '2rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent-primary)' }}>✦</span> On-Chain Record
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>ASSET ID</div>
              <div style={{ fontFamily: 'monospace', fontSize: '1.25rem', color: 'var(--text-main)', marginTop: '0.25rem' }}>{mockAssetData.id}</div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>CURRENT OWNER (PUBLIC KEY)</div>
              <div className="text-gradient" style={{ fontFamily: 'monospace', fontSize: '1.15rem', marginTop: '0.25rem' }}>{mockAssetData.owner}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PURCHASE DATE</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{mockAssetData.purchaseDate}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TRANSFERS</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>{mockAssetData.transfers}</div>
              </div>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>DOCUMENTS (IPFS HASH)</div>
              <a href={`https://ipfs.io/ipfs/${mockAssetData.ipfsHash}`} target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: 'var(--accent-secondary)', fontSize: '0.95rem', marginTop: '0.25rem', textDecoration: 'none', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem', borderRadius: '99px', transition: 'background 0.2s' }}>
                {mockAssetData.ipfsHash} ↗
              </a>
            </div>

            <div style={{ marginTop: 'auto', padding: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', textAlign: 'center', color: '#34d399', fontWeight: 600, fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              {mockAssetData.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
