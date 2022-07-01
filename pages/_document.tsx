import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { Fragment } from 'react'

import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  // SSR with stylesheet rehydration
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <Fragment key={'initial-render'}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <meta
            name='google-site-verification'
            content='LORCoQ2cSbPFl7Pd2rRaTjjBDVtF8FJ9Xwoma7xgMPc'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
