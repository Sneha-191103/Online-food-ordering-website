import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserSlice from "./userslice";
import AdminSlice from "./adminslice";
import cartSlice from "./cartSlice"; 

const persistConfig = {
  key: 'root',
  storage
};

// user: persistReducer(persistConfig, UserSlice.reducer),
// admin: persistReducer(persistConfig, AdminSlice.reducer),
const rootReducer = {
  cart: persistReducer(persistConfig, cartSlice),
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store, null, (error) => {
  console.log(error);
});

export { store, persistor };
