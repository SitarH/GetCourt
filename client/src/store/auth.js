import { createSlice } from '@reduxjs/toolkit';
import {fetchUserData} from './authActions';

const initialState = {
    loggedUser : null,
    registerStatus: '',
    registerError: '',
    loginStatus: '',
    loginError: '',
    isLoggedIn: false,

};

const fetchData = async (phone, pass) => {
    console.log(phone, pass);
        const loginDetails = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({phoneNum: phone, password: pass})
        };
        try {
            const response = await fetch(`http://localhost:5008/api/GetCourt/user/login`, loginDetails);
            const data = await response.json();
            return data;
        } catch (e) {
            return e;
        }  
    
}

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        AddNewUser(initialState, action) {

        },
        LogIn(initialState, action) {
            // const user =  fetchData(action.payload.enteredEmail, action.payload.enteredPassword);
            console.log(action.payload)
             initialState.loggedUser = action.payload;
            // const user = users.find(user => user.email === action.payload.enteredEmail &&
            //     user.password === action.payload.enteredPassword);
            // if(user)
            //     initialState.loggedUser = user;
            // else
            //     alert('User not found please try again');
        },
        UpdateUser() {

        },
        DeleteUser() {

        }


    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;