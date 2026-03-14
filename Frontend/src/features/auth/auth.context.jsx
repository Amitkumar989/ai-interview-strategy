import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";
import { clearAuthToken } from "./services/token.storage";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            } catch (err) {
                clearAuthToken()
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    }, [])


    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading,error,setError}} >
            {children}
        </AuthContext.Provider>
    )

    
}
