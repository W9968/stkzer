import type { AppProps } from 'next/app'

import { theme, DesignTheme } from 'design/@theme'
import { ThemeProvider } from 'styled-components'
import MainLayout from 'layout/Main.layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DesignTheme />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

export default MyApp
