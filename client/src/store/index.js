import { configureStore } from '@reduxjs/toolkit';
import gameOrderReducer from './gameOrder';
import authReducer from './auth';
import { getDefaultMiddleware } from '@reduxjs/toolkit'



const store = configureStore({
    reducer: {
        gameOrder: gameOrderReducer,
        auth: authReducer,
    }
})


export default store;