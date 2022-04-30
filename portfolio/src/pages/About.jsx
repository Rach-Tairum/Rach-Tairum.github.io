import React, { useEffect, useState } from 'react';
import NavegationSide from '../Components/Navegation-Side';
import { SectionTitle, AsideThings, AsideThingsPS, TextContent, ImagemPerfil, TextoAbout } from '../Components/Style';
import foto from '../images/Foto_Perfil.png';

function About () {
  const [birth, setBirth] = useState(0);

  useEffect(() => {
    // Referência: https://www.javatpoint.com/oprweb/test.jsp?filename=calculate-age-using-javascript1
    let dob = new Date("07/25/1996");
    //calculate month difference from current date in time
    let month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format
    let age_dt = new Date(month_diff); 
    
    //extract year from date    
    let year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    let age = Math.abs(year - 1970);
    setBirth(age)
  }, [])

  return (
      <AsideThings>
        <aside>
          <NavegationSide />
        </aside>
        <TextContent>
          <SectionTitle>About</SectionTitle>
          <AsideThingsPS>
            <ImagemPerfil src={foto} alt="foto de menina sentada sorrindo" width="200" height="250"/>
            
            <article>
            <TextoAbout>Olá!</TextoAbout>
            <TextoAbout>Meu nome é Rachel Tairum, tenho { birth } anos, sou Brasileira, carioca de nascença. Sou formada na UFSCar - Universidade Federal de São Carlos em Biotecnologia e conclui o mestrado na mesma universidade. Sou amante da tecnologia e atualmente moro em Boituva, interior de São Paulo. </TextoAbout>

            <TextoAbout>Durante o mestrado, trabalhei com o uso de drone para medição de índices que ajudariam no melhoramento de cana de açúcar, infelizmente não foi tão bem aproveitado porém, me mostrou o potencial da tecnologia em ajudar a vida das pessoas e me fez investir mais na área.</TextoAbout>

            <TextoAbout>O que me levou a estar cursando Desenvolvimento Web na Trybe! Já aprendi algumas novas tecnologias como HTML, CSS, JavaScript, React JS, Redux, Context API e Hooks e estou iniciando meus estudos em Docker e MySQL! Mas não para por ai porque há muito mais a aprender!</TextoAbout>

            <TextoAbout>Tenho como hobbys a dança, a música (princpalmente mpb, samba e pop) a leitura, a fotografia, o gosto por viajar, desbravar novas culturas e adquirir novas experiências.</TextoAbout>
          </article>
          </AsideThingsPS>
        </TextContent>
      </AsideThings>
    );
}

export default About;