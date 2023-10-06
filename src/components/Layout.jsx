import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl'
import en from '@/config/content/en.json'
import gu from '@/config/content/gu.json'
import { Header, Footer } from '@/components/common';

export function Layout({ children }) {
    const { locale } = useRouter()
    const messages = locale === 'en' ? en : gu

    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale="en">
            <div className="body-wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </IntlProvider>
    )
}