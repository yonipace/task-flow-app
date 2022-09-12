import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";

import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItemModel {
  text: string;
  icon: SvgIconComponent;
  link: string;
  action?: string;
}

export const employeeList: MenuItemModel[] = [
  { text: "סיורים", icon: StorefrontIcon, link: "/employee" },
  { text: "סיור בודד", icon: FormatListBulletedIcon, link: "/tour" },
  {
    text: "התנתק",
    icon: FormatListBulletedIcon,
    link: "/login",
    action: "logout",
  },
];

export const adminList: MenuItemModel[] = [
  {
    text: "users",
    icon: GroupIcon,
    link: "/admin/users",
  },
  {
    text: "companies",
    icon: BusinessIcon,
    link: "/admin/companies",
  },
  {
    text: "privileges",
    icon: SecurityIcon,
    link: "/admin/privileges",
  },
  {
    text: "Log Out",
    icon: FormatListBulletedIcon,
    link: "/login",
    action: "logout",
  },
];
