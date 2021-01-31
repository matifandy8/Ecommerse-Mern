import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__column">
        <h4>Contact</h4>
        <ul>
          <li>Phone</li>
          <li>Adress</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>Products</h4>
        <ul>
          <li>Laptops</li>
          <li>Monitor</li>
          <li>Mouse</li>
        </ul>
      </div>
      <div className="footer__column">
        <h4>About</h4>
        <ul>
          <li>Adress</li>
          <li>Phone</li>
          <li>Jobs</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
