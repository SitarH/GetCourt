import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
        name: '',
        email: '',
        _id: '',
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        isLoggedIn: false,
       
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        AddNewUser(initialState, action){

            fetch('http://localhost:5008/api/GetCourt/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: action.payload.enteredEmail,
                    firstName: action.payload.enteredFirstName,
                    lastName: action.payload.enteredLastName,
                    password: action.payload.enteredPassword,
                    dateOfBirth: action.payload.enteredBirthDate,
                    friendsList: [],
                    gamesList: [],
                    ordersList: [],
                    level: action.payload.enteredLevel
                })
            })
        },
        LogIn(initialState, action){

            const logIn = async () =>{
            try {
                const response = await fetch('http://localhost:5008/api/GetCourt/user');
                if (response.status === 200){
                    const data = await response.json();
                    const isExist = data.find(user => user.email ===action.payload.enteredEmail && user.password === action.payload.enteredPassword);
                    return isExist;
                }
            } catch (error) {
                console.log(error)
            }
        }
        const isLogged = logIn();
        console.log(isLogged)
        return isLogged;

        },
        UpdateUser(){

        },
        DeleteUser(){

        }


    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;