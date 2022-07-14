import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledAuthRow = styled.main`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  overflow: hidden;
  flex-direction: row;
`

export const StyledAuthCol = styled.div`
  &:first-child {
    width: 40%;
  }

  &:last-child {
    width: 60%;
    background: url('/svg/shapes.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export const StyledAuthWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.accent_900};
`

export const StyledAuthContainer = styled.div`
  flex: 1;
  width: 250px;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  padding-bottom: 15%;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
  }

  > p {
    width: 250px;
    font-size: 0.825rem;
    color: ${({ theme }) => theme.palette.accent_400};
  }
`

export const StyledAuthButton = styled.button`
  gap: 1rem;
  width: 100%;
  border: none;
  height: 32px;
  outline: none;
  display: flex;
  cursor: pointer;
  margin-top: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 0rem 2rem;

  > p {
    font-size: 0.875rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.palette.accent_300};
  }

  &:first-child {
    color: #d4d4d8;
    background: #ff3b3b;
  }

  &:last-child {
    color: #d4d4d8;
    background: #2c3639;
  }
`
