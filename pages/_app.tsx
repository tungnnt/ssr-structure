import React from 'react'
import { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '@styles/global.scss'
import '../src/components/scss/main.scss'
import { Provider } from 'react-redux'
import store from '@redux/store'
import { appWithTranslation } from '@i18n'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp)
