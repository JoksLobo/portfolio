import Titulo from '../Titulo/index.tsx'
import Paragrafo from '../Paragrafo/index.tsx'

import { Card, LinkButton } from './styles.ts'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Projeto
