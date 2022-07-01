import Logo from 'modules/logo/Logo'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'
import { __auth } from 'context/AuthProvider'

import { BsDot } from 'react-icons/bs'
import { BiExit, BiCog, BiStats, BiListUl } from 'react-icons/bi'

import {
  AdminContainer,
  AdminContent,
  AdminContentInsider,
  AdminNavBar,
  AdminSideBar,
  AdminSideBarContent,
  AdminSideBarFooter,
  AdminSideBarLogo,
  LinksButtons,
} from 'theme/app.element'

import DropDown from 'modules/button/DropDown'
import Profile from 'modules/button/Profile'

const AdminLayout: FC<ComponentProp> = function ({ children }) {
  const { push, pathname } = useRouter()
  const { isLoaggedIn, logout, currentUser } = __auth()

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
          <AdminNavBar>
            <div>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  marginBottom: 14,
                  letterSpacing: -0.25,
                  textTransform: 'capitalize',
                }}>
                Welcome Back, {currentUser.user_name?.split(' ')[0]}
              </p>
              <div
                style={{
                  display: 'flex',
                  color: '#626262',
                  alignItems: 'center',
                }}>
                <BsDot size={21} />
                <p>{pathname.slice(1)}</p>
              </div>
            </div>
            <div>
              <Profile />
              <p
                style={{
                  fontSize: 18,
                  textTransform: 'capitalize',
                  fontWeight: 600,
                }}>
                {currentUser.user_name}
              </p>
            </div>
          </AdminNavBar>
          <AdminContentInsider>{children}</AdminContentInsider>
        </AdminContent>
      </AdminContainer>
    )
}

type ComponentProp = {
  children: ReactNode
}

export default AdminLayout
