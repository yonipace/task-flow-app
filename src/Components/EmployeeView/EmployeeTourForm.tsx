import { AlertColor, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAlert from "../../Hooks/useAlert";
import useFetch from "../../Hooks/useFetch";
import useMidEmployeeService from "../../ServiceHooks/useTourService";
import { TourModel } from "../../Model/TourModel";
import { addTourToStore } from "../../Redux/Reducers/tourListSlice";
import { RootState } from "../../Redux/Store/store";
import appConfig from "../../Util/Config";

const EmployeeTourForm = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const authState = state.auth;
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { error, loading, response, sendRequest: sendNewTour } = useFetch();
  const midEmployeeService = useMidEmployeeService();
  const { setAlert } = useAlert();
  const doAddTour = (e: TourModel) => {
    dispatch(addTourToStore(e));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // const currentEmployee = {
    //   id: authState.id,
    //   name: authState.name,
    //   role: authState.role,
    // };

    const tour: TourModel = {
      name,
      date,
      description,
      user: null,
      id: 0,
      stations: [],
    };
    try {
      midEmployeeService.addTour(tour);

      setAlert("הסיור נוצר בהצלחה", "success");
    } catch (e) {
      setAlert(e.toString(), "error");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 2, px: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* name - string */}
          <TextField
            fullWidth
            label="שם"
            value={name}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          {/*date*/}
          <TextField
            label="תאריך"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={date}
            onChange={(e: any) => {
              setDate(e.target.value);
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          {/*date*/}
          <TextField
            multiline
            maxRows={4}
            label="תיאור"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e: any) => {
              setDescription(e.target.value);
            }}
          ></TextField>
        </Grid>
      </Grid>
      {/* submit */}
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        יצירת סיור חדש
      </Button>
    </Box>
  );
};

export default EmployeeTourForm;
