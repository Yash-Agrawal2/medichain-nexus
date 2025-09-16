import React from "react";
import { motion } from "framer-motion";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966487.png"
            alt="MediChain Nexus"
            className="hero-logo"
          />
          <h1>MediChain Nexus</h1>
          <p>
            A decentralized healthcare record management system that gives
            patients full control of their data.
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-card"
        >
          <h2>About MediChain Nexus</h2>
          <p>
            MediChain Nexus is a decentralized healthcare record management
            system that puts patients in complete control of their medical data.
            Built on a private blockchain, it provides a secure, transparent,
            and user-friendly platform for managing, sharing, and storing health
            records.
          </p>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-card"
        >
          <h2>Why We Built It</h2>
          <p>
            Today, patient data is scattered across systems and institutions.
            This creates security risks and makes it hard for patients to access
            their information. MediChain Nexus solves this by using blockchain
            to give patients true ownership of their health data.
          </p>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-card"
        >
          <h2>Our Technology: The Three Pillars</h2>
          <ul>
            <li>
              <strong>Blockchain (Ethereum):</strong> Tamper-proof ledger for
              ownership and permissions.
            </li>
            <li>
              <strong>Decentralized Storage (IPFS):</strong> Stores medical
              files securely and cost-effectively.
            </li>
            <li>
              <strong>User Interface (React.js):</strong> Clean, responsive,
              user-friendly front end.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="flow-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-card"
        >
          <h2>How It Works: A Patient-Centric Approach</h2>
          <ol>
            <li>Registration: Patient registers their wallet address.</li>
            <li>Upload: Medical document goes to IPFS and hash stored on chain.</li>
            <li>
              Authorization: Patient grants access to provider’s wallet
              address.
            </li>
            <li>Viewing: Authorized provider views using the IPFS hash.</li>
          </ol>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
