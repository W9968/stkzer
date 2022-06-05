import styled from 'styled-components'

export const AuthContainer = styled.main`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  max-width: 100%;
  min-height: 100%;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
    120deg,
    hsl(221deg 39% 11%) 0%,
    hsl(233deg 15% 11%) 39%,
    hsl(240deg 4% 10%) 61%,
    hsl(0deg 0% 9%) 100%
  );
`

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
