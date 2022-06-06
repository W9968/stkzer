import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CategoryPageContainer = styled.div`
  width: 900px;
  padding: 1rem;
  margin: 1rem auto;
`

export const CategoryForm = styled.form`
  & > h1 {
    padding: 12px 0px;
    letter-spacing: 1px;
    margin-bottom: 50px;
    text-transform: uppercase;
    border-bottom: 1px solid ${({ theme }) => theme.primary.accent_700};
  }
`

export const CategoryData = styled.div`
  margin-top: 62px;
  overflow: hidden;
  border-radius: 5px;

  border: 2px solid ${({ theme }) => theme.primary.accent_800};
`

export const DataRow = styled(motion.div)`
  display: flex;
  height: 42px;
  padding: 10px 16px;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    background: ${({ theme }) => theme.primary.accent_800};
    > p {
      font-weight: 600;
      text-transform: uppercase;
      color: ${({ theme }) => theme.primary.accent_500};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.primary.accent_800};
  }

  & > p {
    font-size: 16px;
  }
`

export const Action = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;

  & > button {
    width: 28px;
    border: none;
    height: 28px;
    display: flex;
    cursor: pointer;
    background: none;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.primary.accent_100};

    &:first-child {
      background: ${({ theme }) => theme.secondary.accent_500};
    }
    &:last-child {
      background: ${({ theme }) => theme.error.accent_500};
    }
  }
`

export const ErrorMessage = styled(motion.p)`
  padding: 10px;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  background: ${({ theme }) => theme.error.accent_500};
`
