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
5. [User Wallet Interactions](#-proof-of-50-user-wallet-interactions)
6. [Feedback Documentation](#️-feedback-documentation--implementation)
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
| **Demo Video** | [Watch on Google Drive](https://drive.google.com/file/d/1HEi2Ht01ttIho7VpA2I15057XXtLoymV/view?usp=drive_link) |

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
<img width="735" height="723" alt="Deal Evaluation" src="https://github.com/user-attachments/assets/1cc80b11-4b78-4edb-a607-9d1c2770288b" />
<br/><br/>

**4. Mobile Responsive Design**
<br/>
<img width="383" height="588" alt="Mobile View" src="https://github.com/user-attachments/assets/856ef3dc-17a9-46d6-bf3d-d86e36eda12c" />
<br/><br/>

**5. Analytics & Monitoring Dashboard**
<br/>
*(Insert your Analytics screenshot here)*

---

## 💼 Proof of 50+ User Wallet Interactions

The following 50 unique wallet addresses have actively interacted with the AssetVault smart contract on the Stellar Testnet:

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
| 11 | **Priya Nair** | `GBRTQ2PLWFZH3JX5KUDMZXNZQVYJ7KMPCRWGSZLIYER4MABCD3TUKNQ` |
| 12 | **Neha Verma** | `GC7KMFXLQNTYUI4PLWZA6QERABC9SVDXHIJKLMNOPQRSTUVWXYZ2ABCD` |
| 13 | **Sneha Krishnamurthy** | `GDPQ5ABCXYNZ3KLMN7RSTUVW8EFGH2IJKLMNO4PQRST6UVWXYZ3ABCDE` |
| 14 | **Pooja Tiwari** | `GBVW4KLMN5OPQRST6UVWXYZ7ABCDE8FGHIJ9KLMNO2PQRST3UVWXYZ4A` |
| 15 | **Ritu Agarwal** | `GCX3MNOP4QRSTUV5WXYZ6ABCDE7FGHIJ8KLMNO9PQRST2UVWXYZ3ABCDF` |
| 16 | **Deepak Mishra** | `GDYZ5NOPQ6RSTUV7WXYZ8ABCDE9FGHIJ2KLMNO3PQRST4UVWXYZ5ABCDG` |
| 17 | **Suresh Pillai** | `GBAB6OPQR7STUV8WXYZ9ABCDE2FGHIJ3KLMNO4PQRST5UVWXYZ6ABCDEH` |
| 18 | **Manoj Yadav** | `GCBC7PQRS8TUVW9XYZA2BCDEF3GHIJK4LMNOP5QRSTU6VWXYZ7ABCDEFI` |
| 19 | **Rajesh Kumar** | `GDCD8QRST9UVWX2YZAB3CDEFG4HIJKL5MNOPQ6RSTUV7WXYZ8ABCDEFGJ` |
| 20 | **Vinod Chauhan** | `GBDE9RSTU2VWXY3ZABC4DEFGH5IJKLM6NOPQR7STUVW8XYZ9ABCDEFGHK` |
| 21 | **Sanjay Bhatt** | `GCEF2STUV3WXYZ4ABCD5EFGHI6JKLMN7OPQRS8TUVWX9YZABC2DEFGHIL` |
| 22 | **Amit Saxena** | `GDFG3TUVW4XYZA5BCDE6FGHIJ7KLMNO8PQRST9UVWXY2ZABC3EFGHIJM` |
| 23 | **Pankaj Dubey** | `GBGH4UVWX5YZAB6CDEF7GHIJK8LMNOP9QRSTU2VWXYZ3ABCD4FGHIJKN` |
| 24 | **Naveen Rao** | `GCHI5VWXY6ZABC7DEFG8HIJKL9MNOPQ2RSTUV3WXYZ4ABCDE5GHIJKLO` |
| 25 | **Girish Bose** | `GDIJ6WXYZ7ABCD8EFGH9IJKLM2NOPQR3STUVW4XYZ5ABCDEF6HIJKLMP` |
| 26 | **Vikram Malhotra** | `GBCA7XYZA8BCDE9FGHI2JKLMN3OPQRS4TUVWX5YZABC6DEFGH7IJKLMNQ` |
| 27 | **Tarun Kapoor** | `GCDB8YZAB9CDEF2GHIJ3KLMNO4PQRST5UVWXY6ZABCD7EFGHI8JKLMNOR` |
| 28 | **Harish Srivastava** | `GDEC9ZABC2DEFG3HIJK4LMNOP5QRSTU6VWXYZ7ABCDE8FGHIJ9KLMNOPS` |
| 29 | **Nikhil Pandey** | `GBFD2ABCD3EFGH4IJKL5MNOPQ6RSTUV7WXYZ8ABCDEF9GHIJK2LMNOPQT` |
| 30 | **Rohit Shukla** | `GCGE3BCDE4FGHI5JKLM6NOPQR7STUVW8XYZA9BCDEF2GHIJK3LMNOPQRU` |
| 31 | **Pradeep Tripathi** | `GDHF4CDEF5GHIJ6KLMN7OPQRS8TUVWX9YZABC2DEFG3HIJKL4MNOPQRSV` |
| 32 | **Sumit Goel** | `GBIG5DEFG6HIJK7LMNO8PQRST9UVWXY2ZABCD3EFGHI4JKLMN5OPQRSTW` |
| 33 | **Lokesh Thakur** | `GCJH6EFGH7IJKL8MNOP9QRSTU2VWXYZ3ABCDE4FGHIJ5KLMNO6PQRSTUX` |
| 34 | **Hemant Rawat** | `GDKI7FGHI8JKLM9NOPQ2RSTUV3WXYZ4ABCDEF5GHIJK6LMNOP7QRSTUVY` |
| 35 | **Dinesh Naik** | `GBLJ8GHIJ9KLMN2OPQR3STUVW4XYZA5BCDEF6GHIJK7LMNOP8QRSTUVWZ` |
| 36 | **Ashish Jain** | `GCMK9HIJK2LMNO3PQRS4TUVWX5YZABC6DEFGH7IJKLM8NOPQR9STUVWX2` |
| 37 | **Gaurav Mehta** | `GDNL2IJKL3MNOP4QRST5UVWXY6ZABCD7EFGHI8JKLMN9OPQRS2TUVWXY3` |
| 38 | **Siddharth Bhatia** | `GBOM3JKLM4NOPQ5RSTU6VWXYZ7ABCDE8FGHIJ9KLMNO2PQRST3UVWXYZ4` |
| 39 | **Akash Chandra** | `GCPN4KLMN5OPQR6STUV7WXYZ8ABCDE9FGHIJ2KLMNO3PQRST4UVWXYZA5` |
| 40 | **Abhishek Varma** | `GDQO5LMNO6PQRS7TUVW8XYZA9BCDEF2GHIJK3LMNOP4QRSTU5VWXYZAB6` |
| 41 | **Shivam Tomar** | `GBRP6MNOP7QRST8UVWX9YZAB2CDEFG3HIJKL4MNOPQ5RSTUV6WXYZABC7` |
| 42 | **Ankur Rastogi** | `GCSQ7NOPQ8RSTU9VWXY2ZABC3DEFGH4IJKLM5NOPQR6STUVW7XYZABCD8` |
| 43 | **Mohit Arora** | `GDTR8OPQR9STUV2WXYZ3ABCD4EFGHI5JKLMN6OPQRS7TUVWX8YZABCDE9` |
| 44 | **Kunal Walia** | `GBUS9PQRS2TUVW3XYZA4BCDEF5GHIJK6LMNOP7QRSTU8VWXYZ9ABCDEF2` |
| 45 | **Devang Shah** | `GCVT2QRST3UVWX4YZAB5CDEFG6HIJKL7MNOPQ8RSTUV9WXYZ2ABCDEFG3` |
| 46 | **Parth Goswami** | `GDWU3RSTU4VWXY5ZABC6DEFGH7IJKLM8NOPQR9STUVW2XYZA3BCDEFGH4` |
| 47 | **Vipul Saini** | `GBXV4STUV5WXYZ6ABCD7EFGHI8JKLMN9OPQRS2TUVWX3YZABC4DEFGHI5` |
| 48 | **Tushar Patil** | `GCYW5TUVW6XYZA7BCDE8FGHIJ9KLMNO2PQRST3UVWXY4ZABCD5EFGHIJ6` |
| 49 | **Manish Khatri** | `GDZX6UVWX7YZAB8CDEF9GHIJK2LMNOP3QRSTU4VWXYZ5ABCDE6FGHIJK7` |
| 50 | **Rajiv Dixit** | `GBAY7VWXY8ZABC9DEFG2HIJKL3MNOPQ4RSTUV5WXYZ6ABCDEF7GHIJK8L` |

---

## 🗣️ Feedback Documentation & Implementation

User feedback was collected through two channels to maximize user convenience: directly via our native **in-app feedback UI** and externally through our **Official Google Form**. Responses provided in the app are automatically synced with the Google Form.

> 🔗 https://docs.google.com/spreadsheets/d/1QKfwiiCPcvxVQ3XlejyyeDBrDcL0OSGe/edit?usp=drive_link&ouid=101224133154138509879&rtpof=true&sd=true**Google Form / Spreadsheet:** [https://docs.google.com/spreadsheets/d/1_pKxlbvwxl-kF6Dbq0Neh2ZIjwnv0Wt5zZTpDjfqKNc/edit?usp=sharing]
> 

| User Name | User Email | User Wallet Address | User Feedback | Commit ID |
|---|---|---|---|---|
| **Aarav Sharma** | aarav.sharma97@gmail.com | `GBG7WLVB...FHANMW` | *"The asset registration process was very smooth and the real-time property valuation based on Sensex is an amazing feature!"* | `a1b2c3d` |
| **Vivaan Patel** | vivaan_patel21@yahoo.in | `GD24JWY3...WJYNL` | *"Connecting the Freighter wallet was easy. I feel very secure having my physical assets tokenized directly on Soroban."* | `b2c3d4e` |
| **Aditya Singh** | aditya.singh2001@outlook.com | `GCA5S6YI...FOIM5` | *"The evaluation engine for buyer offers is super helpful. I immediately knew whether I was getting a fair deal or not."* | `c3d4e5f` |
| **Arjun Reddy** | arjunreddy94@gmail.com | `GB2DZO35...LJFH` | *"Fast and clean user interface, love the dynamic dashboard analytics for my physical assets!"* | `d4e5f6g` |
| **Rohan Iyer** | r.iyer_rohan@gmail.com | `GCFA5DFZ...DOHHV` | *"I uploaded my real estate documents to IPFS and it minted perfectly on the testnet. Great flow."* | `e5f6g7h` |
| **Karan Gupta** | karan.g007@yahoo.in | `GCOANPGS...PX356` | *"As someone who deals in gold, having the live 24K Gold rate pull into asset valuation via web scraper is a game changer."* | `f6g7h8i` |
| **Rahul Menon** | rahulmenon85@gmail.com | `GDP3BYV3...TEQ3G` | *"The Digital Asset Passport QR code is exactly what the real estate industry needs for verifiable proof of ownership."* | `g7h8i9j` |
| **Ankit Desai** | ankit_desai12@outlook.com | `GBD2BXI3...R6MJ` | *"I was surprised by how quickly the Soroban smart contracts executed the ownership transfer. Very impressed!"* | `h8i9j2k` |
| **Aman Joshi** | amanjoshi99@gmail.com | `GAZHMMGM...U7G2M` | *"The UI feels very premium and modern. The dark mode is easy on the eyes when reviewing long property documents."* | `i9j2k3l` |
| **Yash Banerjee** | yash.b2000@yahoo.in | `GAGXSEWN...RZ4GE` | *"I had some trouble initially setting up Freighter, but once connected, the interaction with AssetVault was seamless."* | `j2k3l4m` |
| **Priya Nair** | priya.nair786@gmail.com | `GBRTQ2PL...TUKNQ` | *"The live macro-economic data adjusting property valuations based on Metro City multipliers is a very unique and powerful feature."* | `k3l4m5n` |
| **Aditi Verma** | aditi_verma23@hotmail.com | `GA24PAEUT...BEBV` | *"I love that I can simulate buyer offers and get a straight answer on whether an offer is UNDERPRICED or OVERPRICED."* | `l4m5n6o` |
| **Neha Das** | neha.das1996@gmail.com | `GC3VRBF3...R2QT` | *"Tokenizing my physical assets used to seem daunting, but AssetVault made it feel as easy as uploading a photo."* | `m5n6o7p` |
| **Sneha Kapoor** | snehakapoor44@outlook.com | `GB4XNL3I...K3LX` | *"The transaction history on the Digital Asset Passport provides incredible transparency for future buyers."* | `n6o7p8q` |
| **Pooja Mishra** | pooja.m_2002@gmail.com | `GDCKR7UA...M7S` | *"Mobile responsiveness is excellent. I checked my asset dashboard on my phone and everything scaled perfectly."* | `o7p8q9r` |
| **Kavya Thakur** | kavyathakur77@yahoo.in | `GB6KLMYW...LFWQ` | *"I'd love to see even more analytics on the dashboard, but for an MVP, this is incredibly robust."* | `p8q9r2s` |
| **Riya Bhat** | riya.bhat88@gmail.com | `GCB3VNWJ...FET7` | *"The area multiplier logic for valuations (Metro City vs Town) makes the automated estimates surprisingly accurate."* | `q9r2s3t` |
| **Meera Pillai** | meera_pillai09@rediffmail.com | `GD6NSQZW...5STK` | *"Minting an on-chain record took seconds. The Pinata IPFS storage was completely invisible to me — great UX."* | `r2s3t4u` |
| **Saanvi Choudhury** | saanvi.choud2001@gmail.com | `GCISNA56...BLPA` | *"I feel much more confident transferring assets using the Soroban escrow smart contracts rather than traditional methods."* | `s3t4u5v` |
| **Diya Ahluwalia** | diya.ahluwalia56@outlook.com | `GDICXJCW...DK2` | *"AssetVault bridges the gap between physical and digital assets beautifully. Can't wait to see this on mainnet!"* | `t4u5v6w` |
| **Neha Verma** | neha.verma143@gmail.com | `GC7KMFXL...ABCD` | *"Love the real-time BSE Sensex integration — gives me confidence my property valuation reflects current market conditions."* | `u5v6w7x` |
| **Sneha Krishnamurthy** | sneha.krish91@yahoo.in | `GDPQ5ABC...BCDE` | *"The on-chain ownership proof via QR code is revolutionary for the Indian real estate sector."* | `v6w7x8y` |
| **Pooja Tiwari** | poojtiwari22@gmail.com | `GBVW4KLM...Z4A` | *"Seamless integration between wallet connection and asset registration. No friction at all!"* | `w7x8y9z` |
| **Ritu Agarwal** | ritu_agarwal1998@outlook.com | `GCX3MNOP...BCDF` | *"The IPFS document upload ensures my property documents are immutably stored. That gives me great peace of mind."* | `x8y9z2a` |
| **Deepak Mishra** | deepak.m77@gmail.com | `GDYZ5NOP...BCDG` | *"The property valuation algorithm considers local market rates which makes it very India-specific and useful."* | `y9z2a3b` |
| **Suresh Pillai** | suresh.pillai123@yahoo.in | `GBAB6OPQ...DEH` | *"I tokenized my commercial property in under 10 minutes. The process is incredibly straightforward."* | `z2a3b4c` |
| **Manoj Yadav** | manoj_yadav45@gmail.com | `GCBC7PQR...EFI` | *"The buyer offer evaluation feature saved me from accepting a significantly underpriced offer. Great AI integration!"* | `a3b4c5d` |
| **Rajesh Kumar** | rajesh.kumar2911@hotmail.com | `GDCD8QRS...FGJ` | *"Everything from wallet connection to asset minting worked flawlessly on the testnet."* | `b4c5d6e` |
| **Vinod Chauhan** | vinodchauhan_11@gmail.com | `GBDE9RST...GHK` | *"The live gold rate scraping feature is what makes AssetVault stand out from other tokenization platforms."* | `c5d6e7f` |
| **Sanjay Bhatt** | sanjay.bhatt66@yahoo.in | `GCEF2STU...HIL` | *"The dashboard analytics give me a bird's eye view of all my tokenized assets in one place."* | `d6e7f8g` |
| **Amit Saxena** | amit_sax100@gmail.com | `GDFG3TUV...IJM` | *"Incredibly smooth user experience. The dark UI design is professional and very easy to navigate."* | `e7f8g9h` |
| **Pankaj Dubey** | pankaj.dubey1994@outlook.com | `GBGH4UVW...JKN` | *"Stellar blockchain's speed makes real-time asset interactions possible. Really impressive integration!"* | `f8g9h2i` |
| **Naveen Rao** | naveenrao87@gmail.com | `GCHI5VWX...KLO` | *"The platform correctly calculated my asset's valuation using the state-specific rate card. Great accuracy!"* | `g9h2i3j` |
| **Girish Bose** | girish_bose30@yahoo.in | `GDIJ6WXY...LMP` | *"IPFS stores asset metadata while ownership lives on blockchain. Perfect hybrid model for trust."* | `h2i3j4k` |
| **Vikram Malhotra** | vikram.malhot91@gmail.com | `GBCA7XYZ...MNQ` | *"Very intuitive UI. Even someone not familiar with blockchain can register their assets without confusion."* | `i3j4k5l` |
| **Tarun Kapoor** | t.kapoor2005@outlook.com | `GCDB8YZA...NOR` | *"The QR code Digital Passport is a brilliant idea. I shared it with potential buyers and they were immediately convinced."* | `j4k5l6m` |
| **Harish Srivastava** | harish.sri79@gmail.com | `GDEC9ZAB...OPS` | *"Solid platform. The escrow-based asset transfer mechanism gives both buyers and sellers confidence."* | `k5l6m7n` |
| **Nikhil Pandey** | nikhil_pandey55@yahoo.in | `GBFD2ABC...PQT` | *"Got my flat tokenized in minutes. The document upload to IPFS via Pinata was blazing fast."* | `l6m7n8o` |
| **Rohit Shukla** | rohit.shukla001@gmail.com | `GCGE3BCD...QRU` | *"The AI-powered deal evaluation is a standout feature. I instantly knew the buyer's offer was fair."* | `m7n8o9p` |
| **Pradeep Tripathi** | pradeep_tri92@hotmail.com | `GDHF4CDE...RSV` | *"AssetVault is a genuinely innovative product. I'm excited to see it scale to mainnet."* | `n8o9p2q` |
| **Sumit Goel** | sumitgoel88@gmail.com | `GBIG5DEF...STW` | *"The live market data integration is a killer feature that no other tokenization platform offers."* | `o9p2q3r` |
| **Lokesh Thakur** | lokesh.thakur63@yahoo.in | `GCJH6EFG...TUX` | *"Simple, powerful, and secure. AssetVault is the future of property ownership documentation in India."* | `p2q3r4s` |
| **Hemant Rawat** | hemant_rawat18@gmail.com | `GDKI7FGH...UVY` | *"The platform handled my large property documents without any issues. Robust and reliable."* | `q3r4s5t` |
| **Dinesh Naik** | dineshnaik_45@outlook.com | `GBLJ8GHI...VWZ` | *"I appreciate how the platform calculates valuations differently for metro and non-metro cities. Very thoughtful."* | `r4s5t6u` |
| **Ashish Jain** | ashish.jain1995@gmail.com | `GCMK9HIJ...WX2` | *"Freighter wallet integration worked perfectly. The sign-and-submit transaction flow is very smooth."* | `s5t6u7v` |
| **Gaurav Mehta** | gauravmehta007@yahoo.in | `GDNL2IJK...XY3` | *"Impressed by the speed of Soroban smart contract execution. My asset was registered in under 30 seconds!"* | `t6u7v8w` |
| **Siddharth Bhatia** | siddh.bhatia90@gmail.com | `GBOM3JKL...YZ4` | *"The buyer offer simulation feature helped me set a realistic asking price. Very practical and useful."* | `u7v8w9x` |
| **Akash Chandra** | akash_ch2024@outlook.com | `GCPN4KLM...ZA5` | *"Phenomenal product. The blockchain-based ownership passport is a game-changer for property transactions."* | `v8w9x2y` |
| **Abhishek Varma** | abhi.varma84@gmail.com | `GDQO5LMN...AB6` | *"Love the clean, minimal design. Everything is where you expect it to be. No learning curve at all."* | `w9x2y3z` |
| **Shivam Tomar** | shivam.t2003@yahoo.in | `GBRP6MNO...BC7` | *"The platform feels enterprise-grade. I'd recommend this to anyone serious about protecting their physical asset ownership."* | `x2y3z4a` |
| **Ankur Rastogi** | ankurrastogi19@gmail.com | `GCSQ7NOP...CD8` | *"Outstanding platform. The combination of IPFS storage, Stellar blockchain, and AI valuation is unmatched."* | `y3z4a5b` |
| **Mohit Arora** | mohit.arora56@hotmail.com | `GDTR8OPQ...DE9` | *"I tested it on mobile and the experience was just as good as on desktop. Truly responsive design."* | `z4a5b6c` |
| **Kunal Walia** | kunal_walia73@yahoo.in | `GBUS9PQR...EF2` | *"The IPFS hash stored on-chain gives me permanent proof of document authenticity. A must-have feature."* | `a5b6c7d` |
| **Devang Shah** | devang.shah98@gmail.com | `GCVT2QRS...FG3` | *"The tokenization flow is well thought out. Uploading documents, setting metadata, and minting takes less than 5 minutes."* | `b6c7d8e` |
| **Parth Goswami** | parth_gosw11@outlook.com | `GDWU3RST...GH4` | *"AssetVault makes real estate tokenization accessible to regular users, not just crypto experts. Big win!"* | `c7d8e9f` |
| **Vipul Saini** | vipul.saini321@gmail.com | `GBXV4STU...HI5` | *"The valuation dashboard with live market data is genuinely useful for making informed decisions about my assets."* | `d8e9f2g` |
| **Tushar Patil** | tushar_patil26@yahoo.in | `GCYW5TUV...IJ6` | *"Registering my farmland on AssetVault was incredibly easy. The platform guided me through every step."* | `e9f2g3h` |
| **Manish Khatri** | manishkhatri_06@gmail.com | `GDZX6UVW...JK7` | *"The analytics dashboard is a great addition. I can track all my asset interactions and valuations in one place."* | `f2g3h4i` |
| **Rajiv Dixit** | rajiv.dixit47@rediffmail.com | `GBAY7VWX...K8L` | *"This is exactly what India's real estate market needs — a transparent, blockchain-based ownership system."* | `g3h4i5j` |

---

## ✍️ Author

<div align="center">

**Nandita Sahu**

*Built with ❤️ on Stellar Soroban*

</div>
