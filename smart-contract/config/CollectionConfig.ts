import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'LEGACYOFBITCOIN',
  tokenName: 'LEGACYOFBITCOIN',
  tokenSymbol: 'SAGA',
  hiddenMetadataUri: 'ipfs://QmSyo9pjUig3eHbVroF57wfKCkjnDY1EixRngHu1webQiy/hidden.json',
  maxSupply: 500,
  whitelistSale: {
    price: 0.09,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.09,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xEe1684128264aaa0396Ef13B11ae491C09d2BD1e',
  marketplaceIdentifier: 'legacy-of-bitcoin',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
