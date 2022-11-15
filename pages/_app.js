import '../styles/globals.css'

import { Open_Sans } from '@next/font/google'

const OpenSans = Open_Sans()

function MyApp({ Component, pageProps }) {
  return <>
    <style jsx global>{`
    * {
      font-family: ${OpenSans.style.fontFamily};
    }
  `}</style>
    <Component {...pageProps} />
  </>
}

export default MyApp
