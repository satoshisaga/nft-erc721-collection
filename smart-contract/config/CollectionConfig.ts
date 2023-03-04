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
    price: 0.08,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.09,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0x42F19A6cEA08d1b0AeCD75F839c16F1605A3bc03',
  marketplaceIdentifier: 'legacy-of-bitcoin',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
