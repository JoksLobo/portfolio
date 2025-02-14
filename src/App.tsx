import React from 'react'
import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sobre/index.tsx'
import EstiloGlobaL, { Container } from './styles.ts'
import Projetos from './containers/Projetos/index.tsx'

function App() {
  return (
    <>
      <EstiloGlobaL />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
