
export type userDataType= {
    _name:string,
    _email:string,
    _phone:number,
    _birth:string,
    _password:string,
}

const baseUrl = import.meta.env.VITE_BASE_URL_KEY
const Register = async(userData:userDataType) => {
   const response = await fetch (`${baseUrl}users/register`, {
    method:'POST',
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify(userData)
   })

   if(response.ok){
        console.log("Succesfully Registering data")
        return true;
   }else{
        console.log("Failed registering Data")
        return false
   }
}


export default Register