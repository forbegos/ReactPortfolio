import React from "react";

const footerStyle = {
  padding: "20px",
  textAlign: "center",
};

const aStyle = {
  textDecoration: "none",
  border: "0px",
  padding: "10px",
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <p>(c) 2021 FdO Enterprises and Holdings LLC</p>
      <div>
        <a
          style={aStyle}
          href="https://www.linkedin.com/in/fernandodeorbegoso/"
          className="anchor"
        >
          <img
            src="./Linkedin.png"
            width="32px"
            height="32px"
            alt="Linkedin profile"
          ></img>
        </a>

        <a
          style={aStyle}
          href="https://www.github.com/forbegos"
          className="anchor"
        >
          <img src="./GitHub-Mark-32px.png" alt="Github profile"></img>
        </a>

        <a
          style={aStyle}
          href="https://stackoverflow.com/users/7186852/gato-software"
          className="anchor"
        >
          <img
            src="./stackoverflow.png"
            width="32px"
            height="32px"
            alt="Github profile"
          ></img>
        </a>
      </div>
    </div>
  );
}
