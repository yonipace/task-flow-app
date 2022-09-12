import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink as RouterLink } from "react-router-dom";
import { employeeList, adminList, MenuItemModel } from "./MenuList";
import { logout, TokenValues } from "../../Redux/Reducers/authSlice";
import { RootState } from "../../Redux/Store/store";
import useDetails from "../../Hooks/useDetails";
import jwtDecode from "jwt-decode";
import { Role } from "../../Model/UserModel";

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const details: TokenValues = token ? jwtDecode(token) : null;
  const name =
    details.role.toString() === Role[Role.ADMIN]
      ? "Admin"
      : details.firstName + " " + details.lastName;
  const dispatch = useDispatch();
  const doLogout = () => {
    dispatch(logout());
  };
  let list: MenuItemModel[] = [];
  if (details.role.toString() === Role[Role.ADMIN]) {
    list = adminList;
  }
  if (details.role.toString() === Role[Role.EMPLOYEE]) {
    list = employeeList;
  }
  return (
    <div>
      <IconButton sx={{ color: "inherit" }} onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{ flexShrink: 0 }}
        anchor="right"
        //this code is used for disabling rtl on the drawer transition
        PaperProps={{
          sx: {
            right: "unset !important",
            left: "0 !important",
          },
        }}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <List>
          <ListItem>
            <Typography mr={1} variant="subtitle1">
              שלום {name}
            </Typography>
          </ListItem>
          <Divider />

          {list.map((item: any) => (
            <ListItem disablePadding key={item.text}>
              <ListItemButton
                sx={{ pl: 5, py: 1 }}
                // onClick={item.action === "logout" ? doLogout : null}
                component={RouterLink}
                to={item.link}
                onClick={() => {
                  if (item.action === "logout") {
                    doLogout();
                  }
                  setIsOpen(false);
                }}
              >
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
