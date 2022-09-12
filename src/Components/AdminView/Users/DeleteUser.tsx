import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { UserModel } from "../../../Model/UserModel";
import useUserService from "../../../ServiceHooks/useUserService";
import useAlert from "../../../Hooks/useAlert";
import useExtractErrorMessage from "../../../Hooks/useExtractErrorMessage";

const DeleteUser = (props: UserModel) => {
  const [open, setOpen] = useState(false);
  const userService = useUserService();
  const extractError = useExtractErrorMessage();
  const alert = useAlert();
  const alertText = "האם אתה בטוח שאתה רוצה לבצע את הפעולה הזו?";

  const handleDelete = async () => {
    try {
      await userService.deleteUser(props.id);
      alert.setAlert("המשתמש נחמק בהצלחה", "success");
      setOpen(false);
    } catch (e: any) {
      if (e) {
        alert.setAlert(extractError.extractMessage(e), "error");
      } else {
        alert.setAlert("", "error");
      }
    }
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
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        {deleteAlert}
      </Dialog>
    </>
  );
};

export default DeleteUser;
