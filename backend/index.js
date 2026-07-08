require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const pinataSDK = require('@pinata/sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Setup Multer for file uploads
const upload = multer({ dest: 'uploads/' });

const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY);

// POST /api/upload
// Uploads a document to IPFS via Pinata and returns the hash
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, error: 'No file uploaded' });
        }

        const readableStreamForFile = fs.createReadStream(req.file.path);
        const result = await pinata.pinFileToIPFS(readableStreamForFile);
        const ipfsHash = result.IpfsHash;
        
        // Clean up the temporary file
        fs.unlinkSync(req.file.path);
        
        res.json({ success: true, ipfsHash, message: "File securely uploaded to IPFS" });
    } catch (error) {
        if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/market/gold
// Mock API fetching real-time gold rates
app.get('/api/market/gold', (req, res) => {
    // Mocking 24K Gold Price in INR per 10 grams (e.g., around ₹73,000)
    const basePrice = 72000;
    const fluctuation = Math.floor(Math.random() * 2000); 
    const currentPrice = basePrice + fluctuation;
    
    res.json({ success: true, asset: 'gold', currentPrice, unit: '10g', currency: 'INR' });
});

// GET /api/market/property
// Mock API fetching real-estate valuation based on location
app.get('/api/market/property', (req, res) => {
    const { location, areaSqFt } = req.query;
    
    if (!location) {
         return res.status(400).json({ success: false, error: 'Location is required' });
    }

    // Mocking real-estate valuation based on location and area
    const loc = location.toLowerCase();
    let baseRate = 5000; // default rate per sq ft
    if (loc === 'mumbai') baseRate = 25000;
    if (loc === 'delhi') baseRate = 18000;
    if (loc === 'bangalore') baseRate = 12000;

    const area = parseFloat(areaSqFt) || 1000;
    const currentPrice = baseRate * area;

    res.json({ success: true, asset: 'property', currentPrice, currency: 'INR' });
});

// POST /api/evaluate-deal
// Selling / Buying Assistant logic
app.post('/api/evaluate-deal', (req, res) => {
    const { offerPrice, currentMarketValue } = req.body;
    
    if (!offerPrice || !currentMarketValue) {
        return res.status(400).json({ success: false, error: 'Missing pricing parameters' });
    }

    const difference = currentMarketValue - offerPrice;
    const percentage = ((difference / currentMarketValue) * 100).toFixed(2);
    
    let recommendation = '';
    let status = '';
    
    if (offerPrice < currentMarketValue * 0.9) {
        status = 'UNDERPRICED';
        recommendation = `Warning: You are selling ${percentage}% below market price.`;
    } else if (offerPrice > currentMarketValue * 1.1) {
        status = 'OVERPRICED';
        const overPercent = (((offerPrice - currentMarketValue) / currentMarketValue) * 100).toFixed(2);
        recommendation = `Warning: This offer is ${overPercent}% above market price.`;
    } else {
        status = 'FAIR_DEAL';
        recommendation = `Fair Deal. The price aligns with current market valuation.`;
    }

    res.json({ success: true, difference, percentage, status, recommendation });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`AssetVault Backend server running on port ${PORT}`);
});
