type userDataType = {
    _email: string;
    _password: string;
};

const baseUrl = import.meta.env.VITE_API_KEY


export const HandleLogin = async (userData: userDataType) => {
    console.log(baseUrl)
    const response = await fetch(`${baseUrl}users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (response.ok) {
        const {
            data: { token, _id },
        } = await response.json();
        localStorage.setItem('_id', _id);
        localStorage.setItem('token', token);
        return true;
    } else {
        throw new Error('Email or Password might me wrong , also check your network');
    }
};
