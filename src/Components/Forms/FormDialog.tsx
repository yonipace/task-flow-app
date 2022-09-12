import { Dialog, DialogContent, Fab } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useState } from "react";
import StationForm from "./StationForm";
import TourForm from "./TourForm";

const FormDialog = (props: any) => {
  const [open, setOpen] = useState(false);

  const fabStyle = {
    position: "fixed",
    bottom: 32,
    left: 32,
  };

  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>{props.form}</DialogContent>
      </Dialog>
      <Fab color="secondary" onClick={() => setOpen(true)} sx={fabStyle}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default FormDialog;
