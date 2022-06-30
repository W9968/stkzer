import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledProfileButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  position: relative;
  align-items: center;
  justify-content: center;

  > img {
    width: 36px;
    height: 36px;
    border-radius: 100px;
  }
`

export const StyledDropDown = styled(motion.div)`
  top: 100%;
  right: -50%;
  width: 200px;
  display: grid;
  margin-top: 8px;
  position: absolute;
  height: fit-content;
  padding: 0px 0.5rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.palette.accent_100};

  > p {
    border: none;
    outline: none;
    height: 42px;
    display: flex;
    background: none;
    font-weight: 600;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.palette.accent_900} !important ;

    &:last-child {
      border-top: 1px solid ${({ theme }) => theme.palette.accent_300};
    }
  }
`
