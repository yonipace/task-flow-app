import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StationModel } from "../../Model/StationModel";

export interface StationListState {
  stationList: StationModel[];
}

const initialState: StationListState = {
  stationList: [],
};

export const stationListSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStationList: (state, action: PayloadAction<StationModel[]>) => {
      state.stationList = action.payload;
      // console.log(state.stationList);
    },
    addStationToStore: (state, action: PayloadAction<StationModel>) => {
      state.stationList.push(action.payload);
    },
    updateStationInStore: (state, action: PayloadAction<StationModel>) => {
      const indexToUpdate = state.stationList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexToUpdate >= 0) state.stationList[indexToUpdate] = action.payload;
    },
    removeStation: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.stationList.findIndex(
        (t) => t.id === action.payload
      );
      if (indexToDelete >= 0) state.stationList.splice(indexToDelete, 1);
    },
  },
});

export const {
  setStationList,
  addStationToStore,
  updateStationInStore,
  removeStation,
} = stationListSlice.actions;

export const getStations = (state: any) => {
  state.stationListState.stationList();
};

export default stationListSlice.reducer;
