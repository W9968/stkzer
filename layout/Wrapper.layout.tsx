import { FC, ReactElement } from 'react'
import { Wrapper } from 'styles/wrapper.module'

const WrapperLayout: FC<prop> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default WrapperLayout

type prop = {
  children: ReactElement
}
