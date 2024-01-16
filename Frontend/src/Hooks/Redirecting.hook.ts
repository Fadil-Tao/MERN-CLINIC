import { useNavigate } from "react-router-dom"

export const useRedirecting =(link:string)=> {
    const navigate = useNavigate()
    return () => navigate(link)
}
