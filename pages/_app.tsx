import type { AppProps } from 'next/app'

import { theme, DesignTheme } from 'design/@theme'
import { ThemeProvider } from 'styled-components'
import MainLayout from 'layout/Main.layout'
import AuthProvider from 'context/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DesignTheme />
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
