import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const Anchor = styled.button`
  width: 100%;
  height: 38px;
  border: none;
  outline: none;
  padding: 16px;
  display: flex;
  margin: 5px 0px;
  cursor: pointer;
  font-size: 14px;
  background: none;
  border-radius: 10px;
  align-items: center;
  text-transform: capitalize;
  justify-content: flex-start;
  color: ${({ theme }) => theme.primary.accent_100};

  &:hover {
    background: ${({ theme }) => theme.primary.accent_800};
  }
`

export const Line = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.primary.accent_700};
`

export const Icon = styled.button`
  width: 100%;
  height: 38px;
  border: none;
  outline: none;
  padding: 16px;
  display: flex;
  margin: 24px 0px;
  cursor: pointer;
  font-size: 21px;
  background: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary.accent_100};
  background: ${({ theme }) => theme.primary.accent_700};
`
