import {
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogContent,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { UserModel } from "../../../Model/UserModel";
import ModeEditIcon from "@mui/icons-material/ModeEditOutline";
import useUserService from "../../../ServiceHooks/useUserService";
import useAlert from "../../../Hooks/useAlert";

const title = "עדכון";
const subTitle = "";
const submitText = "עדכון";
const emailLabel = "אימייל";
const passwordLabel = "ססמא";
const firstNameLabel = "שם פרטי";
const lastNameLabel = "שם משפחה";

const UpdateUser = (props: UserModel) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [role, setRole] = useState(props.role);
  const [companyCode, setCompanyCode] = useState(props.company?.code);
  const [companyName, setCompanyName] = useState(props.company?.name);
  const [open, setOpen] = useState(false);
  const userService = useUserService();
  const alert = useAlert();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const userToUpdate = { ...props };
    userToUpdate.firstName = firstName;
    userToUpdate.lastName = lastName;

    try {
      userService.updateUser(userToUpdate);
      alert.setAlert("user updated successfully", "success");
      setOpen(false);
    } catch (e: any) {
      alert.setAlert(e, "error");
    }
  };

  const updateForm = (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        pb: 3,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography color="error" sx={{ mb: 2 }}>
        {/* {error ? error.toString() : ""} */}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ textAlign: "center" }}
          >
            {subTitle}{" "}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={firstNameLabel}
            variant="standard"
            fullWidth
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={lastNameLabel}
            variant="standard"
            fullWidth
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled
            label={emailLabel}
            variant="standard"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled
            label={passwordLabel}
            variant="standard"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>

        <Grid item xs={4}>
          <TextField
            disabled
            label={"קוד חברה"}
            variant="standard"
            fullWidth
            value={companyCode}
            onChange={(e) => {
              setCompanyCode(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>

        <Grid item xs={8}>
          <TextField
            disabled
            label={"שם העסק"}
            variant="standard"
            fullWidth
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
      </Grid>
      <Button
        size="large"
        type="submit"
        fullWidth
        variant="contained"
        // disabled={loading}
        sx={{
          mt: 3,
        }}
      >
        {submitText}
      </Button>
    </Box>
  );
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>{updateForm}</DialogContent>
      </Dialog>
      <IconButton onClick={() => setOpen(true)}>
        <ModeEditIcon />
      </IconButton>
    </>
  );
};

export default UpdateUser;
