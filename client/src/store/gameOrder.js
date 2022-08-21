import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    game: null

};

const gameOrderSlice = createSlice({
    name: 'gameOrder',
    initialState,
    reducers: {
        AddNewGame(initialState, action) {

            initialState = action.payload.gameOrder;

            const add = async () => {
                const game = {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(initialState)
                };
                try {
                    const response = await fetch(`http://localhost:5008/api/GetCourt/user/addGame/${action.payload.id}`, game);
                    const data = await response.json();
                    return data;
                } catch (e) {
                    return e;
                }
            }

            add()

        },
        UpdateGameOrder() {

        },
        DeleteGameOrder() {

        }


    }
})

export const gameOrderActions = gameOrderSlice.actions;

export default gameOrderSlice.reducer;