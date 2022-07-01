import Logo from 'modules/logo/Logo'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { __auth } from 'context/AuthProvider'

import { BiExit, BiCog, BiStats, BiListUl } from 'react-icons/bi'
import {
  AdminContainer,
  AdminContent,
  AdminSideBar,
  AdminSideBarContent,
  AdminSideBarFooter,
  AdminSideBarLogo,
  Content,
  LinksButtons,
  Navbar,
} from 'theme/app.element'

import DropDown from 'modules/button/DropDown'

const AdminLayout: FC<ComponentProp> = function ({ children }) {
  const { push, pathname } = useRouter()
  const { isLoaggedIn, logout } = __auth()

  if (!isLoaggedIn) {
    return <p>not logged in</p>
  } else
    return (
      <AdminContainer>
        <AdminSideBar>
          {/* header */}
          <AdminSideBarLogo>
            <Logo />
          </AdminSideBarLogo>
          {/* buttons */}
          <AdminSideBarContent>
            <LinksButtons onClick={() => push('/profile')}>
              <BiStats
                size={21}
                color={pathname === '/profile' ? '#d3f56b' : '#d4d4d8'}
              />
              <p>overview</p>
            </LinksButtons>
            <DropDown title={'list'} icon={<BiListUl size={21} />} />
          </AdminSideBarContent>
          {/* footer */}
          <AdminSideBarFooter>
            <LinksButtons onClick={() => push('/profile/setting')}>
              <BiCog
                size={21}
                color={pathname.includes('setting') ? '#d3f56b' : '#d4d4d8'}
              />
              <p>setting</p>
            </LinksButtons>
            <LinksButtons
              onClick={() => {
                logout()
              }}>
              <BiExit size={21} />
              <p>log out</p>
            </LinksButtons>
          </AdminSideBarFooter>
        </AdminSideBar>
        {/* content */}
        <AdminContent>
          <Navbar></Navbar>
          <Content>{children}</Content>
        </AdminContent>
      </AdminContainer>
    )
}

type ComponentProp = {
  children: ReactNode
}

export default AdminLayout
