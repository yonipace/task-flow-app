import axios from "axios";
import { useDispatch } from "react-redux";
import { UserModel } from "../Model/UserModel";
import { login } from "../Redux/Reducers/authSlice";
import appConfig from "../Util/Config";

const useRegisterService = () => {
  const dispatch = useDispatch();

  const registerUserToCompany = async (
    user: UserModel,
    companyCode: string
  ) => {
    const response = await axios.post(
      appConfig.userSignupUrl + "company",
      user,
      {
        params: {
          companyCode,
        },
      }
    );
    dispatch(login(response.data));
  };

  const registerCompany = async (user: UserModel, companyName: string) => {
    const response = await axios.post(appConfig.companySignupUrl, user, {
      params: {
        companyName,
      },
    });
    dispatch(login(response.data));
  };
  const registerManager = () => {};
  return { registerUserToCompany, registerCompany, registerManager };
};

export default useRegisterService;
