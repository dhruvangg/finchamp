import '../styles/globals.css'

import { Nunito_Sans } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from 'react-intl'
import labelsInEnglish from 'config/labels/en-labels'
import labelsInGujarati from 'config/labels/gu-labels'

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return <>
    <style jsx global>{`
    * {
      font-family: ${nunitoSans.style.fontFamily};
    }
  `}</style>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider messages={labelsInGujarati} locale="en" defaultLocale="en">
          <Component {...pageProps} />
        </IntlProvider>
      </PersistGate>
    </Provider>
  </>
}

export default MyApp
