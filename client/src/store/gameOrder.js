import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
        date:'',
        time:'',
        location:'',
        court:'',
        type:'',
        players:[],
       
};

const gameOrderSlice = createSlice({
    name: 'gameOrder',
    initialState,
    reducers: {
        InsertIntoValue(initialState, action){
            console.log(action.payload.value)
            // insert values to state to create game order
            const value = action.payload.value;
            const field = action.payload.field;
            
            initialState[field] = value;
        },
        AddNewGame(initialState){
            const add = async () =>{
            const game = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(initialState)
            };
            try {
                const response = await fetch(`http://localhost:5008/api/GetCourt/user/addGame/62d9a554b9d76d0cacec7776`, game);
                const data = await response.json();
                return data;
            } catch (e) {
                return e;
            }  
        }

        add()

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