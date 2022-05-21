import { list } from 'types/data'
import { Grid, NavBar } from 'components/export'
import { TiDocumentAdd } from 'react-icons/ti'
import { AnimatePresence } from 'framer-motion'
import { FC, ReactElement, useState } from 'react'

import {
  AddingSection,
  Masonry,
  Preview,
  SideNav,
  Wrapper,
} from 'styles/layout.module'
import { __store } from 'context/DataProvider'

const Layout: FC<prop> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false)

  const { lists } = __store()

  return (
    <Wrapper>
      <SideNav state={active} onClick={() => setActive(!active)}>
        <TiDocumentAdd size={26} />
      </SideNav>
      <AnimatePresence>
        {active && (
          <AddingSection
            initial={{ width: 0 }}
            animate={{ width: 'calc(100vw /2)' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}></AddingSection>
        )}
      </AnimatePresence>
      <Preview>
        <NavBar />
        {children}
      </Preview>
      <Masonry>
        {lists.map((elem: list, index: number) => {
          return (
            <Grid
              key={index}
              title={elem.name}
              summary={elem.summary}
              image={elem.image}
            />
          )
        })}
      </Masonry>
    </Wrapper>
  )
}

export default Layout

type prop = {
  children: ReactElement
}
