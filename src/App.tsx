import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import EstiloGlobaL, { Container } from './styles.ts'
import Projetos from './containers/Projetos/index.tsx'
import temaLight from './Themes/light.ts'
import temaDark from './Themes/dark.ts'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobaL />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
