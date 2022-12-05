import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "../imgs/naointeressa1.png";
//import Image from "../imgs/naointeressa.jpg";
//import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//const root = ReactDOMClient.createRoot(rootElement);

function Cabecarallho() {
  return (
    <nav className="Cabecarallho">
      {/* <img className="NavImg" src={Image} /> */}
      <div className="NavEsquerda">
        <img
          className="NavImg"
          alt="React Icon"
          src={require("../imgs/naointeressa1.png")}
        />
        <h4 className="pultaqoparil">React Facts </h4>
      </div>
      {/* <img className="NavImg" src="naointeressa.jpg"></img> */}
      <ul className="UlRight">
        <li>Courses - Intro</li>
        {/* <li>Prices</li>
        <li>Contact</li> */}
      </ul>
    </nav>
  );
}

function Carallho() {
  return (
    <div className="ConteudoCentral">
      <h2 className="TituloConteudoCentral">Facts About React</h2>
      <ul>
        <li> It's useful, fast, low learning curve (some times)</li>
        <li> Was first realeased in 2013</li>
        <li> Was create by Jordan Walke</li>
        <li> Has well over 100k stars github</li>
        <li> Is maintained by Facebook</li>
        <li> Powers Thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Foda() {
  return <div>.</div>;
}

root.render(
  <React.Fragment>
    <Cabecarallho />
    <Carallho />
    <Foda />
  </React.Fragment>
);
