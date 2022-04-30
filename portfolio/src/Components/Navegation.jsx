import React from "react";
import { Nave, Links } from "./Style";

const Navegation = () => {
  return (
    <Nave>
      <Links to="/">Home</Links>
      <Links to="/about">About</Links>
      <Links to="/contact">Contact</Links>
      <Links to="/projects">Projects</Links>
    </Nave>
  )
}

export default Navegation;