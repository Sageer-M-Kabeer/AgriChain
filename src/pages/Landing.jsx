import React, { useState } from "react";
import { FaLock, FaUserShield, FaSeedling } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020b24] text-white font-sans relative overflow-x-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 py-3 bg-[#020b24] relative">
        {/* Logo as Image */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-full.png"
            alt="ASDTS-BDAG Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="absolute top-16 right-4 bg-[#071942] rounded-xl shadow-lg p-4 w-40 text-sm animate-fadeIn">
            <ul className="space-y-2 text-right">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#login" className="hover:text-yellow-400">
                  Login
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:text-yellow-400">
                  Signup
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="text-center px-4 mt-4">
        <div className="bg-[#071942] rounded-xl py-6 px-4 shadow-lg">
          <h2 className="text-xl font-bold mb-3 text-blue-300">ASDTS-BDAG</h2>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            ASDTS is an innovative, farmer-driven solution that integrates
            advanced cryptographic protocols and the BlockDAG blockchain to
            ensure data privacy, transparency, and traceability in agricultural
            data management.
          </p>
          <img
            src="/hero-placeholder.png"
            alt="Illustration"
            className="mx-auto w-40 h-40 object-contain mt-3"
          />
        </div>

        {/* White box */}
        <div className="bg-white rounded-xl mt-6 h-64 shadow-md"></div>
      </section>

      {/* WHAT WE DO */}
      <section className="mt-10 px-5 text-center">
        <h2 className="text-xl font-bold mb-3 text-blue-300">WHAT WE DO</h2>
        <p className="text-gray-300 text-sm mb-6">
          AgriTekton is focused on serving the needs of Agrarian Reform
          Beneficiaries (ARBs), cooperatives, and contract farmers, who are our
          priority and immediate customer targets. However, due to multiple
          organizational constraints, these stakeholders may face challenges in
          participating in the program.
        </p>

        {/* Cards Grid (2x2 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-[#0c255f] to-[#071942] p-5 rounded-xl text-left border border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaLock className="text-yellow-400 text-2xl" />
              <h3 className="font-semibold text-white text-base">
                End-to-End Encrypted Data Sharing
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Farmers, cooperatives, and agencies can securely upload and
              exchange agricultural files — such as land documents, soil
              reports, or subsidy forms — using AES-256 encryption.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-[#0c255f] to-[#071942] p-5 rounded-xl text-left border border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <HiDocumentText className="text-yellow-400 text-2xl" />
              <h3 className="font-semibold text-white text-base">
                Immutable BlockDAG Record System
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              All data transfers, approvals, and access events are recorded on
              the BlockDAG blockchain, providing a transparent and tamper-proof
              audit trail compliant with ISO/NIST standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-[#0c255f] to-[#071942] p-5 rounded-xl text-left border border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaUserShield className="text-yellow-400 text-2xl" />
              <h3 className="font-semibold text-white text-base">
                Cryptographic Access Control
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Only authorized users with valid RSA private keys can access
              shared data, ensuring that sensitive agricultural information
              remains protected from unauthorized access.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-[#0c255f] to-[#071942] p-5 rounded-xl text-left border border-gray-700 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-2">
              <FaSeedling className="text-yellow-400 text-2xl" />
              <h3 className="font-semibold text-white text-base">
                Farmer Support & Resource Access
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Farmers can securely request and receive loans, fertilizers, and
              subsidies through the platform. Each transaction is verified and
              recorded on the BlockDAG network for accountability and fairness.
            </p>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="mt-12 px-5 text-center pb-20">
        <h2 className="text-xl font-bold mb-3 text-blue-300">OUR TEAM</h2>
        <p className="text-gray-300 text-sm mb-6">
          Meet our dedicated team ensuring security, transparency, and innovation
          in every agricultural data transaction.
        </p>

        {/* Responsive team grid (2x2 on lg screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg"></div>
              <h4 className="text-yellow-400 font-semibold mt-2">NAME</h4>
              <p className="text-gray-300 text-xs">ROLE</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
