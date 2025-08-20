import React from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { FaReact, FaPython, FaRust, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Cyril.io</h1>
          <h2 className="text-2xl text-gray-400">
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "Web3 Developer", 2000,
                "Cyber Security Geek", 2000,
                "Blockchain Enthusiast", 2000,
              ]}
            />
          </h2>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          Hi, I’m Cyril-Elvis 👋, a Web3 developer, cybersecurity geek, and blockchain
          enthusiast. I love building secure, scalable, and modern applications on
          the blockchain, with a focus on user trust and performance.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-6xl text-blue-400">
          <FaReact title="React" />
          <FaPython title="Python" />
          <FaRust title="Rust" />
          <SiSolidity title="Solidity" />
          <FaGithub title="GitHub" />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-6">
          <motion.div
            className="p-6 border-l-4 border-blue-400 bg-gray-800 rounded"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold">Blockchain Developer</h3>
            <p className="text-gray-400">Built smart contracts and dApps on the Sui and Ethereum blockchains.</p>
          </motion.div>
          <motion.div
            className="p-6 border-l-4 border-green-400 bg-gray-800 rounded"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold">Cybersecurity Enthusiast</h3>
            <p className="text-gray-400">Worked on penetration testing, system hardening, and security audits.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="mb-6 text-gray-300">Let’s connect! Reach out via email or socials below.</p>
        <div className="flex justify-center gap-8 text-3xl text-blue-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </section>
    </div>
  );
}

export default App;
