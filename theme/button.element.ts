import { motion } from 'framer-motion'
import styled from 'styled-components'

/**
 * normal button
 */

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

/**
 * drop down button
 */

export const StyledDropDownButton = styled.div`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 0.35rem;
`

export const StyledDropDownButtonClickable = styled.button`
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

export const StyledDropDownContent = styled(motion.div)`
  display: flex;
  font-size: 16px;
  padding-left: 1.7rem;
  padding-right: 0.5rem;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.accent_500};

  > button {
    width: 100%;
    gap: 0.5rem;
    border: none;
    height: 32px;
    outline: none;
    display: flex;
    cursor: pointer;
    background: none;
    font-size: 0.85rem;
    margin-top: 0.15rem;
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
  }
`
