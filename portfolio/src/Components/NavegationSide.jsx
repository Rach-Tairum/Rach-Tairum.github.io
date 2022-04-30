import React, { useState } from "react";
import { Nav, SideLinks, Dots, AsideThings2, Icons } from "./Style";

const NavegationSide = () => {
const [sideBar, setSideBar] = useState(false);

const showSideBar = () => {
  setSideBar(!sideBar)
}

  return (
    <div>
      <Dots className="material-icons" onClick={ showSideBar }>menu</Dots>
      {sideBar && 
      <Nav>
        <AsideThings2>
          <Icons className="material-icons">home</Icons>
          <SideLinks to="/">Home</SideLinks>
        </AsideThings2>

        <AsideThings2>
          <Icons className="material-icons">person_outline</Icons>
          <SideLinks to="/about">About</SideLinks>
        </AsideThings2>

        <AsideThings2>
          <Icons className="material-icons">phone_iphone</Icons>
          <SideLinks to="/contact">Contact</SideLinks>
        </AsideThings2>

        <AsideThings2>
          <Icons className="material-icons">folder</Icons>
          <SideLinks to="/projects">Projects</SideLinks>
        </AsideThings2>
      </Nav>
      }
    </div>
  )
}

export default NavegationSide;