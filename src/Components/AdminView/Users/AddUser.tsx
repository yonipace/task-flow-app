import { Dialog, DialogContent, Fab } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NewUserForm from "../../Forms/NewUserForm";
import useUserService from "../../../ServiceHooks/useUserService";
import { UserModel } from "../../../Model/UserModel";
import useAlert from "../../../Hooks/useAlert";

const AddUser = (props: any) => {
  const [open, setOpen] = useState(false);
  const alert = useAlert();
  const userService = useUserService();
  const submitText = "הוסף משתמש חדש";
  const sendUser = async (
    user: UserModel,
    isManager: boolean,
    companyName: string,
    companyCode: string
  ) => {
    try {
      if (isManager) {
        await userService.addManager(user, companyName);
        setOpen(false);
      }
      if (!isManager) {
        await userService.addUserToCompany(user, companyCode);
        setOpen(false);
      }
      alert.setAlert("User added successfully", "success");
    } catch (e: any) {
      alert.setAlert(e, "error");
    }
  };

  const fabStyle = {
    position: "fixed",
    bottom: 32,
    left: 32,
  };
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          {<NewUserForm submitText={submitText} doOnSubmit={sendUser} />}
        </DialogContent>
      </Dialog>
      <Fab color="secondary" onClick={() => setOpen(true)} sx={fabStyle}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddUser;
