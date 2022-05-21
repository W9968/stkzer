import styled, { css } from 'styled-components'

type propsButton = {
  readonly active: boolean
}

export const Nav = styled.nav`
  width: 260px;
  height: 46px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  justify-content: center;
  margin: 0 auto 24px auto;
  background: ${({ theme }) => theme.primary.accent_800};
`

export const ButtonNavigation = styled.a<propsButton>`
  height: 36px;
  width: 125px;
  border: none;
  outline: none;
  display: flex;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background: transparent;
  text-transform: capitalize;
  transition: 300ms ease-in-out;
  color: ${({ theme }) => theme.primary.accent_100};

  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.primary.accent_900};
    `}
`
