import { ReactNode, createContext, useContext, useState } from 'react';

type AuthProviderType = {
    children: ReactNode;
};

export const AuthContext = createContext<any>(null);

export const Authprovider = ({ children }: AuthProviderType) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token);

    const handleLogout = () => {
        setToken("")
        setIsLoggedIn(false)
        return localStorage.removeItem('token')
    }
    const statusLog=(condition:boolean)=>{
        setIsLoggedIn(condition)
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn,handleLogout,statusLog }}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthFunc = () => {
    const authContextFunc = useContext(AuthContext);
    return authContextFunc;
};
