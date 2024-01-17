type userDataType = {
    _email: string;
    _password: string;
};

export const HandleLogin = async (userData: userDataType) => {
    const response = await fetch('http://localhost:8000/api/users/login', {
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
