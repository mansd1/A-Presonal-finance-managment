import React from "react";
import "./Header.css";

export default function HeaderPage({ nameButton }) {
  return (
    <div id="home">
      <header className="header">
        <a href="#" className="logo">
          <img
            src="/public/Logo_finance.png"
            alt="Finance Logo"
            className="logo-img"
          />
        </a>

        <nav className="navbar">
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#Account" className="nav-link">
                Accounts
              </a>
            </li>
            <li>
              <a href="#dashboard" className="nav-link">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#reports" className="nav-link">
                Reports
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-right">
          <button className="primary-button">{nameButton}</button>
          <button className="secondary-button">Sign In</button>
        </div>
      </header>
    </div>
  );
}
