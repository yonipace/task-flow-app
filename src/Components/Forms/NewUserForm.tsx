import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { UserModel } from "../../Model/UserModel";

export interface UserFormProps {
  doOnSubmit: Function;
  submitText: string;
}

const NewUserForm = (props: UserFormProps) => {
  const title = "הרשמה למערכת";
  const subTitle = "";
  const submitText = "הירשם";
  const emailLabel = "אימייל";
  const passwordLabel = "ססמא";
  const firstNameLabel = "שם פרטי";
  const lastNameLabel = "שם משפחה";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isManager, setIsManager] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const user: UserModel = {
      firstName,
      lastName,
      email,
      password,
    };
    props.doOnSubmit(user, isManager, companyName, companyCode);
  };

  return (
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
            variant="outlined"
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
            variant="outlined"
            fullWidth
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={emailLabel}
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={passwordLabel}
            variant="outlined"
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
            label={"קוד חברה"}
            variant="outlined"
            fullWidth
            value={companyCode}
            disabled={isManager}
            onChange={(e) => {
              setCompanyCode(e.target.value);
            }}
            // error={isError}
          ></TextField>
        </Grid>

        <Grid item xs={8}>
          <FormControlLabel
            label="אני מעוניין לרשום עסק חדש"
            control={
              <Checkbox
                checked={isManager}
                onChange={(e: any) => {
                  setIsManager(!isManager);
                }}
              />
            }
          ></FormControlLabel>
        </Grid>
        {isManager && (
          <Grid item xs={12}>
            <TextField
              label={"שם העסק"}
              variant="outlined"
              fullWidth
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              // error={isError}
            ></TextField>
          </Grid>
        )}
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
        {props.submitText}
      </Button>
    </Box>
  );
};

export default NewUserForm;
