import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ account, connectWallet }) => {
  const shortenedAccount = account
    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
    : null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MediChain Nexus</Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/patient">Patient</Link>
        <Link to="/provider">Provider</Link>
        <Link to="/contact">Contact</Link>

        {account ? (
          <div className="wallet-info">{shortenedAccount}</div>
        ) : (
          <button className="connect-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
