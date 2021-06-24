import React from "react";

const portfolioStyle = {
  border: "2px black solid",
  width: "50%",
  margin: "0 auto",
  marginBottom: "20px",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "10px 10px 10px black",
};

const headingStyle = {
  textAlign: "center",
};

export default function Portfolio() {
  return (
    <div>
      <div>
        <h1 style={headingStyle}>Portfolio</h1>
      </div>
      <div style={portfolioStyle}>
        <p>project 1</p>
      </div>
    </div>
  );
}
