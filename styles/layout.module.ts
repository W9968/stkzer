import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

export const SideBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 275px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary.accent_100};
  background: ${({ theme }) => theme.primary.accent_900};
`

export const Content = styled.section`
  flex: 1;
`
