import styled from 'styled-components'

export const DataTable = styled.div`
  width: 100%;
`

export const TableHead = styled.div`
  width: 100%;
  display: flex;
  border-radius: 14px;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.primary.accent_200};
`

export const HeadRow = styled.div`
  flex: 1;
  height: 54px;
  display: flex;
  align-items: center;
`

export const HeadCell = styled.p`
  flex: 1;
  padding: 14px;
  font-weight: 600;
  text-align: start;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary.accent_500};
`

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableBodyRow = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  border-radius: 14px;
  border-radius: 14px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary.accent_50};
`

export const BodyRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BodyCell = styled.p`
  flex: 1;
  height: 44px;
  display: flex;
  padding: 14px;
  align-items: center;
  justify-content: flex-start;
`

export const ActionSection = styled.div`
  width: 100px;
  height: 44px;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-align: start;
  margin-right: 12px;
  text-transform: uppercase;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.primary.accent_500};
`

export const Edit = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 22px;
  background: none;
  padding: 0 10px;
  align-items: center;
  border-radius: 14px;
  letter-spacing: 0.5px;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary.accent_500};
`

export const Delete = styled.button`
  width: 44px;
  border: none;
  height: 44px;
  display: flex;
  cursor: pointer;
  font-size: 22px;
  background: none;
  padding: 0 10px;
  align-items: center;
  border-radius: 14px;
  letter-spacing: 0.5px;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.error.accent_500};
`
