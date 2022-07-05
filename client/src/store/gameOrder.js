import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
        date:'',
        time:'',
        type:'',
        players:'',
        court:'',
        location:''
    
};

const gameOrderSlice = createSlice({
    name: 'gameOrder',
    initialState,
    reducers: {
        InsertIntoValue(initialState, action){
            // insert values to state to create game order
            const value = action.payload.value;
            const field = action.payload.field;
            
            initialState[field] = value;
        },
        AddNewGame(){
            //add game to user's game list
            // add game to gameOrder collection in db- for admin

        },
        UpdateGameOrder(){

        },
        DeleteGameOrder(){

        }


    }
})
console.log(gameOrderSlice)
export const gameOrderActions = gameOrderSlice.actions;

export default gameOrderSlice.reducer;