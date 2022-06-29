import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Banner = styled.div`
  width: 1200px;
  display: flex;
  margin: 0 auto;
  margin-top: -5%;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 750px) {
    margin-top: 15%;
    flex-direction: column;
  }
`

export const Column = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto;

  &:first-child {
    width: 600px;
  }

  &:last-child {
    padding: 1rem 0;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
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
  font-size: 3rem;
  text-transform: capitalize;

  @media (max-width: 750px) {
    font-size: 2.24rem;
  }
`

export const HeadingParag = styled.p`
  font-size: 1rem;
  margin: 1rem 0rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.palette.accent_200};
`
