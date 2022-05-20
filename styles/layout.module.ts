import styled from 'styled-components'
import { motion } from 'framer-motion'

type SideProps = {
  readonly state: boolean
}

export const Wrapper = styled.main`
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  flex-direction: row;
`

export const Masonry = styled(motion.section)`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`

export const Preview = styled(motion.section)`
  min-width: calc(100vw / 2.5);
`

export const SideNav = styled.nav<SideProps>`
  width: 82px;
  display: flex;
  cursor: pointer;
  min-width: 82px;
  align-items: center;
  justify-content: center;
  color: ${({ state, theme }) =>
    state ? theme.primary.accent_100 : theme.primary.accent_500};

  border-left: 1px solid ${({ theme }) => theme.primary.accent_900};
  border-right: 1px solid ${({ theme }) => theme.primary.accent_600};
  transition: 300ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary.accent_100};
  }
`

export const AddingSection = styled(motion.section)`
  left: 82px;
  z-index: 99;
  height: 100%;
  position: fixed;
  background: ${({ theme }) => theme.primary.accent_900};
`
