import Titulo from '../Titulo/index.tsx'
import Paragrafo from '../Paragrafo/index.tsx'

import { Card, LinkButton } from './styles.ts'

type ProjetoProps = {
  Title: string
  Content: string
  Link: string
}

const Projeto = ({ Title, Content, Link, Image }: ProjetoProps) => (
  <Card>
    <Titulo>{Title}</Titulo>
    <Paragrafo tipo="secundario">{Content}</Paragrafo>
    <a href={Link}>
      <LinkButton>Visualizar</LinkButton>
    </a>
  </Card>
)

export default Projeto
