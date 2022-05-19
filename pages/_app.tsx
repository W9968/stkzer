import type { AppProps } from 'next/app'

import { MainStyle } from 'styles/@main'
import { ThemeProvider } from 'styled-components'
import { colors } from 'types/styled.d'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <MainStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
