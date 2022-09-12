import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { Role } from "../../Model/UserModel";

export interface TokenValues {
  exp: number;
  iat: number;
  email: string;
  firstName: string;
  lastName?: string;
  privileges?: string;
  role: Role;
  sub: number;
}

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  privileges?: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: "",
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  role: Role.EMPLOYEE,
  privileges: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      //save token to local storage
      localStorage.setItem("token", action.payload);
      if (state.token) {
        const decodedToken: TokenValues = jwtDecode(state.token);
        state.id = decodedToken.sub;
        state.email = decodedToken.email;
        state.firstName = decodedToken.firstName;
        state.lastName = decodedToken.lastName;
        state.privileges = decodedToken.privileges;
        state.role = decodedToken.role;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("token", "");
      //this method is used by the root reducer to clear the app state when logging out
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
