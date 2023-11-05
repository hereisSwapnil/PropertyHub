
const hre = require("hardhat");

async function main() {


  const properties = await hre.ethers.deployContract("Properties");

  await properties.waitForDeployment();

  console.log(
    `Deployed to address ${properties.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});