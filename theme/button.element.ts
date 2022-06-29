import styled from 'styled-components'

type StyledButtonProps = {
  transform: 'CAP' | 'UP'
}

export const StyledButton = styled.button<StyledButtonProps>`
  flex: 1;
  gap: 0.25rem;
  height: 42px;
  border: none;
  display: flex;
  outline: none;
  cursor: pointer;
  background: none;
  margin-top: 2rem;
  padding: 0px 2.5rem;
  align-items: center;
  border-radius: 0.35rem;
  justify-content: center;
  background: ${({ theme }) => theme.palette.accent_050};

  > p {
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: ${({ transform }) =>
      transform === 'UP' ? 'uppercase' : 'capitalize'};
  }
`
