import type { AppProps } from 'next/app'

import { colors } from 'types/styled.d'
import { MainStyle } from 'styles/@main'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <MainStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
