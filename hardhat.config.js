require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY;
 const ACCOUNT_P_KEY = process.env.ACCOUNT_P_KEY;

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:7545/",
      saveDeployments: true
    },
    goerli: {
     url: "https://eth-goerli.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY,
     accounts: [process.env.ACCOUNT_P_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
