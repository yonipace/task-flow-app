import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { StationModel } from "../../Model/StationModel";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StationCard = (props: StationModel) => {
  return (
    <div>
      <Card sx={{ my: 1, maxWidth: "sm" }}>
        <CardHeader
          title={props.product.name}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography> מחיר ליחידה: {props.product.price}</Typography>
          <Typography>כמות: {props.quantity}</Typography>
          <Typography>
            סך הכל: {props.quantity * props.product.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StationCard;
