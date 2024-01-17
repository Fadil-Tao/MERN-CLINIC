export interface userDataInterFace {
    _id:string,
    _name:string,
    _email:string,
    _phone:number,
    _birth:string,
    _password:string,
}

export const FetchProfile = async() => {
    const baseUrl:string = 'http://localhost:8000/api/users/getById'
    const { token = '', _id = '' } = localStorage;
    try {
        const response = await fetch(`${baseUrl}/${_id}`, {
            method:'GET',
            headers: {
                Authorization : `Bearer ${token}`
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            throw new Error
        }
    } catch (error) {
        console.log(error)
    }
}

