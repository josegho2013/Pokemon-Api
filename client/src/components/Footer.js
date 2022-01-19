import React from "react";
import { SiPokemon } from "react-icons/si";
import "./styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer_container">
        <h1>
        {" "}
      <SiPokemon size="5rem" />
      </h1>
      <h3>Realizado por:</h3>
      <h4>José Hernández</h4>
    </div>
  );
};

export default Footer;
