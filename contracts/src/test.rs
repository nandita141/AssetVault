#![cfg(test)]
extern crate std;

use super::*;
use soroban_sdk::{testutils::Address as _, Address, Env, String};

#[test]
fn test_register_and_transfer() {
    let env = Env::default();
    let contract_id = env.register(AssetVaultContract, ());
    let client = AssetVaultContractClient::new(&env, &contract_id);

    let owner1 = Address::generate(&env);
    let owner2 = Address::generate(&env);
    let asset_id = String::from_str(&env, "LAND-001");
    let ipfs_hash = String::from_str(&env, "QmX...");

    // Mock authentication
    env.mock_all_auths();

    // Register asset
    client.register_asset(&asset_id, &owner1, &1670000000, &200000, &ipfs_hash);

    let asset = client.get_asset(&asset_id);
    assert_eq!(asset.owner, owner1);
    assert_eq!(asset.purchase_price, 200000);

    // Transfer ownership
    client.transfer_ownership(&asset_id, &owner1, &owner2, &1680000000, &250000);

    let updated_asset = client.get_asset(&asset_id);
    assert_eq!(updated_asset.owner, owner2);
    assert_eq!(updated_asset.purchase_price, 250000);
}
