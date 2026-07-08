#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, String, Symbol};

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Asset(String), // The Asset ID string
}

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct AssetRecord {
    pub asset_id: String,
    pub owner: Address,
    pub purchase_date: u64,
    pub purchase_price: u64,
    pub ipfs_hash: String,
    pub timestamp: u64,
    pub status: Symbol,
}

#[contract]
pub struct AssetVaultContract;

#[contractimpl]
impl AssetVaultContract {
    /// Register a new physical asset
    pub fn register_asset(
        env: Env,
        asset_id: String,
        owner: Address,
        purchase_date: u64,
        purchase_price: u64,
        ipfs_hash: String,
    ) {
        // Ensure the transaction is signed by the prospective owner
        owner.require_auth();

        let key = DataKey::Asset(asset_id.clone());
        
        // Prevent duplicate registrations (Fraud Prevention)
        if env.storage().persistent().has(&key) {
            panic!("Asset already registered");
        }

        let asset = AssetRecord {
            asset_id,
            owner,
            purchase_date,
            purchase_price,
            ipfs_hash,
            timestamp: env.ledger().timestamp(),
            status: Symbol::new(&env, "Registered"),
        };

        // Store the asset record permanently
        env.storage().persistent().set(&key, &asset);
    }

    /// Transfer ownership to a new buyer
    pub fn transfer_ownership(
        env: Env,
        asset_id: String,
        current_owner: Address,
        new_owner: Address,
        new_purchase_date: u64,
        new_purchase_price: u64,
    ) {
        // Ensure the current owner authorizes the transfer
        current_owner.require_auth();

        let key = DataKey::Asset(asset_id.clone());
        
        // Retrieve the existing asset record
        let mut asset: AssetRecord = env.storage().persistent().get(&key).expect("Asset not found");
        
        // Verify current owner matches
        if asset.owner != current_owner {
            panic!("Not the current owner");
        }

        // Update ownership details
        asset.owner = new_owner;
        asset.purchase_date = new_purchase_date;
        asset.purchase_price = new_purchase_price;
        asset.timestamp = env.ledger().timestamp();
        
        env.storage().persistent().set(&key, &asset);
    }

    /// Retrieve the asset details by ID (Ownership Verification)
    pub fn get_asset(env: Env, asset_id: String) -> AssetRecord {
        let key = DataKey::Asset(asset_id);
        env.storage().persistent().get(&key).expect("Asset not found")
    }
}
mod test;
