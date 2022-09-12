import { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TourModel } from "../../Model/TourModel";
import useFetch from "../../Hooks/useFetch";
import { useDispatch } from "react-redux";
import appConfig from "../../Util/Config";
import { removeTour } from "../../Redux/Reducers/tourListSlice";

const DeleteTour = (props: TourModel) => {
  const [open, setOpen] = useState(false);
  const alertText = "האם אתה בטוח שאתה רוצה למחוק את הסיור הזה?";
  const { error, loading, response, sendRequest: sendDelete } = useFetch();
  const dispatch = useDispatch();
  const doDelete = (e: any) => {
    dispatch(removeTour(e));
  };
  const handleDelete = () => {
    sendDelete(
      {
        url: appConfig.tourUrl + "?tourId=" + props.id,
        method: "DELETE",
      },
      doDelete
    );
  };

  const deleteAlert = (
    <Alert severity="warning" onClose={() => setOpen(false)}>
      <AlertTitle>אזהרה</AlertTitle>
      <Typography>{alertText}</Typography>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
        my={2}
      >
        <Button variant="outlined" onClick={() => setOpen(false)}>
          לא
        </Button>
        <Button variant="contained" onClick={handleDelete}>
          כן
        </Button>
      </Stack>
    </Alert>
  );

  return (
    <>
      <IconButton size="small" onClick={() => setOpen(true)}>
        <DeleteOutlinedIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        {deleteAlert}
      </Dialog>
    </>
  );
};

export default DeleteTour;
