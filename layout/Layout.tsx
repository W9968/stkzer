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

const Layout: FC<prop> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Wrapper>
      <SideNav state={active} onClick={() => setActive(!active)}>
        <TiDocumentAdd size={26} />
      </SideNav>
      <AnimatePresence>
        {active && (
          <AddingSection
            initial={{ width: 0 }}
            animate={{ width: 'calc(100vw /2.5)' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}></AddingSection>
        )}
      </AnimatePresence>
      <Preview></Preview>
      <Masonry>{children}</Masonry>
    </Wrapper>
  )
}

export default Layout

type prop = {
  children: ReactElement
}
