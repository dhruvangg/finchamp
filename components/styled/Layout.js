import { IntlProvider } from 'react-intl'
import { Header, Footer } from "components/common";
import en from 'config/content/en'
import gu from 'config/content/gu'
import { useRouter } from 'next/router';

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