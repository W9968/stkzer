import { FC } from 'react'
import styled from 'styled-components'
import { TiDatabase } from 'react-icons/ti'

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: 1rem;
    letter-spacing: 0.25;
    text-transform: uppercase;
  }
`

const Logo: FC = () => {
  return (
    <LogoContainer>
      <TiDatabase size={24} />
      <p>stkzer</p>
    </LogoContainer>
  )
}

export default Logo
