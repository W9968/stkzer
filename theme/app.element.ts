import styled from 'styled-components'

/**
 * @description main layout with pattern deisn
 */
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: url('/svg/01_Distance_Nebulae.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Navbar = styled.nav``

export const Content = styled.div`
  flex: 1;
  display: grid;
  align-items: center;
  justify-content: center;
`

/**
 * @description admin layout with back office deisn
 */

export const AdminContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  height: 100vh;
  flex-direction: row;
`

export const AdminSideBar = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.palette.accent_800};
`

export const AdminSideBarLogo = styled.div`
  padding: 2rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.accent_800};
`

export const AdminSideBarContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: 2rem 0.5rem;
`

export const AdminSideBarFooter = styled.div`
  display: flex;
  padding: 2rem 0.5rem;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.palette.accent_800};
`

export const AdminContent = styled.div`
  flex: 1;
  display: flex;
  padding: 2rem;
  flex-direction: column;
`

export const LinksButtons = styled.button`
  width: 100%;
  gap: 0.5rem;
  border: none;
  height: 38px;
  outline: none;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  background: none;
  margin-top: 0.25rem;
  align-items: center;
  padding: 0rem 0.5rem;
  border-radius: 0.35rem;
  text-transform: capitalize;
  justify-content: flex-start;
  transition: 200ms ease-in-out;
  color: ${({ theme }) => theme.palette.accent_300};

  &:hover {
    background: #121212;
  }
`
