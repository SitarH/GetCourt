import { createSlice } from '@reduxjs/toolkit';
import { apiAddress } from '../api';

const initialState = {
    game: null
};

const gameOrderSlice = createSlice({
    name: 'gameOrder',
    initialState,
    reducers: {
        AddNewGame(initialState, action) {
            console.log(action.payload)
            initialState.game = action.payload;
        },
        UpdateGameOrder() {

        },
        DeleteGameOrder() {

        }

    }
})

export const { AddNewGame } = gameOrderSlice.actions;


export default gameOrderSlice.reducer;