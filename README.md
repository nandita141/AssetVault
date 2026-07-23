<div align="center">

<h1>🔐 AssetVault</h1>

<p><strong>Decentralized Physical Asset Tokenization on Stellar Soroban</strong></p>

<p>
  AssetVault is a decentralized physical asset tokenization and verification platform built on the <strong>Stellar blockchain (Soroban)</strong>.<br/>
  Register real-world assets — Real Estate, Gold, and more — securely on-chain and manage ownership with cryptographic proof.
</p>

</div>

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#️-tech-stack)
3. [Getting Started](#-getting-started)
4. [MVP Submission Details](#-level-4-mvp-submission-details)
5. [User Wallet Interactions](#-proof-of-10-user-wallet-interactions)
6. [User Feedback](#️-basic-user-feedback-summary)
7. [Author](#️-author)

---

## 🌟 Features

| Feature | Description |
|---|---|
| 🏠 **Asset Registration** | Upload documentation to IPFS and mint an on-chain record for a physical asset |
| 🪪 **Digital Asset Passport** | Verifiable QR code page to prove ownership and view full transaction history |
| 💰 **Buyer Offers & Deal Evaluation** | Receive buyer offers with instant AI evaluation: `UNDERPRICED`, `FAIR DEAL`, or `OVERPRICED` |
| 📈 **Live Market Web Scraping** | Real-time 24K Gold rates and BSE Sensex index scraped using `axios` + `cheerio` |
| 🏗️ **Dynamic Property Valuation** | Valuations adjust dynamically based on state rates, Sensex data & area multipliers |
| 📊 **Analytics Dashboard** | Web traffic monitoring & platform metrics with interactive charts |
| 📱 **Fully Responsive** | Premium dark UI that works seamlessly on desktop and mobile |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 16, React 19, Vanilla CSS, Recharts |
| **Backend** | Node.js, Express.js, IPFS via Pinata |
| **Blockchain** | Stellar Testnet, Soroban Smart Contracts (Rust) |
| **Wallet** | Freighter Browser Extension |
| **CI/CD** | GitHub Actions, Vercel (Frontend), Render (Backend) |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- ✅ **Node.js** v18 or higher
- ✅ **Rust & Soroban CLI** — Required for smart contract compilation
- ✅ **Freighter Wallet** — Browser extension configured for Stellar Testnet

### 1. Clone the Repository

```bash
git clone https://github.com/nandita141/AssetVault.git
cd AssetVault
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PINATA_API_KEY=your_pinata_api_key
PINATA_API_SECRET=your_pinata_api_secret
PORT=5000
```

```bash
npm run dev
```

> Backend runs at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at `http://localhost:3000`

### 4. Smart Contracts

```bash
cd contracts
cargo build
cargo test
```

---

## 📝 Level 4 MVP Submission Details

> **📢 Note to Evaluator:** The following sections contain all required deliverables for the MVP submission.

### 🔗 Live Demo

| Resource | Link |
|---|---|
| **Live App** | [https://asset-vault-mocha.vercel.app/](https://asset-vault-mocha.vercel.app/) |
| **Demo Video** |https://drive.google.com/file/d/1rn2tqjGIhc_Fa2gKas1EAwo_qQMDOzBj/view?usp=sharing |

### 📜 Smart Contract Deployment

| Detail | Value |
|---|---|
| **Network** | Stellar Testnet |
| **Contract ID** | `CAGQTTVO7ONOED664QHUP6WTMZLJEQOIAGSIIW6NKXCKXNQ3ERUKTO74` |

### 📸 Screenshots

**1. Product UI — Main Dashboard**
<br/>
<img width="1482" height="718" alt="Main Dashboard" src="https://github.com/user-attachments/assets/8440e9bf-7e95-4790-a260-ebef64a996b6" />
<br/><br/>

**2. Asset Registration & Digital Passport**
<br/>
<img width="801" height="622" alt="Asset Registration" src="https://github.com/user-attachments/assets/d60c33cd-2526-4c79-b818-91746dba8d01" />
<br/><br/>

**3. Offers & Deal Evaluation**
<br/>
<img width="506" height="663" alt="image" src="https://github.com/user-attachments/assets/a4a12403-bbcd-4f7c-a541-d5d8504b81d3" />

<br/><br/>

**4. Mobile Responsive Design**
<br/>
<img width="383" height="588" alt="Mobile View" src="https://github.com/user-attachments/assets/856ef3dc-17a9-46d6-bf3d-d86e36eda12c" />
<br/><br/>

**5. Analytics & Monitoring Dashboard**
<br/>
*(Insert your Analytics screenshot here)*

---

## 💼 Proof of 10+ User Wallet Interactions

The following 10 unique wallet addresses have actively interacted with the AssetVault smart contract on the Stellar Testnet:

| # | Name | Wallet ID (Stellar Testnet) |
|---|---|---|
| 1 | **Aarav Sharma** | `GBG7WLVBPGXZTY4HZQ56RX5DA7BHGLXUQYF2BIDPBU5JTUR3T5FHANMW` |
| 2 | **Vivaan Patel** | `GD24JWY3X5TRCJSKAEPDU4NEFYMAHMBJPM337DXGPFBGDYBLVXCWJYNL` |
| 3 | **Aditya Singh** | `GCA5S6YI2323CWKXTYMOU3JJCIZ3MEZUTX7OPYT3NQMEPENFLZ5FOIM5` |
| 4 | **Arjun Reddy** | `GB2DZO35FZYEIPLBQ3KEPVEUO6YQRXZSGFKRQGL5EIRJGGL67RI2LJFH` |
| 5 | **Rohan Iyer** | `GCFA5DFZUK25P5Q3RWYI66CDN462MEDXYNTWAP7T5I4P4D3DBMADOHHV` |
| 6 | **Karan Gupta** | `GCOANPGSDE3CZXUHYLNSUETZDSUXKWUTS72LV6LQJXTKNGJWHOOPX356` |
| 7 | **Rahul Menon** | `GDP3BYV3KONYZIPRW4XEWIWMWNE3MGYN4T2YB3YRYMHSFGSOTO7TEQ3G` |
| 8 | **Ankit Desai** | `GBD2BXI3UM55F6S6TK34ERZIIOEKMLWRARRFBWCIISBMRPOBZ6TSR6MJ` |
| 9 | **Aman Joshi** | `GAZHMMGMMIIYO3USUGZNSI3B7GWANSHH2TADRXOWVP6AS4BMZQWU7G2M` |
| 10 | **Yash Banerjee** | `GAGXSEWNMDMDEF6NQOO53GT57NNPFR4NCD5GCOQ2UU3TZMQRHRJRZ4GE` |

---

## 🗣️ Basic User Feedback Summary

| # | Name | Wallet ID | Feedback |
|---|---|---|---|
| 1 | **Aarav Sharma** | `GBG7...FHANMW` | *"The asset registration process was very smooth and the real-time property valuation is an amazing feature!"* |
| 2 | **Vivaan Patel** | `GD24...WJYNL` | *"Connecting the Freighter wallet was easy. I feel very secure having my physical assets tokenized on Soroban."* |
| 3 | **Aditya Singh** | `GCA5...FOIM5` | *"The evaluation engine for buyer offers is super helpful. I immediately knew whether I was getting a fair deal or not."* |
| 4 | **Arjun Reddy** | `GB2D...LJFH` | *"Fast and clean user interface, love the dynamic dashboard analytics!"* |

> 📄 **Full Report:** A complete list of **20+ user feedback reviews** is available in [USER_FEEDBACK.md](./USER_FEEDBACK.md).

---

## ✍️ Author

<div align="center">

**Nandita Sahu**

*Built with ❤️ on Stellar Soroban*

</div>
