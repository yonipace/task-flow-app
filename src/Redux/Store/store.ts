import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Reducers/authSlice";
import userListReducer from "../Reducers/userListSlice";
import tourListReducer from "../Reducers/tourListSlice";
import stationListReducer from "../Reducers/stationListSlice";
import productListReducer from "../Reducers/productListSlice";
import alertReducer from "../Reducers/alertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userList: userListReducer,
    tourList: tourListReducer,
    stationList: stationListReducer,
    productList: productListReducer,
    alertState: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
