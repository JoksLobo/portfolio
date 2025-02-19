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
          Content="Simulador de Jinn (Gênio) criado para mostrar animações e elementos de css."
          Link="http://google.com"
        />
      </li>
      <li>
        <Projeto
          Title="Landing Page com tailwind"
          Content="Landing Page responsiva com tema dark/light usando o tailwind."
        />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </Lista>
  </section>
)

export default Projetos
