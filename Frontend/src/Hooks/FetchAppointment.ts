import { useEffect, useState } from "react"
import { getAppointmentData } from "../Services/Appointment"

type AppType = {
    _id:string,
    _doctor:string,
    _appDate:string,
    _appTime:string,
    _bookDate:string,
    _bookTime:string,
    _name:string,
}

export const useFetchAppointment = () => {
    const [data,setData] = useState<AppType[]>([])
    const [isLoading , setIsLoading] = useState<boolean>(true)
    useEffect(()=> {
        getAppointmentData().then((data) => {
            console.log(data)
            const userData = data.data
            setData(userData)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    },[])
    return {data, setData , isLoading}
}