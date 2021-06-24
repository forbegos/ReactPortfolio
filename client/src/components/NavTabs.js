import React from "react";

const imgStyle = {
  margin: "20px",
};

const navStyle = {
  // border: "2px solid black",
  width: "200px",
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <img
        src="../logo512.png"
        alt=""
        width="80"
        height="80"
        class="d-inline-block align-text-top"
        style={imgStyle}
      />
      <h1>GatoSoftware</h1>
      <ul className="navbar-nav" style={navStyle}>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
