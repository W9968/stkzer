import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeContaienr = styled(motion.div)`
  height: 100%;
  width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const HomeTitle = styled.p`
  font-weight: 800;
  margin-top: 250px;
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 14px;
  text-transform: capitalize;
`

export const HomeParag = styled.p`
  font-size: 14px;
  width: 500px;
  text-align: center;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primary.accent_500};

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const HomeImageMockup = styled(motion.img)`
  width: 100%;
  margin-top: 150px;
`
