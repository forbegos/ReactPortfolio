import React from "react";

const imgStyle = {
  margin: "0 auto",
  marginBottom: "10px",
};

const navStyle = {
  // border: "2px solid black",
  width: "200px",
};

const headingStyle = {
  fontWeight: "bold",
  fontSize: "3em",
};

const logoStyle = {
  margin: "0 auto",
  display: "flex",
  paddingLeft: "200px",
  flexDirection: "column",
  // border: "2px solid black",
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-light">
      <div style={logoStyle}>
        {/* <img
          src="./logo512.png"
          alt=""
          width="100"
          height="100"
          style={imgStyle}
        /> */}
        <h1 style={headingStyle}>Fernando de Orbegoso</h1>
      </div>
      <ul className="navbar-nav" style={navStyle}>
        {/* <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li> */}
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
