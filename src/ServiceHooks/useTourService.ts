import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { TourModel } from "../Model/TourModel";

import {
  addTourToStore,
  removeTour,
  setTourList,
  updateTourInStore,
} from "../Redux/Reducers/tourListSlice";
import { RootState } from "../Redux/Store/store";
import appConfig from "../Util/Config";

const useTourService = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const tourList = state.tourList.tourList;
  const tourUrl = appConfig.tourUrl;

  const getAllTours = async () => {
    if (tourList.length === 0) {
      const response = await axios.get<TourModel[]>(tourUrl);
      const tours = response.data;

      //this is checked to avoid infinite calls to the server when the array is empty
      if (tours.length > 0) {
        dispatch(setTourList(tours));
        return tours;
      }
    }
    return tourList;
  };

  const getOneTour = (id: number) => {
    return tourList.find((t) => t.id === id);
  };

  const addTour = async (tour: TourModel) => {
    const response = await axios.post(tourUrl, tour);
    const addedTour = response.data;
    dispatch(addTourToStore(addedTour));
  };
  const updateTour = async (tour: TourModel) => {
    const response = await axios.put(tourUrl, tour);
    const updatedTour = response.data;
    dispatch(updateTourInStore(updatedTour));
  };
  const deleteTour = async (id: number) => {
    await axios.delete(tourUrl + id);
    dispatch(removeTour(id));
  };

  return {
    getAllTours,
    getOneTour,
    addTour,
    updateTour,
    deleteTour,
  };
};

export default useTourService;
