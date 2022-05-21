import type { NextPage } from 'next'

import Head from 'next/head'
import { __store } from 'context/DataProvider'

import {
  DataTable,
  Delete,
  Edit,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from 'styles/table.module'

const Index: NextPage = () => {
  const { lists } = __store()
  return (
    <>
      <Head>
        <title>Watchlist</title>
        <meta
          name='description'
          content='my watchlist that i use to store data of things i watched'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DataTable>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>category name</TableHeaderCell>
              <TableHeaderCell>State</TableHeaderCell>
              <TableHeaderCell>created at</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((el) => (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.state}</TableCell>
                <TableCell>
                  {new Date(el.created_at).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Edit />
                  <Delete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DataTable>
    </>
  )
}

export default Index
