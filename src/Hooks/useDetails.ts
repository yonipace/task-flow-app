import jwtDecode from "jwt-decode";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Role } from "../Model/UserModel";
import { TokenValues } from "../Redux/Reducers/authSlice";
import { RootState } from "../Redux/Store/store";

const useDetails = () => {
  const state = useSelector((state: RootState) => state);
  const userDetails = state.auth;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState<Role>();

  const getDetails = useCallback(() => {
    // if (userDetails) {
    //   setIsLoggedIn(true);
    //   setFirstName(userDetails.firstName);
    //   setLastName(userDetails.lastName);
    //   setRole(userDetails.role);
    //   return userDetails;
    // }
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: TokenValues = jwtDecode(token);
      setIsLoggedIn(true);
      setFirstName(decodedToken.firstName);
      setLastName(decodedToken.lastName);
      decodedToken.role ? setRole(decodedToken.role) : setRole(null);
      return decodedToken;
    }
  }, []);

  return { getDetails, isLoggedIn, firstName, lastName, role };
};

export default useDetails;
