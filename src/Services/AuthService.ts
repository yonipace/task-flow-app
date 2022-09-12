import axios from "axios";
import CredentialsModel from "../Model/CredentialsModel";

import appConfig from "../Util/Config";

class AuthService {
  public async login(credentials: CredentialsModel): Promise<string> {
    const response = await axios.post<string>(
      appConfig.baseUrl + "login",
      credentials
    );
    const token = response.data;
    return token;
    // save the received token in global state
  }

  // const token =

  public logout(): void {
    // loose the token
    // authStore.dispatch(logoutAction());
  }
}

const authService = new AuthService();

export default authService;
