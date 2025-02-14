import React from 'react'
import Titulo from '../../Components/Titulo/index.tsx'

import Paragrafo from '../../Components/Paragrafo/index.tsx'
import { GitHubSecao } from './styles.ts'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsam
      fuga cumque numquam voluptatibus accusamus, incidunt vitae, et, pariatur
      corporis ut neque consectetur itaque unde modi? Quaerat veniam ex laborum.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?count_private=true%22&include_all_commits=true&show_icons=true&theme=dracula&username=JoksLobo" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoksLobo&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
