import { Card, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { StationModel } from "../../Model/StationModel";
import { RootState } from "../../Redux/Store/store";
import StationCard from "./StationCard";

const StationList = () => {
  const state = useSelector((state: RootState) => state);
  const stationList = state.stationList.stationList;
  return (
    <>
      {stationList.length === 0 && <strong>לא נמצאו תחנות </strong>}
      {stationList.length > 0 &&
        stationList.map((station) => (
          <StationCard {...station} key={station.id} />
        ))}
    </>
  );
};

export default StationList;

const dummyStations: StationModel[] = [
  {
    id: 1,
    quantity: 15,
    product: {
      id: 1,
      name: "באשר",
      price: 10,
    },
  },
  {
    id: 2,
    quantity: 7,
    product: {
      id: 2,
      name: "פיתה",
      price: 5,
    },
  },
  {
    id: 3,
    quantity: 10,
    product: {
      id: 3,
      name: "עראיס",
      price: 13,
    },
  },
  {
    id: 4,
    quantity: 17,
    product: {
      id: 4,
      name: "מיץ",
      price: 4,
    },
  },
];
