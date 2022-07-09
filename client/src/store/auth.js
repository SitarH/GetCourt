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
            // insert values to state to create game order
            const value = action.payload.value;
            const field = action.payload.field;
            
            initialState[field] = value;
        },
        LogIn(){
            //add game to user's game list
            // add game to gameOrder collection in db- for admin

        },
        UpdateGameOrder(){

        },
        DeleteGameOrder(){

        }


    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;