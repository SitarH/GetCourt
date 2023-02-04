
import { apiAddress } from '../api';

export const fetchUserData = async (phone, pass) => {
console.log(phone, pass)
    const loginDetails = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNum: phone, password: pass })
    };
    try {
        const response = await fetch(`${apiAddress}/api/GetCourt/user/login`, loginDetails);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        return e;
    }

}

export const sendRegisterData = async (userDetails) => {

    const RegisterData = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNumber: userDetails.enteredPhoneNumber,
            firstName: userDetails.enteredFirstName,
            lastName: userDetails.enteredLastName,
            password: userDetails.enteredPassword,
            dateOfBirth: userDetails.enteredBirthDate,
            friendsList: [],
            gamesList: [],
            ordersList: [],
            level: userDetails.enteredLevel
        })
    };
    try {
        const response = await fetch(`${apiAddress}/api/GetCourt/user/add`, RegisterData);
        const data = await response.json();

        return data;
    } catch (e) {
        return e;
    }

}
