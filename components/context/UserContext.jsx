import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function useUserContext() {
    return useContext(UserContext)
}

export default function UserProvider({ children }) {
    const [language, setLanguage] = useState('en')
    const value = { language, setLanguage }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}