import styled from 'styled-components'

export const GitHubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
    }
  }
`

export const Icon = styled.svg`
  height: 157px;
`

export const TecSecao = styled.div`
  margin-bottom: 32px;

  img {
    width: 64px;
    margin-right: 8px;
    margin-top: 8px;
  }

  .fa-brands.fa-unity {
    font-size: 70px;
  }
`
