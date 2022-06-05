import styled from 'styled-components'

export const Clickable = styled.button`
  height: 35px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 10px 0px;
  border-radius: 5px;
  background: transparent;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary.accent_100};
  background: ${({ theme }) => theme.secondary.accent_700};
  border: 2px solid ${({ theme }) => theme.secondary.accent_700};

  &:hover {
    background: ${({ theme }) => theme.secondary.accent_800};
    border: 2px solid ${({ theme }) => theme.secondary.accent_800};
  }

  &:disabled {
    cursor: wait;
    background: ${({ theme }) => theme.secondary.accent_300};
    border: 2px solid ${({ theme }) => theme.secondary.accent_300};
  }
`