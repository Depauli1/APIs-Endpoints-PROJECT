# APIs-Endpoints-PROJECT

## Description
Introducing a cutting-edge API Endpoints project designed to streamline your interaction with the Ethereum ecosystem. Our system establishes a fundamental Express server with two robust API endpoints, empowering you to conveniently analyze the ETH balance and the token balance of any Ethereum account.

Our project showcases its versatility, boasting endpoints that provide access to real-time, on-chain Eth balance and Dai stable coin balance. This project's strength lies in its adaptable design – you can easily tailor the API endpoints to retrieve the balance of any Cryptocurrencies or Tokens by modifying the Contract address and the ABI as per your requirements.

Key highlights of the project include the backend APIs implementation that enables the retrieval of an account's ETH balance, along with added functionality to fetch the balance for a specified token for any given account. Our APIs are meticulously verified and tested, guaranteeing precise functionality, reliability, and the correct retrieval of data.

Explore the full potential of Ethereum accounts with our API Endpoint project, offering you efficient and reliable access to on-chain balances. Leveraging the power of our APIs, you can make informed investment decisions, monitor your holdings, and navigate the Ethereum landscape with ease. This project marks a significant milestone in simplifying and modernizing Ethereum balance inquiries. 

# Getting Started

## Requirements

Step 1: Install Necessary Packages
First, you need to install the required npm packages. Open your terminal and run:
```
npm init -y
npm install express web3
```
This will initialize a package.json file and install the express and web3 packages.

## Quickstart

```
git clone https://github.com/Depauli1/APIs-Endpoints-PROJECT
cd APIs-Endpoints-PROJECT
```
After sucessfully cloning the project...

Step 4: Replace Placeholder Values
Replace the following placeholder values in the code: i.e if you don't want to use a different or a specific ERC-20 token, Ethereum node endpoint and contract ABI

'YOUR_ETHEREUM_NODE_ENDPOINT' with the actual endpoint of your Ethereum node.
'TOKEN_CONTRACT_ABI' with the ABI of the specific ERC-20 token.
'TOKEN_CONTRACT_ADDRESS' with the actual address of the ERC-20 token contract.

Step 5: Run the Backend
Save the changes and run your backend server:
```
node app.js
```
Your server will be running at http://localhost:3000 (or the port you specified).
Replace YOUR_ETH_ACCOUNT_ADDRESS with the Ethereum address for which you want to check the balances.

To check the version of Express installed in your project, you can use the following commands in your terminal:

If you are using npm:
```
npm list express
```
If you are using yarn:
```
yarn list express
```
These commands will display the version of the Express package installed in your project, along with its dependencies.

Step 6: Test the APIs
Open your browser or use a tool like curl or Postman to test the APIs:
```
http://localhost:3000/eth-balance/YOUR_ETH_ACCOUNT_ADDRESS
http://localhost:3000/token-balance/YOUR_ETH_ACCOUNT_ADDRESS
```

In the terminal you can run
```
curl http://localhost:3000/eth-balance/YOUR_ETH_ACCOUNT_ADDRESS
curl http://localhost:3000/token-balance/YOUR_ETH_ACCOUNT_ADDRESS
```
This would reveal the amount of Eth and amount of other tokens or coins held by the contract address.

# Thank you!

If you appreciated this, feel free to reach out.

