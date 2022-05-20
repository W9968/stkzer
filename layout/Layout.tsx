import { Header } from 'components/export'
import { FC, ReactElement } from 'react'
import { Content, SideBar, Wrapper } from 'styles/layout.module'

const Layout: FC<prop> = ({ children }) => {
  return (
    <Wrapper>
      <SideBar>
        <Header />
      </SideBar>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout

type prop = {
  children: ReactElement
}
