import { ReactNode } from "react"
import { AuthFunc } from "../Store/auth"  
import { Navigate } from "react-router-dom";

type ProtectedRoutesType = {
    children : ReactNode;
} 

const ProtectedRoutes = ({children}:ProtectedRoutesType) => {
    const {isLoggedIn} = AuthFunc()
    
    if (!isLoggedIn) return <Navigate to={'/login'}/>
    return  children
}

export default ProtectedRoutes