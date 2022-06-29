import { FC } from 'react'
import { motion } from 'framer-motion'
import { TiDatabase } from 'react-icons/ti'

import Link from 'next/link'
import styled from 'styled-components'

const Logo: FC = function () {
  return (
    <Link href={'/'} passHref>
      <StyledLogo variants={sentence} initial={'hidden'} animate={'visible'}>
        <TiDatabase size={24} />
        {line.split('').map((char, key) => (
          <motion.span variants={letter} key={key}>
            {char}
          </motion.span>
        ))}
      </StyledLogo>
    </Link>
  )
}

const line: string = 'stkzer'

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const letter = {
  hidden: { opacity: 0, X: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const StyledLogo = styled(motion.button)`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  user-select: none;
  font-size: 1.5rem;
  align-items: center;
  letter-spacing: -1px;
  justify-content: center;
  color: ${({ theme }) => theme.palette.accent_050};
  & > span {
    text-transform: uppercase;
    font-family: 'IBM Plex Sans', sans-serif;
  }
`

export default Logo
