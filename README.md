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
**Nandita** - Individual Developer
Developed for Level 4 MVP Submission.
