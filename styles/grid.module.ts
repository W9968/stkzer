import styled from 'styled-components'
import { motion } from 'framer-motion'

type propCard = {
  readonly img: string
}

export const Card = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: calc(100% / 2);
  height: calc(100% / 2);
  border: 0.5px solid ${({ theme }) => theme.primary.accent_800};
`

export const Image = styled(motion.img)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const Overlay = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);

  > p {
    :first-child {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    :last-child {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.primary.accent_300};
    }
  }
`
