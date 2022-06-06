import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled(motion.div)`
  width: 600px;
  display: flex;
  padding: 16px;
  margin: 15% auto;
  min-height: 200px;
  border-radius: 10px;
  flex-direction: column;
  background: ${({ theme }) => theme.primary.accent_900};

  @media (max-width: 630px) {
    width: 100%;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    font-size: 1rem;
    text-transform: capitalize;
  }

  > svg {
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  flex: 1;
  padding: 1rem 0;
`

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Buttons = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;

  > button:first-child {
    background: ${({ theme }) => theme.error.accent_500};
    border: 2px solid ${({ theme }) => theme.error.accent_500};

    &:hover {
      background: ${({ theme }) => theme.error.accent_700};
      border: 2px solid ${({ theme }) => theme.error.accent_700};
    }
  }
`
