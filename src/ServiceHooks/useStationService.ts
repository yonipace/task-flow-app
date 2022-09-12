import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StationModel } from "../Model/StationModel";
import {
  addStationToStore,
  removeStation,
  setStationList,
  updateStationInStore,
} from "../Redux/Reducers/stationListSlice";

import { RootState } from "../Redux/Store/store";
import appConfig from "../Util/Config";

const useStationService = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const stationList = state.stationList.stationList;
  const stationUrl = appConfig.stationUrl;

  //station methods

  const getAllStations = async (tourId: number) => {
    if (stationList.length === 0) {
      const response = await axios.get<StationModel[]>(stationUrl, {
        params: { tourId },
      });
      const stations = response.data;
      //this is checked to avoid infinite calls to the server when the array is empty
      if (stations.length > 0) {
        dispatch(setStationList(stations));
        return stations;
      }
    }
    return stationList;
  };

  const getOneStation = (id: number) => {
    return stationList.find((t) => t.id === id);
  };

  const addStation = async (station: StationModel, tourId: number) => {
    const response = await axios.post(stationUrl, station, {
      params: { tourId },
    });
    const addedStation = response.data;
    dispatch(addStationToStore(addedStation));
  };
  const updateStation = async (station: StationModel) => {
    const response = await axios.put(stationUrl, station);
    const updatedStation = response.data;
    dispatch(updateStationInStore(updatedStation));
  };
  const deleteStation = async (id: number) => {
    await axios.delete(stationUrl + id);
    dispatch(removeStation(id));
  };

  return {
    getAllStations,
    getOneStation,
    addStation,
    updateStation,
    deleteStation,
  };
};

export default useStationService;
