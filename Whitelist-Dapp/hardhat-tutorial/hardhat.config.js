require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
 
const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
 
module.exports = {
  solidity: "0.8.9",
  networks: {
    fuji: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

// Whitelist Contract Address: 0xC97d0516a3b0921B54796b26A7C310acd0F32b9e