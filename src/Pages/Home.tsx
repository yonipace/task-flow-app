import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card sx={{ textAlign: "center", maxWidth: "400px", my: 2 }}>
        <Typography variant="h5" color="primmary.main">
          TaskFlow App
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" m={2}>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
          >
            signup
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default Home;
