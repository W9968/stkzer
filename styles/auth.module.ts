import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FormContainer = styled(motion.div)`
  width: 300px;
  display: grid;
  max-width: 300px;
  grid-template-columns: auto;
`

export const FromHeader = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.25px;
  text-transform: capitalize;
`

export const FormParag = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.primary.accent_500};
`
