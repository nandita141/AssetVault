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
[Insert your Vercel/Netlify Live Demo Link Here]

### 📜 Contract Deployment Address
**Network:** Stellar Testnet
**Contract Address:** `[Insert your Soroban Contract Address Here]`

### 📸 Screenshots
#### 1. Product UI
![Product UI]([Insert Link or Path to Product UI Screenshot Here])

#### 2. Mobile Responsive Design
![Mobile Responsive]([Insert Link or Path to Mobile UI Screenshot Here])

#### 3. Analytics or Monitoring Setup
![Analytics Dashboard]([Insert Link or Path to Analytics Screenshot Here])

### 🎥 Demo Video Link
[Insert YouTube/Loom Demo Video Link Here]

### 💼 Proof of 10+ User Wallet Interactions
- [Insert Transaction Hash 1]
- [Insert Transaction Hash 2]
- [Insert Transaction Hash 3]
- [Insert Transaction Hash 4]
- [Insert Transaction Hash 5]
- [Insert Transaction Hash 6]
- [Insert Transaction Hash 7]
- [Insert Transaction Hash 8]
- [Insert Transaction Hash 9]
- [Insert Transaction Hash 10]
*(You can also link to a stellar.expert account page showing the transactions)*

### 🗣️ Basic User Feedback Summary
> "The asset registration process was very smooth and the real-time property valuation is an amazing feature!" - *User 1*
> 
> "Connecting the Freighter wallet was easy, but I'd love to see more analytics on the dashboard." - *User 2*
>
> *(Add your actual user feedback summary here!)*
