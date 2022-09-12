import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TourModel } from "../../Model/TourModel";

export interface TourListState {
  tourList: TourModel[];
}

const initialState: TourListState = {
  tourList: [],
};

export const TourListSlice = createSlice({
  name: "tourList",
  initialState,
  reducers: {
    setTourList: (state, action: PayloadAction<TourModel[]>) => {
      state.tourList = action.payload;
    },
    addTourToStore: (state, action: PayloadAction<TourModel>) => {
      state.tourList.push(action.payload);
    },
    updateTourInStore: (state, action: PayloadAction<TourModel>) => {
      const indexToUpdate = state.tourList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexToUpdate >= 0) state.tourList[indexToUpdate] = action.payload;
    },
    removeTour: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.tourList.findIndex(
        (t) => t.id === action.payload
      );
      if (indexToDelete >= 0) state.tourList.splice(indexToDelete, 1);
    },
  },
});

export const { setTourList, addTourToStore, updateTourInStore, removeTour } =
  TourListSlice.actions;

export const getTours = (state: any) => {
  state.TourListState.tourList();
};

export default TourListSlice.reducer;
