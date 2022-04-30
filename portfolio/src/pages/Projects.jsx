import React, { useEffect, useState } from 'react';
import NavegationSide from '../Components/Navegation-Side';
import { SectionTitle, AsideThings, TextContent, NomeProjetos, AsideThings4, TextoAbout, FotoProjetos, TextoProjetos, AcessaGithub } from '../Components/Style';
// import { useHistory } from 'react-router-dom'
import projetos from '../Data/projects-data';

function Projects () {
// const history = useHistory(); 
  const [toggle, setToggle] = useState(false)
  const [idTarget, setIdTarget] = useState([])

  useEffect(() => {
    const ids = projetos.reduce((acc, projeto) => {
      acc.push({[projeto.id]: false})
      return acc;
    },[])
    setIdTarget(ids);
  }, [])

  const openDescription = ({target}) => {
    const { id } = target;

    idTarget.forEach((idT, index) => {
      const compare = index + 1;
      if ( compare === Number(id)) {
        idT[compare] = !idT[compare]
      }
    })
    setToggle(!toggle)
  }

  return (
    <AsideThings>
      <aside>
        <NavegationSide />
      </aside>
      <TextContent>
        <SectionTitle>Projects</SectionTitle>
        <AsideThings4>
        {projetos.map((projeto) => (
          <div key={projeto.id}>
            <NomeProjetos id={projeto.id} onClick={openDescription}>{projeto.project_name}</NomeProjetos>
            {idTarget.map((idT, index2) => {
              const compare = index2 + 1;
              if (compare === projeto.id && idT[compare] === true) {
                console.log(projeto.picture)
                return (
                  <TextoProjetos key={index2}>
                    <FotoProjetos src={projeto.picture} alt='imagem do projeto'/>
                    <TextoAbout>{projeto.project_description}</TextoAbout>
                    <a href={projeto.link_github}>
                      <AcessaGithub>Acesse o repositório</AcessaGithub>
                    </a>
                  </TextoProjetos> 
                )
              }
              return (
                <p></p>
              )
            })
          }
          </div>
        ))}
        
        </AsideThings4>
      </TextContent>
    </AsideThings>
    );
}

export default Projects;