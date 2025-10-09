import React from "react";
import { Link } from "react-router-dom";

// SVG for diagonal lines
const BgLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="100" x2="400" y2="0" stroke="#FFD6D6" strokeWidth="2" />
    <line x1="200" y1="700" x2="800" y2="0" stroke="#D6D6FF" strokeWidth="2" />
    <line x1="1200" y1="700" x2="1536" y2="0" stroke="#D6D6FF" strokeWidth="2" />
    <line x1="0" y1="768" x2="600" y2="0" stroke="#D6D6FF" strokeWidth="2" />
    <line x1="900" y1="768" x2="1536" y2="0" stroke="#FFD6D6" strokeWidth="2" />
  </svg>
);

export default function Login() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <BgLines />
      <div className="z-10 flex flex-col items-center">
        <h1
          className="text-7xl font-bold mb-2"
          style={{
            background: "linear-gradient(90deg, #A259FF 40%, #00CFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello
        </h1>
        <div className="text-blue-400 text-sm mb-1">Good to see you here</div>
        <a
          href="https://Nityneha.com"
          className="text-blue-600 text-xs font-bold mb-6 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nityneha.com
        </a>
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Iconic_N.png"
          alt="Logo"
          className="w-16 h-16 mb-6"
          style={{ filter: "drop-shadow(0 2px 8px #0002)" }}
        />
        {/* Button */}
        <Link
          to="/welcome"
          className="mb-10 px-8 py-2 rounded-xl border-2 border-blue-400 text-blue-500 font-semibold hover:bg-blue-50 transition"
        >
          LET'S START
        </Link>
        {/* Icons row */}
        <div className="flex gap-10 mt-8">
          {/* You can replace these with your own SVGs or icon components */}
          <IconBox icon="person" />
          <IconBox icon="wallet" />
          <IconBox icon="chat" />
          <IconBox icon="favorite" />
          <IconBox icon="code" />
        </div>
      </div>
    </div>
  );
}

// Simple icon box using Material Icons
function IconBox({ icon }) {
  const icons = {
    person: "👤",
    wallet: "👛",
    chat: "💬",
    favorite: "💜",
    code: "💻",
  };
  return (
    <div className="border-2 border-blue-300 rounded-xl p-4 flex items-center justify-center text-3xl bg-white shadow-sm">
      {icons[icon]}
    </div>
  );
}