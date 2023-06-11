# Transparent Proxy Pattern Tutorial

## Introduction

Absolutely, here's the revised summary based on your information:

The Transparent Proxy Pattern is a design pattern in blockchain technology that facilitates smart contract upgrades while maintaining the original contract's state, balance, and address. In your case, it involves two components:

1. **Proxy/Admin Contract**: This contract serves a dual role. It's the entry point for all calls to the smart contract and holds the state of the contract. It uses low-level operations to call the Logic Contract, maintaining the original contract's context and state. As the Admin Contract, it also has the authority to upgrade the Logic Contract. Only this contract can change the Logic Contract's address in itself.

2. **Logic Contract**: This contract houses the actual business logic. It can be upgraded by deploying a new contract and updating the reference in the Proxy/Admin Contract.

Users can interact with the Proxy/Admin Contract as if they were interacting directly with the Logic Contract, which is why the pattern is described as "transparent".

## Tutorial

This Tutorial follows the code along from the [Transparent Proxy Pattern](https://blog.chain.link/upgradable-smart-contracts/) article on the Chainlink blog.

Sepolia testnet address has been used for this tutorial. Make necessary changes to deploy on other networks.

### Step 1: Clone the repository

### Step 2: Install dependencies

```bash
yarn install
```

### Step 3: Make a .env file and add your private key network rpc url

Refer to .env.example

### Step 4: Deploy the contracts

```bash
yarn hardhat run --network sepolia scripts/deploy_upgradeable_pricefeedtracker.js
```

### Step 5: Run the tests from command line

```bash
yarn hardhat console --network sepolia

const PriceFeedTracker = await ethers.getContractFactory("PriceFeedTracker");
const priceFeedTracker = await PriceFeedTracker.attach('<<<< YOUR CONTRACT ADDRESS  >>>>') 
(await priceFeedTracker.getAdmin())
(await priceFeedTracker.retrievePrice())
```

### Step 6: Upgrade the contract

```bash
yarn hardhat run --network sepolia scripts/upgrade_pricefeedtracker.js
```

### Step 7: Run the tests from command line

```bash
yarn hardhat console --network sepolia

const V2 = await ethers.getContractFactory("PriceFeedTracker");
const v2 = await V2.attach('<<<< YOUR CONTRACT ADDRESS  >>>>')
var ethusdTx = await v2.retrievePrice('0x694AA1769357215DE4FAC081bf1f309aDC325306')
(await v2.price())
```

## Todo

- [ ] Add tests
- [ ] Add a frontend to interact with the contract
- [ ] Add more comments
- [ ] Add more documentation
