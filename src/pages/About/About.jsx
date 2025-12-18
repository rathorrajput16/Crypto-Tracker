import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <h1>About Crypto Tracker</h1>

      <p>
        Crypto Tracker is a frontend-focused web application built using React to
        display real-time cryptocurrency market data in a clean and intuitive
        interface. The application helps users explore cryptocurrency prices,
        market trends, and key financial metrics efficiently.
      </p>

      <p>
        This project emphasizes modern frontend development practices such as
        component-based architecture, React hooks, API integration, and
        responsive UI design. It consumes public cryptocurrency APIs to fetch
        live data without requiring user authentication.
      </p>

      <p>
        The primary goal of this project is to strengthen frontend engineering
        skills and build a scalable foundation. Backend features such as user
        authentication, watchlists, and persistent data storage are planned for
        future iterations.
      </p>
    </div>
  );
}
