import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primary.accent_500};
`

export const StyledInput = styled.input`
  height: 35px;
  border: none;
  outline: none;
  margin: 10px 0px;
  text-indent: 10px;
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.primary.accent_100};
  background: ${({ theme }) => theme.primary.accent_800};
  border: 2px solid ${({ theme }) => theme.primary.accent_800};

  &:focus {
    border: 2px solid ${({ theme }) => theme.primary.accent_500};
  }
`
