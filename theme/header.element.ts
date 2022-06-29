import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 1200px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const Anchor = styled.button`
  border: none;
  outline: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.accent_300};
`
