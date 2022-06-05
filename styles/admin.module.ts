import styled from 'styled-components'

export const Anchor = styled.button<{ anchor: boolean }>`
  height: 38px;
  border: none;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  background: none;
  padding: 0px 16px;
  border-radius: 5px;
  margin: 0rem 0.5rem;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ anchor, theme }) =>
    anchor ? theme.primary.accent_50 : theme.primary.accent_400};

  &:hover {
    color: ${({ theme }) => theme.primary.accent_50};
  }
`
