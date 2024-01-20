import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import stockReducer from "../features/stockSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //? Local Storage
// import storageSession from 'redux-persist/lib/storage/session' //? for session Storage (optiona)
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage, 
  }
   
  const persistedReducer = persistReducer(persistConfig, authReducer) 
 

const store = configureStore({
    reducer:{
        auth:persistedReducer,
        stock:stockReducer,
    },
    devTools:process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export  const persistor = persistStore(store)

export default store;

