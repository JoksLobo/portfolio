import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkButton = styled.a`
  color: ${(props) => props.theme.corPrincipal};
  font-size: 14px;
  background-color: ${(props) => props.theme.corFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  cursor: pointer;
  margin-top: 24px;
  border-radius: 8px;
`
