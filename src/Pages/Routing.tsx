import jwtDecode from "jwt-decode";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminMainView from "../Components/AdminView/AdminMainView";
import CompanyView from "../Components/AdminView/Companies/CompaniesMainView";
import PrivilegesView from "../Components/AdminView/Privileges/PrivilegesMainView";
import UsersView from "../Components/AdminView/Users/UsersMainView";
import UserView from "../Components/AdminView/Users/UsersMainView";
import EmployeeMainView from "../Components/EmployeeView/EmployeeMainView";
import TourMainView from "../Components/TourView/TourMainView";
import useDetails from "../Hooks/useDetails";
import { Role } from "../Model/UserModel";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

const Routing = () => {
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;
  const { getDetails } = useDetails();
  const openRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
  const adminRoutes = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin/main" element={<AdminMainView />} />
      <Route path="/admin/users" element={<UsersView />} />
      <Route path="/admin/companies" element={<CompanyView />} />
      <Route path="/admin/privileges" element={<PrivilegesView />} />
      <Route path="/*" element={<Navigate to="/admin/main" />} />
    </Routes>
  );

  return (
    <div>
      {/* {!isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {isLoggedIn && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employee" element={<EmployeeMainView />} />
          <Route path="/tour/:tourId" element={<TourMainView />} />
        </Routes>
      )} */}
      {/* {!isLoggedIn && openRoutes} */}
      {/* {isLoggedIn && Role[Role.ADMIN] === role.toString() && adminRoutes} */}
      {!token && openRoutes}
      {token && adminRoutes}
    </div>
  );
};

export default Routing;
