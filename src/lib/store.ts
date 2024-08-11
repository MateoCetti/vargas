// store.js
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage'; // Choose your storage engine
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import cartReducer from './features/storeSlice'

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["productsState"],
  timeout: 10
}

const rootReducer = combineReducers({
  productsState: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);



// Infer the type of makeStore
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']