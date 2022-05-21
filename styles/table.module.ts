import styled from 'styled-components'
import { BiTrashAlt, BiEditAlt } from 'react-icons/bi'

export const DataTable = styled.div`
  overflow: hidden;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.primary.accent_800};
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  height: 52px;
  background: ${({ theme }) => theme.primary.accent_800};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  height: 42px;

  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.primary.accent_800};
  }
`

export const TableCell = styled.td`
  padding: 0 15px;
`

export const TableHeaderCell = styled.th`
  padding: 0 15px;
  font-size: 1rem;
  font-weight: 500;
  text-align: start;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary.accent_400};
`

export const Delete = styled(BiTrashAlt)`
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.error.accent_400};
`

export const Edit = styled(BiEditAlt)`
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary.accent_500};
`
