import { Container } from "@mui/material";
import { TourModel } from "../../Model/TourModel";
import { Role } from "../../Model/UserModel";
import FormDialog from "../Forms/FormDialog";
import TourForm from "../Forms/TourForm";
import TourCard from "./TourCard";
import EmployeeTourForm from "./EmployeeTourForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { setTourList } from "../../Redux/Reducers/tourListSlice";
import appConfig from "../../Util/Config";
import useProductService from "../../ServiceHooks/useProductService";
import useTourService from "../../ServiceHooks/useTourService";

const EmployeeMainView = () => {
  const state = useSelector((state: RootState) => state);
  const tours = state.tourList.tourList;
  const { getAllProducts } = useProductService();
  const { getAllTours } = useTourService();

  useEffect(() => {
    //update tour list
    getAllTours();
    // //initialize product list for adding stations later
    // getAllProducts();
  }, []);

  return (
    <Container>
      {tours.map((tour) => (
        <TourCard {...tour} key={tour.id} />
      ))}
      <FormDialog form={<EmployeeTourForm />} />
    </Container>
  );
};

export default EmployeeMainView;
