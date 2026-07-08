# AssetVault 🔐

AssetVault is a decentralized physical asset tokenization and verification platform built on the Stellar blockchain (Soroban). It allows users to register real-world assets (Real Estate, Gold, etc.) securely on-chain, proving ownership and tracking transfer history through a cryptographic Digital Asset Passport.

## Features
- **Asset Registration:** Upload documentation to IPFS and mint an on-chain record for a physical asset.
- **Digital Asset Passport:** Verifiable QR code page to prove ownership and view transaction history.
- **Ownership Transfer:** Securely transfer the asset to a new owner via Stellar smart contracts.
- **Live Market Valuation:** Simulated market value APIs for tracking portfolio growth.
- **Built for Scale:** Responsive UI with real-time feedback and analytics.

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

## Team
Developed for Level 4 MVP Submission.
