import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeContaienr = styled(motion.div)`
  height: 100%;
  width: 500px;
  display: flex;
  padding-bottom: 20%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const HomeTitle = styled.p`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 14px;
  text-align: center;
  text-transform: capitalize;
`

export const HomeParag = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primary.accent_500};
`

export const HomeImageMockup = styled.div`
  left: 50%;
  top: 100%;
  z-index: 1;
  width: 80%;
  height: 400px;
  position: absolute;
  transform: translate(-50%, -100%);
  background-image: url('/image/mockup.png');
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`
