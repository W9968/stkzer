import { FC } from 'react'
import { category } from 'types/data'
import { __store } from 'context/DataProvider'
import { CategoryWrapper } from 'styles/category.module'
import { BiTrashAlt, BiEditAlt } from 'react-icons/bi'
import {
  ActionSection,
  BodyCell,
  BodyRow,
  DataTable,
  Delete,
  Edit,
  HeadCell,
  HeadRow,
  TableBody,
  TableBodyRow,
  TableHead,
} from 'styles/table.module'

const Category: FC = () => {
  const { categories, deleteFromPool } = __store()

  return (
    <CategoryWrapper>
      <DataTable>
        <TableHead>
          <HeadRow>
            <HeadCell>category name</HeadCell>
            <HeadCell>created at</HeadCell>
          </HeadRow>
          <ActionSection></ActionSection>
        </TableHead>
        <TableBody>
          {categories.map((element: category) => {
            return (
              <TableBodyRow key={element.id}>
                <BodyRow>
                  <BodyCell>{element.name}</BodyCell>
                  <BodyCell>
                    {new Date(element.created_at).toDateString()}
                  </BodyCell>
                </BodyRow>
                <ActionSection>
                  <Edit>
                    <BiEditAlt />
                  </Edit>
                  <Delete
                    onClick={() => deleteFromPool('category', element.id)}>
                    <BiTrashAlt />
                  </Delete>
                </ActionSection>
              </TableBodyRow>
            )
          })}
        </TableBody>
      </DataTable>
    </CategoryWrapper>
  )
}

export default Category
