import {
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewUserForm from "../Components/Forms/NewUserForm";
import useAlert from "../Hooks/useAlert";
import useLogin from "../Hooks/useLogin";
import { UserModel } from "../Model/UserModel";
import { login } from "../Redux/Reducers/authSlice";
import useRegisterService from "../ServiceHooks/useRegisterService";

const SignUp = () => {
  const title = "הרשמה למערכת";
  const submitText = "הירשם";
  const emailLabel = "אימייל";
  const passwordLabel = "ססמא";
  const firstNameLabel = "שם פרטי";
  const lastNameLabel = "שם משפחה";
  const { setAlert } = useAlert();

  const registerService = useRegisterService();

  const signupUser = (
    user: UserModel,
    isManager: boolean,
    companyName: string,
    companyCode: string
  ) => {
    try {
      if (isManager) {
        registerService.registerCompany(user, companyName);
      }
      if (!isManager) {
        registerService.registerUserToCompany(user, companyCode);
      }
      setAlert("הסיור נוצר בהצלחה", "success");
    } catch (e) {
      setAlert(e.toString(), "error");
    }
  };
  return (
    <Container maxWidth="xs">
      <Card
        elevation={3}
        sx={{
          mt: 3,
          mb: 3,
          p: 2,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          color: "primary.main",
        }}
      >
        <CardHeader title={<strong>{title}</strong>} />
        <NewUserForm submitText={submitText} doOnSubmit={signupUser} />
      </Card>
    </Container>
  );
};

export default SignUp;
