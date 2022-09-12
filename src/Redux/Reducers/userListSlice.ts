import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../../Model/UserModel";

export interface UserListState {
  userList: UserModel[];
}

const initialState: UserListState = {
  userList: [],
};

export const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<UserModel[]>) => {
      state.userList = action.payload;
      // console.log(state.userList);
    },
    addUserToStore: (state, action: PayloadAction<UserModel>) => {
      state.userList.push(action.payload);
    },
    updateUserInStore: (state, action: PayloadAction<UserModel>) => {
      const indexToUpdate = state.userList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexToUpdate >= 0) state.userList[indexToUpdate] = action.payload;
    },
    removeUser: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.userList.findIndex(
        (t) => t.id === action.payload
      );
      if (indexToDelete >= 0) state.userList.splice(indexToDelete, 1);
    },
  },
});

export const { setUserList, addUserToStore, updateUserInStore, removeUser } =
  userListSlice.actions;

export const getUsers = (state: any) => {
  state.userListState.userList();
};

export default userListSlice.reducer;
