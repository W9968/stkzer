import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactElement } from 'react'

import { Logo } from 'components/export'
import { HomeButton } from 'styles/button.module'
import { Wrapper, Container, Column } from 'styles/wrapper.module'

const WrapperLayout: FC<prop> = ({ children }) => {
  const route = useRouter()

  return (
    <Wrapper>
      <Container>
        <Column>
          <Logo />
          {route.pathname !== '/' ? (
            <Link href={'/'} passHref>
              <HomeButton>home</HomeButton>
            </Link>
          ) : (
            <Link href={'/auth'} passHref>
              <HomeButton>sign in</HomeButton>
            </Link>
          )}
        </Column>
        <Column>{children}</Column>
      </Container>
    </Wrapper>
  )
}

export default WrapperLayout

type prop = {
  children: ReactElement
}
