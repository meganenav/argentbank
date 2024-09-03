import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../../src/redux/userSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"

//Persistence configuration
const persistConfig = {
  key: "root",
  storage,
}

//Allows to combine reducers, here we can use "user" instead of userReducer
const rootReducer = combineReducers({
  user: userReducer,
})

//Creates a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Creates and configure the store
export default function createStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  //Allows to persist the store
  const persistor = persistStore(store)

  return { store, persistor }
}