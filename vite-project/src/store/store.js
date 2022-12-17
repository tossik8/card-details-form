import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import sessionStorage from "redux-persist/es/storage/session";
import formSlice from "./formSlice";


const persistConfig = {
    key:"root",
    storage: sessionStorage
}

const rootReducer = combineReducers({
    formReducer: formSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware:[thunk]
});

export {store};

export const persistor = persistStore(store);
