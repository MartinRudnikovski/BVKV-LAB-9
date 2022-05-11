require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `8dee68ed16c14f9b879de29a5762291e`,
      accounts: { mnemonic: "Maggoty Velvet Everlasting Morticians Jumped Scrawny Utopian Needles Pitilessly" },
    },
  },
  etherscan: {
    apiKey: `VQ5GFRZEUU4HPHEUXTWW2N3B37CUY8XE8K`
  }
};