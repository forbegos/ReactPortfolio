import React from "react";
import Footer from "../footer";

const aboutStyle = {
  border: "2px black solid",
  width: "50%",
  margin: "0 auto",
  marginBottom: "20px",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "10px 10px 10px black",
};

const imgStyle = {
  marginBottom: "10px",
};

export default function About() {
  return (
    <div>
      <div style={aboutStyle}>
        <h1>About</h1>
        <div>
          <img
            src="../FdO_Pic.png"
            width="200"
            height="200"
            style={imgStyle}
            alt=""
          ></img>
        </div>
        <p>
          My name is Fernando de Orbegoso and my dream has always been to
          create. Create great tools to help your business grow, or perhaps a
          simple application to make your day easier. My passion is development
          and my goal is to help small business access the benefits of modern
          technology by breaking down access and cost barriers. My mission is to
          provide my expertise in both business and development to help small
          business grow and achieve their goals.
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
