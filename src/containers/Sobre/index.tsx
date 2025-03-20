import React from 'react'
import Titulo from '../../Components/Titulo/index.tsx'

import Paragrafo from '../../Components/Paragrafo/index.tsx'
import { GitHubSecao, TecSecao } from './styles.ts'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Me chamo Jocson de Souza Lobo (Joks Lobo), desenvolvedor Full Stack Python
      em formação pela EBAC e recem iniciando curso em Unity para
      desenvolvimento de jogos em linguagem C#. Busco experiência na área de
      Front-end. Tenho facilidade de trabalhar em equipe, focado e aberto a
      conselhos e critícas em relação ao meu trabalho.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?count_private=true%22&include_all_commits=true&show_icons=true&theme=dracula&username=JoksLobo" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoksLobo&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
    <Titulo fontSize={16}>Tecnologias que estou aprendendo:</Titulo>
    <TecSecao>
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gulp/gulp-plain.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grunt/grunt-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
      />
      <img
        loading="lazy"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
      />
      <i className="fa-brands fa-unity"></i>
    </TecSecao>
  </section>
)

export default Sobre
