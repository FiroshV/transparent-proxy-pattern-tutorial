const { ethers, upgrades } = require("hardhat");

async function main() {
  // TODO Check this address is right before deploying.
  const deployedProxyAddress = "0x19a54d9f9E1C28D0E5c9317b9cfc2F3eE5eE537E";

  const PriceFeedTrackerV2 = await ethers.getContractFactory(
    "PriceFeedTrackerV2"
  );
  console.log("Upgrading PriceFeedTracker...");

  await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
  console.log("PriceFeedTracker upgraded");
}

main(); 