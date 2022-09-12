import { AppBar as MUIAppBar, Toolbar } from "@mui/material";
import MenuDrawer from "./MenuDrawer";

const AppBar = () => {
  return (
    <div>
      <MUIAppBar position="static">
        <Toolbar disableGutters>
          <MenuDrawer />
        </Toolbar>
      </MUIAppBar>
    </div>
  );
};

export default AppBar;
