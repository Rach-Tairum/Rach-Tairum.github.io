import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components'


export const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Redressed&display=swap');
font-family: Redressed , sans-serif;
font-size: 55pt;
margin-top: 110px;
background-color: brown;
background-image: linear-gradient(to bottom, #6d0140, #ff85e5);
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
background-clip: text;
text-align: center;
`;

export const Subtitle = styled.h3`
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Redressed&display=swap');
font-family: Itim , sans-serif;
font-size: 35pt;
color: #6d0140;
text-align: center;
`
export const GlobalStyle = createGlobalStyle`
body {
  background-image: url('https://static.vecteezy.com/ti/vetor-gratis/p1/3360894-colorido-aquarela-design-fundo-textura-vetor.jpg');
}
`
export const Nave = styled.nav`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 15pt;
`

export const Links = styled(Link)`
border: solid rgb(39, 1, 41) 2px;
border-radius: 20px;
margin: 50px;
padding: 10px;
text-decoration: none;
color:#ff6cdf
`

export const Nav = styled(Nave)`
display: flex;
flex-direction: column;
justify-content: start;
font-size: 12pt;
`
export const SideLinks = styled(Links)`
border: 0;
margin: 10px;
width: 80px;
font-weight: 800;
color: #46085E;
`

export const SectionTitle = styled(Title) `
margin-top: 30px;
font-size: 30pt;
`

export const AsideThings = styled.div`
display: flex;
`
export const AsideThingsPS = styled(AsideThings)`
align-items: center;
display: flex;
margin-left: 80px;
`

export const AsideThings2 = styled(AsideThings)`
align-items: center;
transition: background-color 1s;
border-radius: 40px;
width: 150px;
height: 40px;
margin-bottom: 20px;

&:hover {
  background-color: lightblue;
  border-radius: 40px;
  height: 40px;
}
`

export const AsideThings3 = styled(AsideThingsPS)`
margin-top: 20px;
margin-bottom: 30px;

&:hover {
  background-color: rgba(173, 216, 230, 0);
}
`
export const AsideThings4 = styled(AsideThingsPS)`
flex-wrap: wrap;
justify-content: space-between;
width: 90%;

&:hover {
  background-color: rgba(173, 216, 230, 0);
}
`

export const Icons = styled.span`
color: #46085E;
margin-left: 30px;
`

export const Dots = styled(Icons)`
cursor: pointer;
margin-left: 10px;
margin-right: 150px;
font-size: 40px;
width: 80%;
`

export const TextContent = styled(AsideThings)`
align-items: center;
flex-direction: column;
text-align: justify;
text-indent: 1cm;
width: 65%;
`

export const ImagemPerfil = styled.img`
border-radius: 900px 850px;
margin-right: 40px;
`

export const TextoAbout = styled.p`
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
font-family: Rubik , sans-serif;
color: #1C0326;
font-size: 12pt;
margin-left: 10px;
`
export const IconContact = styled(Dots)`
font-size: 50px;
margin-right: 40px;
width: 50px;
`

export const Redirects = styled.a`
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
font-family: Rubik , sans-serif;
text-decoration: none;
color: #1C0326;
font-size: 14pt;
`
export const Email = styled(TextoAbout)`
font-size: 14pt;
`

export const Contatos = styled.img` 
margin-left: 45px;
width: 50px;
`

export const NomeProjetos = styled(Subtitle)`
font-size: 20pt;
margin-right: 30px;
cursor: pointer;
padding-right: 30px;
border-radius: 20px;

&:hover {
  background-color: lightblue;
}
`

export const FotoProjetos = styled(Contatos)`
width: 600px;
`

export const TextoProjetos = styled(AsideThings)`
width: 80%;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 25px;
padding-left:
`

export const AcessaGithub = styled.button`
/* From uiverse.io by @barisdogansutcu */
padding: 17px 40px;
 border-radius: 50px;
 border: 0;
 background-color: rgb(142, 3, 82);
 box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
 letter-spacing: 1.5px;
 text-transform: uppercase;
 font-size: 15px;
 transition: all .5s ease;
 color: white;

 &:hover {
  letter-spacing: 3px;
  background-color:rgb(221, 7, 128);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
 }

 &:active {
  letter-spacing: 3px;
  background-color:rgb(221, 7, 128);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
 }
`