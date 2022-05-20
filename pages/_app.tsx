import type { AppProps } from 'next/app'

import { colors } from 'types/styled.d'
import { MainStyle } from 'styles/@main'
import { ThemeProvider } from 'styled-components'

import Layout from 'layout/Layout'
import DataProvider from 'context/DataProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <MainStyle />
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </ThemeProvider>
  )
}

export default MyApp
