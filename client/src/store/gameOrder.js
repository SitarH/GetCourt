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
        InsertIntoValue(state, action){
            // const field = action.field;
            const value = action.payload.value;
            const field = action.payload.field;
            console.log(value);
            console.log(field);
            state.action.payload.field = value;
            console.log(state.gameOrder.time)
        },
        AddNewGame(){

        },
        UpdateGameOrder(){

        },
        DeleteGameOrder(){

        }


    }
})

export const gameOrderActions = gameOrderSlice.actions;

export default gameOrderSlice.reducer