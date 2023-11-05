require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL = process.env.API_KEY_SEPOLIA;
const PRIVATE_KEY = process.env.PRIVATE_KEY_METAMASK;
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      runs: 200,
      enabled: true
    }
  },
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};