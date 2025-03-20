import Projeto from '../../Components/Projeto/index.tsx'
import Titulo from '../../Components/Titulo/index.tsx'

import { Lista } from './styles.ts'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          Title="Jinn Simulator"
          Content="Simulador de Jinn (Gênio) criado para mostrar animações e elementos de css (Ainda em construção)."
          Link="https://jinn-simulator.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Landing Page com tailwind"
          Content="Landing Page responsiva com tema dark/light usando o tailwind."
          Link="https://cherrywolfstudios.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Landing Page Parallax"
          Content="Landing page usando animação em Parallax (projeto original de https://codepen.io/GeoxCodes/pen/zWNNZP)"
          Link="https://paralax-landing-page-jl.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Clone Disney Plus"
          Content="Clone de pagina inicial do site Disney Plus"
          Link="https://clone-disney-plus-8tib.vercel.app/#"
        />
      </li>
      <li>
        <Projeto
          Title="Loja De Discos Crypta Store"
          Content="Site da loja de discos fictícia Crypta Record Store"
          Link="https://crypta-store-finalizado.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Site em Parallax"
          Content="Site de empresa fictícia usando parallax"
          Link="https://site-parallax-xi.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Relógio Digital"
          Content="Relogio Digital usando Css"
          Link="https://relogio-digital-jl.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          Title="Site Deadly Vipers"
          Content="Site de contato da banda fictícia Deadly Vipers"
          Link="https://deadly-vipers-site-oficial.vercel.app/"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
