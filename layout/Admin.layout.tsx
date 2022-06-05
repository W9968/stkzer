import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactElement, ReactNode } from 'react'

import {
  AdminContainer,
  AdminHeader,
  AdminWrapper,
} from 'styles/wrapper.module'
import { Anchor } from 'styles/admin.module'
import { BiCollection, BiCategoryAlt } from 'react-icons/bi'

const AdminLayout: FC<prop> = ({ children }) => {
  const route = useRouter()

  return (
    <AdminWrapper>
      <AdminHeader>
        {headerNavigation.map((el: IheaderNavigation, index) => (
          <Link key={index} href={`/${el.path}`} passHref>
            <Anchor
              anchor={
                route.pathname.split('/').reverse()[0] ===
                el.path.split('/').reverse()[0]
              }>
              {el.icon}
              {el.name}
            </Anchor>
          </Link>
        ))}
      </AdminHeader>
      <AdminContainer>{children}</AdminContainer>
    </AdminWrapper>
  )
}

export default AdminLayout

type prop = {
  children: ReactElement
}

interface IheaderNavigation {
  name: string
  path: string
  icon: ReactNode
}

const headerNavigation: IheaderNavigation[] = [
  {
    name: 'home',
    path: 'admin',
    icon: <BiCollection size={21} style={{ marginRight: 10 }} />,
  },
  {
    name: 'collections',
    path: 'admin/collection',
    icon: <BiCollection size={21} style={{ marginRight: 10 }} />,
  },
  {
    name: 'categories',
    path: 'admin/category',
    icon: <BiCategoryAlt size={21} style={{ marginRight: 10 }} />,
  },
]
