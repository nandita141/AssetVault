'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { submitContractCall } from '@/utils/soroban';
import { nativeToScVal } from '@stellar/stellar-sdk';

export default function RegisterAsset() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Property',
    purchasePrice: '',
    purchaseDate: '',
    state: 'maharashtra',
    areaType: 'metro',
    areaSqFt: '1000'
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload an ownership document.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      setStatus('Uploading document to IPFS...');
      const uploadData = new FormData();
      uploadData.append('file', file);
      
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: uploadData,
      });
      const resJson = await res.json();
      
      if (!resJson.success) throw new Error(resJson.error || "IPFS upload failed");
      const ipfsHash = resJson.ipfsHash;

      // Ensure Freighter is connected and get the public key to use as owner
      const { getAddress } = await import('@stellar/freighter-api');
      const addressObj = await getAddress();
      const ownerAddress = typeof addressObj === 'string' ? addressObj : (addressObj as any).address;
      if (!ownerAddress) throw new Error("Wallet not connected");

      setStatus('Requesting signature from Freighter wallet...');
      
      // Generate unique asset ID for the contract
      const assetId = `ASSET-${Date.now()}`;
      
      // Convert arguments to SCVal
      const args = [
        nativeToScVal(assetId, { type: 'string' }),
        nativeToScVal(ownerAddress, { type: 'address' }),
        nativeToScVal(Math.floor(new Date(formData.purchaseDate).getTime() / 1000), { type: 'u64' }),
        nativeToScVal(Number(formData.purchasePrice), { type: 'u64' }),
        nativeToScVal(ipfsHash, { type: 'string' })
      ];

      // Submit to Soroban Smart Contract
      setStatus('Registering on Stellar Blockchain (may take a few seconds)...');
      await submitContractCall('register_asset', args);

      // Save to Backend Database for Dynamic Dashboard
      setStatus('Saving to off-chain indexer...');
      await fetch('http://localhost:5000/api/assets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: assetId,
          name: formData.name,
          type: formData.type,
          purchasePrice: formData.purchasePrice,
          locationDetails: formData.type === 'Property' ? {
            state: formData.state,
            areaType: formData.areaType,
            areaSqFt: Number(formData.areaSqFt)
          } : null
        })
      });

      alert(`Asset registered successfully! IPFS Hash: ${ipfsHash}`);
      router.push('/');
    } catch (error: any) {
      console.error(error);
      alert(`Registration failed: ${error.message || error}`);
    } finally {
      setIsSubmitting(false);
      setStatus('');
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <nav className="navbar animate-fade-in stagger-1">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="navbar-brand">Asset<span className="text-gradient">Vault</span></div>
        </Link>
      </nav>

      <div className="animate-fade-in stagger-2" style={{ maxWidth: '650px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '2.5rem', fontSize: '2.5rem' }}>Register New Asset</h2>

        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '3rem' }}>
          <div className="form-group">
            <label className="form-label">Asset Name</label>
            <input 
              type="text" 
              name="name"
              className="form-control" 
              placeholder="e.g., Plot in Bandra" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Asset Type</label>
            <select 
              name="type"
              className="form-control" 
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="Property">Property / Land</option>
              <option value="Gold">Gold / Jewelry</option>
              <option value="Vehicle">Vehicle</option>
            </select>
          </div>

          {formData.type === 'Property' && (
            <div className="form-group" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Location & Valuation Details</h4>
              <div className="grid grid-cols-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label className="form-label">State</label>
                  <select name="state" className="form-control" value={formData.state} onChange={handleInputChange}>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="delhi">Delhi</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="uttar pradesh">Uttar Pradesh</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Area Type</label>
                  <select name="areaType" className="form-control" value={formData.areaType} onChange={handleInputChange}>
                    <option value="metro">Metro City</option>
                    <option value="city">Normal City</option>
                    <option value="town">Town</option>
                    <option value="village">Village</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="form-label">Total Area (Sq. Ft.)</label>
                <input 
                  type="number" 
                  name="areaSqFt"
                  className="form-control" 
                  value={formData.areaSqFt}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label className="form-label">Purchase Price (INR)</label>
              <input 
                type="number" 
                name="purchasePrice"
                className="form-control" 
                placeholder="200000" 
                value={formData.purchasePrice}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="form-label">Purchase Date</label>
              <input 
                type="date" 
                name="purchaseDate"
                className="form-control" 
                value={formData.purchaseDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Upload Ownership Document (Sale Deed, Invoice)</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="file" 
                className="form-control" 
                style={{ padding: '0.75rem', cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                required
              />
            </div>
            <p style={{ fontSize: '0.85rem', marginTop: '0.75rem', color: 'var(--text-muted)' }}>
              This document will be securely pinned to IPFS. Only the cryptographic hash is permanently stored on-chain.
            </p>
          </div>

          {status && (
            <div className="animate-fade-in" style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--accent-primary)', borderRadius: '8px', color: '#c4b5fd', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', border: '2px solid #c4b5fd', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}></div>
              {status}
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }} disabled={isSubmitting}>
            {isSubmitting ? 'Processing Transaction...' : 'Sign & Register Asset'}
          </button>
        </form>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </div>
  );
}
