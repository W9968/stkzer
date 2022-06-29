import { FC, ReactNode } from 'react'
import { Container } from 'theme/app.element'

import Header from 'modules/header/Header'

const MainLayout: FC<ComponentProp> = function ({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

type ComponentProp = {
  children: ReactNode
}

export default MainLayout
