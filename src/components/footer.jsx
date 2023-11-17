import React from "react";
import { bio } from "../data";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className="border-t-2 border-selective-yellow pt-2 flex justify-between text-white">
      <span className="text-left">
        <a href="https://github.com/arpankumarde">
          &copy; {year} Arpan Kumar De
        </a>
      </span>
      <span className="text-center">{bio.name}</span>
      <span className="text-right">All rights reserved</span>
    </footer>
  );
};

export default Footer;
