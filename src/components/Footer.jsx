import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-3">
      <p className="text-sm">
        © {new Date().getFullYear()} Shuddhangon. All Rights Reserved.
      </p>
      <p className="text-sm mt-1">
        Developed by <span className="font-semibold text-blue-400">S M Simon Piar</span>
      </p>
    </footer>
  );
};

export default Footer;
