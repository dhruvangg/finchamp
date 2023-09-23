import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export default function UserProvider({ children }) {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const value = { language, setLanguage }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}