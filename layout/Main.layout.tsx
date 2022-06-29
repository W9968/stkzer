import { FC, ReactNode } from 'react'
import { Container, Content, Navbar } from 'theme/app.element'

import Header from 'modules/header/Header'

const MainLayout: FC<ComponentProp> = function ({ children }) {
  return (
    <Container>
      <Navbar>
        <Header />
      </Navbar>
      <Content>{children}</Content>
    </Container>
  )
}

type ComponentProp = {
  children: ReactNode
}

export default MainLayout
