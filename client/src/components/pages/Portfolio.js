import React from "react";
import Project from "../Projects";
import Footer from "../footer";

const headingStyle = {
  textAlign: "center",
};

const projects = [
  {
    name: "Work Day Scheduler",
    description:
      "A Javascript application that creates a daily calendar that the user can utilize to create a daily task list",
    projectImg: "./WDS-shot2.png",
    repo: "https://github.com/forbegos/Word-Day-Scheduler",
    appLink: "https://forbegos.github.io/Word-Day-Scheduler/",
  },
  {
    name: "Weather Dashboard",
    description:
      "A Javascript application to display current weather and 5 day forecast",
    projectImg: "./WDASH-shot1.png",
    repo: "https://github.com/forbegos/Weather-Dashboard",
    appLink: "https://forbegos.github.io/Weather-Dashboard/",
  },
  {
    name: "Prorater iOS Application",
    description:
      "An iOS application developed using SWIFT to assist property managers calculate prorated rental amounts in any given day of the month",
    projectImg: "./Prorater.PNG",
    repo: "https://apps.apple.com/us/app/prorater/id1526359025",
    appLink: "https://apps.apple.com/us/app/prorater/id1526359025",
  },
  {
    name: "Food Truck Locator",
    description:
      " A Javascript application that uses a server side API that allows for the search and mapping of food truck locations in a city",
    projectImg: "./foodTruckLocator.png",
    repo: "https://github.com/forbegos/FoodTruckLocator",
    appLink: "https://rgeisreiter.github.io/FoodTruckLocator",
  },
];

export default function Portfolio() {
  return (
    <div>
      <div>
        <h1 style={headingStyle}>Portfolio</h1>
      </div>
      {projects.map((project) => (
        <Project
          name={project.name}
          description={project.description}
          projectImg={project.projectImg}
          repo={project.repo}
          appLink={project.appLink}
        />
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
}
