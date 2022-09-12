import {
  Card,
  CardActionArea,
  CardActions,
  Stack,
  Typography,
} from "@mui/material";
import { TourModel } from "../../Model/TourModel";
import EmloyeeUpdateTour from "./UpdateTour";
import DeleteTour from "./DeleteTour";
import { useNavigate } from "react-router-dom";

const TourCard = (props: TourModel) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ my: 1, maxWidth: "sm" }}>
      <CardActionArea
        onClick={(e: any) => {
          navigate("/tour/" + props.id);
        }}
      >
        {/* <CardHeader title={props.name} subheader={props.date} /> */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          mx={2}
          my={2}
        >
          <Typography variant="h5">
            <strong>{props.name}</strong>
          </Typography>
          <Typography>{props.date}</Typography>
        </Stack>
      </CardActionArea>
      <CardActions disableSpacing>
        <EmloyeeUpdateTour {...props} />
        <DeleteTour {...props} />
      </CardActions>
    </Card>
  );
};

export default TourCard;
