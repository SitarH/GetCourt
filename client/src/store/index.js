import { configureStore } from '@reduxjs/toolkit';
import gameOrderReducer from './gameOrder';
import authReducer from './auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, compose } from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';


const store = configureStore({
        reducer: {
            // gameOrder: gameOrderReducer,
            auth: authReducer,
        },
    })
    
    
 export default store;

 
// const rootReducer = combineReducers({
    
//         // gameOrder: gameOrderReducer,
//         auth: authReducer,
    
// })
 
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//  export  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// import { applyMiddleware, combineReducers, compose } from 'redux'
// import { legacy_createStore as createStore} from 'redux'
// import thunk from 'redux-thunk'

// import { userReducer } from './user.reducer.js'

// const rootReducer = combineReducers({
//     userModule: userReducer,
   
//  })
 
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//  export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
