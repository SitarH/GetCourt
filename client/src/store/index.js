import { configureStore } from '@reduxjs/toolkit';
import gameOrderReducer from './gameOrder';

const store = configureStore({
    reducer: {
        gameOrder: gameOrderReducer,
    }
})


export default store;