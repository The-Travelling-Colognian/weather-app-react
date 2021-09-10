import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <small className="github-link">
      <a
        href="https://github.com/The-Travelling-Colognian/weather-app-react"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        Open-sourced on GitHub
      </a>{" "}
      by{" "}
      <a
        href="https://modest-lamarr-257cde.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="github"
      >
        Vanessa Schade
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://suspicious-mclean-a6ec46.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="netlify"
      >
        {" "}
        Netlify
      </a>
    </small>
  );
}
