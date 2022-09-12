import { Box, Button, Grid, Select, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserModel } from "../../Model/UserModel";
import { TourModel } from "../../Model/TourModel";
import { Role } from "../../Model/UserModel";
import { RootState } from "../../Redux/Store/store";

const TourForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [employee, setEmployee] = useState<UserModel>(employeeList[0]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const tour: TourModel = {
      id: 0,
      name,
      date,
      description,
      user: employee,
      stations: [],
    };

    console.log(tour);
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
        <Grid item xs={6}>
          {/* employee - select */}
          <Select
            fullWidth
            value={employee?.id}
            onChange={(e: any) => {
              console.dir(e.target.value);
              setEmployee(employeeList[e.target.value - 1]);
            }}
          >
            {employeeList.map((emp) => (
              <MenuItem value={emp.id}>{emp.firstName + emp.lastName}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
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

export default TourForm;

const employeeList: UserModel[] = [];
