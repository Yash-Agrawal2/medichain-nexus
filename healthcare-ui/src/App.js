import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";
import HealthcareSystemABI from "./contract/HealthcareSystem.json";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PatientPage from "./pages/PatientPage";
import ProviderPage from "./pages/ProviderPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

const CONTRACT_ADDRESS = "0x55c792D05262d229388A7ccaff06f722e23f489f";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  async function checkIfWalletIsConnected() {
    if (!window.ethereum) return;

    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId === "0xaa36a7") {
          await initContract();
        }
      }
    } catch (err) {
      console.error("Error checking wallet:", err);
    }
  }

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);

      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (chainId !== "0xaa36a7") {
        alert("Please switch to Sepolia network");
        return;
      }

      console.log("Wallet connected:", accounts[0]);
      await initContract();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  async function initContract() {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const healthcareContract = new Contract(
      CONTRACT_ADDRESS,
      HealthcareSystemABI.abi,
      signer
    );
    setContract(healthcareContract);
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar account={account} connectWallet={connectWallet} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/patient"
              element={<PatientPage contract={contract} account={account} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/provider"
              element={<ProviderPage contract={contract} account={account} />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
