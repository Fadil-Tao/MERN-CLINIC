import { useState, useEffect } from 'react';
import { FetchProfile, userDataInterFace } from '../Services/Profile';

export const useFetchProfile = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const [userData, setUserData] = useState<userDataInterFace>();

    useEffect(() => {
        FetchProfile()
            .then((item) => {
                const data = item.data;
                setUserData(data);
                console.log(userData)
                setIsLoading(false)
            })
            .catch((err) => console.log(err));
    }, []);

    return {userData, isLoading}
};
