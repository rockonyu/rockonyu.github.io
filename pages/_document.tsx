import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="dark:bg-accent-9 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
