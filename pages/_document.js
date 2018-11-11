import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html style={{backgroundColor:'#e4e5e6'}}>
        <Head>
          
          <link rel='stylesheet' href='/static/css/bootstrap.min.css' />
          <link rel='stylesheet' href='/static/css/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
