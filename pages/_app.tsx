import type { AppProps } from 'next/app'

import { colors } from 'types/styled.d'
import { MainStyle } from 'styles/@main'
import AuthContext from 'context/AuthContext'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <MainStyle />
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
    </ThemeProvider>
  )
}

export default MyApp
