import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
import { login } from "../Redux/Reducers/authSlice";

const Login = () => {
  const emailLabel = "אימייל";
  const passwordLabel = "ססמא";
  const title = "אפליקציה לניהול סיורים בשוק";
  const subTitle = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sendRequest, error, loading } = useLogin();
  const setAuthData = (response: any) => {
    dispatch(login(response));
    navigate("/employee");
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };
    sendRequest(credentials, setAuthData);
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
            {error ? error.toString() : ""}
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
          </Grid>
          <Button
            size="large"
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
            }}
          >
            כניסה
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default Login;
