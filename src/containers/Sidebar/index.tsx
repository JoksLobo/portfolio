import React from 'react'
import Titulo from '../../Components/Titulo/index.tsx'
import Avatar from '../../Components/Avatar/index.tsx'
import Paragrafo from '../../Components/Paragrafo/index.tsx'

import { Descricao, ThemeButton, SidebarContainer } from './styles.ts'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Joks Lobo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        JoksLobo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
