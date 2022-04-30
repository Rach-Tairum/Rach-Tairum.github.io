import React from 'react';
import NavegationSide from '../Components/Navegation-Side';
import { SectionTitle, AsideThings, AsideThings3, TextContent, IconContact, Redirects, Email, Contatos } from '../Components/Style';
import github from '../images/25231.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';


function Contact () {
  return (
    <AsideThings>
    <aside>
      <NavegationSide />
    </aside>
    <TextContent>
      <SectionTitle>Contact</SectionTitle>
      <article>
        <AsideThings3>
          <Contatos src={ github } alt="gatinho do github"/>
          <Redirects href="https://github.com/Rach-Tairum">GitHub</Redirects>
        </AsideThings3>

        <AsideThings3>
          <Contatos src={ linkedin } alt="logo in do linkedin"/>
          <Redirects href="https://www.linkedin.com/in/rachel-cruz/">LinkedIn</Redirects>
        </AsideThings3>

        <AsideThings3>
          <Contatos src={ gmail } alt="carta do gmail"/>
          <Email>rachel.tairum@gmail.com</Email>
        </AsideThings3>

        <AsideThings3>
          <IconContact className="material-icons">description</IconContact>
          <Redirects href="https://drive.google.com/file/d/1GQBQbmfGJMRxL2dcQKQLgHqwhNfYFH8T/view?usp=sharing">Curriculo online</Redirects>
        </AsideThings3>
      </article>
    </TextContent>
  </AsideThings>
    );
}

export default Contact;