import { configureStore } from '@reduxjs/toolkit';
import gameOrderReducer from './gameOrder';
import authReducer from './auth';



const store = configureStore({
    reducer: {
        // gameOrder: gameOrderReducer,
        auth: authReducer,
    }
})


export default store;