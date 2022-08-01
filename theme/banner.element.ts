import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Banner = styled.div`
  width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1250px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    margin-top: 15%;
    flex-direction: column;
  }
`

export const Column = styled(motion.div)`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;

  &:first-child {
    width: 600px;
  }

  &:last-child {
    padding: 1rem 0;
    justify-content: flex-start;
  }

  @media (max-width: 769px) {
    gap: 0rem;

    &:first-child {
      width: 100%;
    }

    &:last-child {
      display: flex;
      padding-top: 2rem;
      align-items: center;
      justify-content: center;
      padding-bottom: 50px;
    }
  }
`

export const HeadingTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 4.5rem);
  text-transform: capitalize;

  @media (max-width: 750px) {
    font-size: 2.24rem;
  }
`

export const HeadingParag = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin: 1rem 0rem;
  line-height: clamp(1.5rem, 1.5vw, 1.7rem);
  color: ${({ theme }) => theme.palette.accent_200};
`
