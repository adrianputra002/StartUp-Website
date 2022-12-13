import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-white text-center rounded-lg shadow flex items-center justify-center p-6 dark:bg-gray-800">
      <span className="text-sm text-center text-gray-500 ">
        © 2022{" "}
        <a href="https://adrsvn.com/"  target="_blank" className="mr-1 hover:underline">
          Adrsvn 
        </a>
         - Adrian Putra 
      </span>
     
    </footer>
  );
}

export default Footer;
