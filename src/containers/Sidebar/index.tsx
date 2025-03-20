import React from 'react'
import Titulo from '../../Components/Titulo/index.tsx'
import Avatar from '../../Components/Avatar/index.tsx'
import Paragrafo from '../../Components/Paragrafo/index.tsx'

import { Descricao, ThemeButton, SidebarContainer } from './styles.ts'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Joks Lobo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        JoksLobo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end <br />
        <a href="https://github.com/JoksLobo">GitHub</a>
      </Descricao>
      <ThemeButton onClick={props.trocaTema}>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
