import styled from 'styled-components'

/**
 * normal layout
 */
export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  padding: 1rem;
  max-width: 100%;
  min-height: 100vh;
  justify-content: center;
  background-image: linear-gradient(
    120deg,
    hsl(221deg 39% 11%) 0%,
    hsl(233deg 15% 11%) 39%,
    hsl(240deg 4% 10%) 61%,
    hsl(0deg 0% 9%) 100%
  );
`

export const Container = styled.section`
  width: 1400px;
  display: flex;
  max-width: 1400px;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
  }
`

export const Column = styled.div`
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
    justify-content: center;
  }
`

/**
 * admin layout
 */
export const AdminWrapper = styled.main`
  width: 100%;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  flex-direction: column;
`

export const AdminContent = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: row;
`

export const AdminHeader = styled.header`
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.primary.accent_800};
  border-bottom: 2px solid ${({ theme }) => theme.primary.accent_900};
`

export const AdminContainer = styled.section`
  flex: 1;
`
