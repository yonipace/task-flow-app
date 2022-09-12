import {
  Box,
  Card,
  CardHeader,
  Container,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import FormDialog from "../Forms/FormDialog";
import StationForm from "../Forms/StationForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StationModel } from "../../Model/StationModel";
import useStationService from "../../ServiceHooks/useStationService";
import StationCard from "./StationCard";

const TourMainView = () => {
  const stationService = useStationService();
  const [currentTab, setCurrentTab] = useState(1);
  const [stations, setStations] = useState<StationModel[]>([]);
  const { tourId } = useParams();
  const handleTabChange = (e: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    (async () => {
      stationService.getAllStations(parseInt(tourId)).then(
        (arr) => setStations(arr)
        // (err) => notificationService.error(err)
      );
    })();
  }, [stationService, tourId]);

  return (
    <>
      <Box sx={{ bgcolor: "primary.main", textAlign: "center", pb: 1 }}>
        <Card sx={{ maxWidth: "250px", mx: 3, borderRadius: "30px" }}>
          <CardHeader
            title={<strong>{dummyTour.name}</strong>}
            subheader={dummyTour.date}
          />
        </Card>
      </Box>
      <Toolbar sx={{ bgcolor: "primary.main" }} variant="dense">
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          sx={{ flexGrow: 1 }}
        >
          <Tab label="תחנות" value={1}></Tab>
          <Tab label="תיאור" value={2}></Tab>
          <Tab label="סיכום" value={3}></Tab>
        </Tabs>
      </Toolbar>

      <Container sx={{ mt: 2 }}>
        {stations.length === 0 && <strong>לא נמצאו תחנות </strong>}
        {stations.length > 0 &&
          stations.map((station) => (
            <StationCard {...station} key={station.id} />
          ))}
        <FormDialog form={<StationForm />} />
      </Container>
    </>
  );
};

export default TourMainView;

const dummyTour: any = {
  name: "סיור #153",
  date: "10-10-2022",
};
