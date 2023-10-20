import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl'
import en from '@/config/content/en.json'
import gu from '@/config/content/gu.json'
import { Header, Footer } from '@/components/common';
import { Quicksand } from 'next/font/google'

const font = Quicksand({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export function Layout({ children }) {
    const { locale } = useRouter()
    const messages = locale === 'en' ? en : gu

    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale="en">
            <div className={`body-wrapper ${font.className}`}>
                <Header />
                {children}
                <Footer />
            </div>
        </IntlProvider>
    )
}