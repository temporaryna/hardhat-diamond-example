import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@typechain/hardhat';
import '@nomicfoundation/hardhat-ethers';
import 'hardhat-gas-reporter';

const accounts = {
  mnemonic:
    'test test test test test test test test test test test junk',
};

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: './types/',
    target: 'ethers-v6',
    externalArtifacts: ['deployments/hardhat/TestDiamondContract.json', 'deployments/dev/TestDiamondContract.json'],
  },
  networks: {
    hardhat: {
      chainId: 31337,
      accounts,
      saveDeployments: false,
    },
    dev: {
      url: 'http://192.168.1.100:8545',
      chainId: 31337,
      accounts,
      // saveDeployments: false,
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
};

export default config;
