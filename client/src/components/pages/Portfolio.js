import React from "react";
import Footer from "../footer";

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

const buttonStyle = {
  padding: "10px",
};

export default function Portfolio() {
  return (
    <div>
      <div>
        <div>
          <h1 style={headingStyle}>Portfolio</h1>
        </div>

        {/* Project 1 */}
        <div style={portfolioStyle}>
          <h2>Work Day Scheduler</h2>
          <p>
            A Javascript application that creates a daily calendar that the user
            can utilize to create a daily task list.
          </p>
          <div>
            <img
              src="./WDS-shot2.png"
              width="200"
              height="200"
              alt=""
              style={buttonStyle}
            ></img>
            <div>
              <a
                href="https://github.com/forbegos/Word-Day-Scheduler"
                className="anchor"
                style={buttonStyle}
              >
                <img src="./GitHub-Mark-32px.png" alt=""></img>
              </a>
              <a
                href="https://forbegos.github.io/Word-Day-Scheduler/"
                className="anchor"
                style={buttonStyle}
              >
                Try it!
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div style={portfolioStyle}>
          <h2>Weather Dashboard</h2>
          <p>
            A Javascript application to display current weather and 5 day
            forecast.
          </p>
          <div>
            <img
              src="./WDASH-shot1.png"
              width="200"
              height="200"
              style={buttonStyle}
              alt=""
            ></img>
            <div>
              <a
                href="https://github.com/forbegos/Weather-Dashboard"
                className="anchor"
                style={buttonStyle}
              >
                <img src="./GitHub-Mark-32px.png" alt=""></img>
              </a>
              <a
                href="https://forbegos.github.io/Weather-Dashboard/"
                className="anchor"
                style={buttonStyle}
              >
                Try it!
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div style={portfolioStyle}>
          <h2>Prorater iOS Application</h2>
          <p>
            An iOS application developed using SWIFT to assist property managers
            calculate prorated rental amounts in any given day of the month.
          </p>
          <div>
            <img src="./Prorater.PNG" width="200" height="200" alt=""></img>
            <div>
              <a
                href="https://apps.apple.com/us/app/prorater/id1526359025"
                className="anchor"
              >
                <img src="./appStore.jpeg" width="32" height="32" alt=""></img>
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div style={portfolioStyle}>
          <h2>Food Truck Locator</h2>
          <p>
            A Javascript application that uses a server side API that allows for
            the search and mapping of food truck locations in a city.
          </p>
          <div>
            <img
              src="./foodTruckLocator.png"
              width="200"
              height="200"
              alt=""
            ></img>
            <div>
              <a
                href="https://github.com/forbegos/FoodTruckLocator"
                className="anchor"
                style={buttonStyle}
              >
                <img
                  src="./GitHub-Mark-32px.png"
                  style={buttonStyle}
                  alt=""
                ></img>
              </a>
              <a
                href="https://rgeisreiter.github.io/FoodTruckLocator/"
                className="anchor"
                style={buttonStyle}
              >
                Try it!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
