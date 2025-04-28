import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/Pradheep-S"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Pradheep S.</span>
      </Link>
    </footer>
  );
}

export default Footer;