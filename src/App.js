import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          Project coded by{" "}
          <a
            rel="noreferrer"
            href="https://laughing-chandrasekhar-438be0.netlify.app/"
            target="_blank"
          >
            Stephanie Harrison-Wood
          </a>{" "}
          and is{" "}
          <a
            rel="noreferrer"
            href="https://github.com/StephHarrison-Wood/Steph-Weather-App"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
