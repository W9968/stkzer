import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledTextField = styled(motion.div)`
  width: 100%;
  height: 38px;
  display: flex;
  position: relative;
  align-items: center;
`

export const StyledEditField = styled.input`
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  font-size: 15px;
  position: absolute;
  padding: 0rem 1rem;
  border-radius: 0.35rem;
  color: ${({ theme }) => theme.palette.accent_200};
  background: ${({ theme }) => theme.palette.accent_800};
  border: 2px solid ${({ theme }) => theme.palette.accent_800};
  &:focus {
    border: 2px solid ${({ theme }) => theme.palette.accent_600};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.accent_600};
  }
`
