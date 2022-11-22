require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    mumbai: {
      chainId: 80001,
      url: 'https://matic-mumbai.chainstacklabs.com',
      // put private key here sheesh
      account: ['7028bd5c1d476b864fdcc3dd7976514c3c855f2781e0238f7471dfaeda648dfa'],
    }
  }
};
