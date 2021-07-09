import React from "react";

export default function Project(props) {
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

  const buttonStyle = {
    padding: "10px",
  };

  return (
    <div style={portfolioStyle}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div>
        <img
          src={props.projectImg}
          width="200"
          height="200"
          alt=""
          style={buttonStyle}
        ></img>
        <div>
          <a href={props.repo} className="anchor" style={buttonStyle}>
            <img src="./GitHub-Mark-32px.png" alt="github logo"></img>
          </a>
          <a href={props.appLink} className="anchor" style={buttonStyle}>
            Try it!
          </a>
        </div>
      </div>
    </div>
  );
}
