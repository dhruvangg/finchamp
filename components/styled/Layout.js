import { IntlProvider } from 'react-intl'
import { Header, Footer } from "components/common";
import { useUserContext } from "components/context/UserContext";
import { useEffect, useState } from 'react';

export function Layout({ children }) {
    const { language } = useUserContext();
    const [messages, setMessages] = useState()

    useEffect(() => {
        import(`config/labels/${language}-labels.json`).then(data => {
            console.log(data)
            setMessages(data)
        }).catch(error => {
            console.error(error)
        })
    }, [language])

    return (
        <IntlProvider messages={messages} locale="en" defaultLocale="en">
            <div className="body-wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </IntlProvider>
    )
}