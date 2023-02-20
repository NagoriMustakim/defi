const hre = require("hardhat");

async function main() {
  let PoolAddressesProvider = "0xC911B590248d127aD18546B186cC6B324e99F02c"
  const flashloan = await hre.ethers.getContractFactory("fashloan")
  const fn = await flashloan.deploy(PoolAddressesProvider)
  await fn.deployed()
  console.log(`fn contract deployed at ${fn.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
