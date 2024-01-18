type AppointmentType = {
    _doctor:string,
    _appDate:string,
    _appTime:String,
}
const baseUrl = import.meta.env.VITE_BASE_URL_KEY
const token = localStorage.getItem('token') || '';
const name = localStorage.getItem('_id')

export const handleAppointment = async (appointmentData: AppointmentType) => {

    try {
        const response = await fetch(`${baseUrl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
            console.log('Successfully add the appointment');
            return true;
        } else {
            console.log(appointmentData);
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
};


export const getAppointmentData = async() => {
    try {
        const response = await fetch(`${baseUrl}getByName/${name}`, {
            method:'GET',
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(response.ok){
            const data = response.json();
            console.log(data);
            return data 
        }else{
            throw new Error("Failed Fetching Data")
        }
    } catch (error) {
        console.log(error)
    }
}

export const deleteAppointmentData = async (id:string) => {
    try {
        const response = await fetch(`${baseUrl}delete/${id}`, {
            method:'DELETE',
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        if(response.ok){
            const data = response.json()
            console.log(data)
            return true;
        }
    } catch (error) {
        console.log(error)
    }
}