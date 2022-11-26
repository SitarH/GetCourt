import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiAdress } from '../api';

const initialState = {
    loggedUser: null,
    registerStatus: '',
    registerError: '',
    loginStatus: '',
    loginError: '',
    isLoggedIn: false,

};



// const fetchData = async (phone, pass) => {
//     console.log(phone, pass);
//         const loginDetails = {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({phoneNum: phone, password: pass})
//         };
//         try {
//             const response = await fetch(`http://localhost:5008/api/GetCourt/user/login`, loginDetails);
//             const data = await response.json();
//             return data;
//         } catch (e) {
//             return e;
//         }  

// }

export const Login = createAsyncThunk('auth/Login', async (phone, pass) => {
    const loginDetails = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({phoneNum: phone, password: pass})
    };
    try {
        const response = await fetch(`${apiAdress}/api/GetCourt/user/login`, loginDetails);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (e) {
        return e;
    }  
})

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        AddNewUser(initialState, action) {

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
    extraReducers(builder){ 
        builder.addCase(Login.pending, (state, action) => {
            state.loginStatus = 'loading';
        })
        .addCase(Login.fulfilled, (state, action) => {
             state.loginStatus = 'succeeded'
             state.isLoggedIn = true;

        })

    }
})

export const { AddNewUser, LogIn } = authSlice.actions;

export default authSlice.reducer;