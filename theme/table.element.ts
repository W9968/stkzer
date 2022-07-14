import styled from 'styled-components'

export const TableWrapper = styled.div`
  overflow: hidden;
  margin-top: 2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.palette.accent_800};
`

export const Table = styled.table`
  width: 100%;
  border: none;
  padding: 0rem 0.5rem;
  border-collapse: collapse;
`

export const TableHead = styled.th`
  font-size: 14px;
  text-align: end;
  font-weight: 500;
  padding: 0.85rem 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.accent_500};
  background: ${({ theme }) => theme.palette.accent_800};

  &:first-child,
  &:nth-child(2) {
    text-align: start;
  }
`

export const TableData = styled.td`
  font-size: 14px;
  text-align: end;
  font-weight: 400;
  padding: 0.75rem 0.75rem;
  color: ${({ theme }) => theme.palette.accent_300};
  border-top: 1px solid ${({ theme }) => theme.palette.accent_800};

  &:first-child,
  &:nth-child(2) {
    text-align: start;
  }
`
