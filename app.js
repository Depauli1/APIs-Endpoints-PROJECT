// This code sets up a basic Express server with two API endpoints for getting the ETH balance and 
// token balance of an Ethereum account.

/**@title APIs Endpoints for ETH and Token Balance Retrieval
 * @author Bless Hukporti
 * @notice This contract sets up a basic Express server with two API endpoints for getting the ETH balance and 
   token balance of an Ethereum account.
 * @dev This project implements the endpoints for getting the on-chain Eth balance and token balance of Dai stable coin
   but you can return that of any Coin or Token by changing the Contract address and the ABI to your desired.
 */

const tokenContractABI = require('./abi.json');
const express = require('express');
const { Web3 } = require('web3');


const app = express();
const port = 5500; // Choose any port you prefer

// Connect to an Ethereum node (replace 'YOUR_ETHEREUM_NODE_ENDPOINT' with the actual endpoint)
// const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/aOtzE2X9gSGfmxBjsCUgDgVaQSAM-FbK');

const alchemyEndpoint = 'https://eth-mainnet.g.alchemy.com/v2/DjxZ47a1ufwOihEXKFTmv9KOoLyyU4bB';
const web3 = new Web3(alchemyEndpoint);

console.log('ABI type:', typeof tokenContractABI);


// API endpoint to get ETH balance of an account

app.get('/eth-balance/:accountAddress', async (req, res) => {
    const { accountAddress } = req.params;
  
    if (!web3.utils.isAddress(accountAddress)) {
      return res.status(400).json({ error: 'Invalid account address' });
    }
  
    try {
      const balanceWei = await web3.eth.getBalance(accountAddress);
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      res.json({ ethBalance: balanceEth });
    } catch (error) {
      res.status(500).json({ error: `Error getting ETH balance: ${error.message}` });
    }
  });
  

// API endpoint to get token balance of an account (replace 'TOKEN_CONTRACT_ABI' and 'TOKEN_CONTRACT_ADDRESS' with actual values)
app.get('/token-balance/:accountAddress', async (req, res) => {
  const { accountAddress } = req.params;
  // The contract address and ABI provided is that of the Dai Stable coin
  const tokenContractAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // Replace with the actual token contract address
  const tokenContractABI = require('./abi.json');

  //const tokenContractABI = [] // Replace with the actual token contract ABI
  
  try {
    const contract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);
    const balance = await contract.methods.balanceOf(accountAddress).call();
    res.json({ tokenBalance: balance.toString() });
  } catch (error) {
    res.status(500).json({ error: `Error getting token balance: ${error.message}` });
  }
});
 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
