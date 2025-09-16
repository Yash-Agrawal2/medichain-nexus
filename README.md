MediChain Nexus: Decentralized Healthcare Record Management System


This is a decentralized web application that puts patients in complete control of their medical records. Built on the Ethereum blockchain, MediChain Nexus ensures that health data is secure, transparent, and accessible only by authorized parties.

Features
Patient-Controlled Data: Patients have true ownership and can grant or revoke access to their medical records at any time.

Secure Storage: Medical documents are stored off-chain on the InterPlanetary File System (IPFS), with immutable hashes recorded on the blockchain.

Provider Authorization: Patients can securely authorize healthcare providers to view their records through smart contract permissions.

Admin Control: A designated contract owner (administrator) can manage the system and its users.

User-Friendly Interface: The application features a modern, responsive UI built with React and Material UI.

Technology Stack
Frontend: React.js and Material UI

Blockchain: Solidity (Smart Contracts on the Ethereum network)

Smart Contract Development: Hardhat

Blockchain Interaction: Ethers.js

Decentralized Storage: IPFS (with Pinata as the public gateway)

Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You will need the following software installed on your machine:

Node.js (LTS version recommended)

npm or yarn

Git

MetaMask browser extension

An API token from Pinata for IPFS uploads.

Installation
Clone the repository:

git clone https://github.com/Yash-Agrawal2/Healthcare-Record-Management-System.git
cd Healthcare-Record-Management-System
Install Hardhat dependencies (for smart contract development):

npm install
Install React dependencies (for the web application):

cd healthcare-ui
npm install
This will also install Material UI and Pinata dependencies.

Configuration
Create a .env file in the root directory of your project (Healthcare-Record-Management-System/).

Add your Sepolia network RPC URL and your private key. Warning: Do not share your private key or commit this file to GitHub.

Code snippet

SEPOLIA_RPC_URL="YOUR_SEPOLIA_RPC_URL"
PRIVATE_KEY="YOUR_METAMASK_PRIVATE_KEY"
In the healthcare-ui/src/components/UpdateMedicalHistory/utils/ipfs.js file, replace 'YOUR_PINATA_JWT' with your actual JWT token from Pinata.

JavaScript

const PINATA_JWT = "YOUR_PINATA_JWT";
Running the Application
Deploy the Smart Contract:
First, ensure you have ETH on the Sepolia test network in the wallet associated with your private key. Then, deploy the smart contract using Hardhat.

npx hardhat run scripts/deploy.js --network sepolia
Copy the deployed contract address.

Update the React App:
Paste the deployed contract address into the healthcare-ui/src/App.js file, replacing the placeholder address on line 12.

JavaScript

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
Start the React Application:
Navigate to the healthcare-ui directory and start the application.

cd healthcare-ui
npm start
The application will now be running on http://localhost:3000. Connect your MetaMask wallet to the Sepolia network, and you're ready to go!
