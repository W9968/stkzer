import styled from 'styled-components'

export const AuthCol = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:first-child {
    height: 62px;
    padding: 0rem 1rem;
    justify-content: space-between;
  }

  &:last-child {
    flex: 1;
    padding-bottom: 15%;
    justify-content: center;
  }
`

export const HomeButton = styled.a`
  height: 32px;
  display: flex;
  font-size: 15px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary.accent_400};
`

export const FromHeader = styled.h1`
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
`

export const FormContainer = styled.div`
  width: 300px;
  display: grid;
  max-width: 300px;
  grid-template-columns: auto;
`
