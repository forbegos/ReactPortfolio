import React from "react";
import Form from "../contactForm";
import Footer from "../footer";

const contactStyle = {
  border: "2px black solid",
  width: "50%",
  margin: "0 auto",
  marginBottom: "20px",
  padding: "20px",
  textAlign: "center",
  borderRadius: "10px",
  boxShadow: "10px 10px 10px black",
};

export default function Contact() {
  return (
    <div>
      <div style={contactStyle}>
        <h1>Let’s Chat</h1>
        <p>
          {/* <div>
            <Form />
          </div> */}
          <a href="mailto:forbegos@me.com">forbegos@me.com </a>
        </p>
        <p>+1 (720) 614-6108</p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
