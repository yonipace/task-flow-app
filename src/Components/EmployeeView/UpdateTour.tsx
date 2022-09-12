import {
  Dialog,
  DialogContent,
  Box,
  Button,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useDispatch } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import { TourModel } from "../../Model/TourModel";
import { updateTourInStore } from "../../Redux/Reducers/tourListSlice";
import appConfig from "../../Util/Config";
import { useState } from "react";

const UpdateTour = (props: TourModel) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.name);
  const [date, setDate] = useState(props.date);
  const [description, setDescription] = useState(props.description);
  const { error, loading, response, sendRequest: sendUpdate } = useFetch();
  const dispatch = useDispatch();
  const doUpdate = (e: TourModel) => {
    dispatch(updateTourInStore(e));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const tour: TourModel = {
      name,
      date,
      description,
      user: props.user,
      id: props.id,
      stations: props.stations,
    };

    sendUpdate(
      {
        body: tour,
        url: appConfig.tourUrl,
        method: "PUT",
      },
      doUpdate
    );
  };
  const updateForm = (
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
        עדכון פרטי סיור
      </Button>
    </Box>
  );

  return (
    <>
      <IconButton size="small" onClick={() => setOpen(true)}>
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>{updateForm}</DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateTour;
