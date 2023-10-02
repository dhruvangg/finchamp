import '../styles/globals.css'

import { Nunito_Sans } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <main className={nunitoSans.className}>
          <Component {...pageProps} />
        </main>
    </PersistGate>
  </Provider>
}

export default MyApp
