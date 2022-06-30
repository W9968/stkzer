import type { AppProps } from 'next/app'

import MainLayout from 'layout/Main.layout'
import AuthProvider from 'context/AuthProvider'

import { ThemeProvider } from 'styled-components'
import { theme, DesignTheme } from 'design/@theme'
import { useRouter } from 'next/router'
import AdminLayout from 'layout/Admin.layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <DesignTheme />
      <AuthProvider>
        {!pathname.includes('profile') ? (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        ) : (
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        )}
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
