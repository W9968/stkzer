import type { AppProps } from 'next/app'

import { colors } from 'types/styled.d'
import { MainStyle } from 'styles/@main'
import { ThemeProvider } from 'styled-components'

import Layout from 'layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <MainStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
