import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiAddress } from '../api';
// import {LoginAction} from './authActions';


const initialState = {
    loggedUser: null,
    users: [],
    isLoggedIn: false,
};



// export const LoginAction = createAsyncThunk('auth/Login', async (phone, pass) => {
//     const loginDetails = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({phoneNum: phone, password: pass})
//     };
//     try {
//         const response = await fetch(`${apiAddress}/api/GetCourt/user/login`, loginDetails);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (e) {
//         return e;
//     }  
// })


const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        AddNewUser(state, action) {

        },
        LogIn(state, action) {
          
            console.log(action.payload)
            state.loggedUser = action.payload;
            state.isLoggedIn = true;
    
        },
        UpdateUser() {

        },
        DeleteUser() {

        }

    },

})

 export const { AddNewUser, LogIn } = authSlice.actions;

export default authSlice.reducer;