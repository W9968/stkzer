import { useRouter } from 'next/router'
import { Header } from 'components/export'
import { FC, ReactElement, useEffect, useState } from 'react'

import {
  Content,
  ContentBody,
  ContentHeader,
  SideBar,
  Wrapper,
} from 'styles/layout.module'

const Layout: FC<prop> = ({ children }) => {
  const router = useRouter()
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    if (router.pathname === '/') return setPath('Home')
    else setPath(router.pathname.slice(1))
  }, [router])

  return (
    <Wrapper>
      <SideBar>
        <Header />
      </SideBar>
      <Content>
        <ContentHeader>
          <p>{path}</p>
        </ContentHeader>
        <ContentBody>{children}</ContentBody>
      </Content>
    </Wrapper>
  )
}

export default Layout

type prop = {
  children: ReactElement
}
