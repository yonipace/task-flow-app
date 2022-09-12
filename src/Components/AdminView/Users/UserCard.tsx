import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { UserModel } from "../../../Model/UserModel";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const UserCard = (props: UserModel) => {
  return (
    <Card sx={{ my: 1 }}>
      <CardHeader
        title={props.firstName + " " + props.lastName}
        subheader={props.email}
        action={
          <>
            <UpdateUser {...props} />
            <DeleteUser {...props} />
          </>
        }
      />
      <Stack spacing={0.5} sx={{ px: 2, pb: 1 }}>
        <Typography>
          {<strong>חברה: </strong>}
          {props.company ? props.company.name : ""}
        </Typography>
        <Divider />
        <Typography>
          {<strong>קוד חברה: </strong>}
          {props.company ? props.company.code : ""}
        </Typography>
        <Divider />
        <Typography>
          {<strong>תפקיד: </strong>} {props.role}
        </Typography>
      </Stack>{" "}
    </Card>
  );
};

export default UserCard;
