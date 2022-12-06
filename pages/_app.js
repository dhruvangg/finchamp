import '../styles/globals.css'

import { Nunito_Sans } from '@next/font/google'

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }) {
  return <>
    <style jsx global>{`
    * {
      font-family: ${nunitoSans.style.fontFamily};
    }
  `}</style>
    <Component {...pageProps} />
  </>
}

export default MyApp
