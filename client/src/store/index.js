import { configureStore } from '@reduxjs/toolkit';
import gameOrderReducer from './gameOrder';
import authReducer from './auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';


const store = configureStore({
        reducer: {
            gameOrder: gameOrderReducer,
            auth: authReducer,
        },
    })
    
    
 export default store;

