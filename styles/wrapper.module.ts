import styled from 'styled-components'

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
    padding-bottom: 15%;
    justify-content: center;
  }
`
