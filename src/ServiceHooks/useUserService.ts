import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserModel } from "../Model/UserModel";
import {
  addUserToStore,
  removeUser,
  setUserList,
  updateUserInStore,
} from "../Redux/Reducers/userListSlice";
import { RootState } from "../Redux/Store/store";
import appConfig from "../Util/Config";

const useUserService = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const userList = state.userList.userList;
  const userUrl = appConfig.adminUrl + "user";

  const getAllUsers = async () => {
    if (userList.length === 0) {
      const response = await axios.get<UserModel[]>(userUrl);
      const users = response.data;
      //this is checked to avoid infinite calls to the server when the array is empty
      if (users.length > 0) {
        dispatch(setUserList(users));
        return users;
      }
    }
    return userList;
  };

  const getOneUser = (id: number) => {
    return userList.find((t) => t.id === id);
  };

  const addUserToCompany = async (user: UserModel, companyCode: string) => {
    const response = await axios.post(userUrl + "/company", user, {
      params: {
        companyCode,
      },
    });
    const addedUser = response.data;
    dispatch(addUserToStore(addedUser));
  };
  const addManager = async (user: UserModel, companyName: string) => {
    const response = await axios.post(userUrl, user, {
      params: {
        companyName,
      },
    });
    const addedUser = response.data;
    dispatch(addUserToStore(addedUser));
  };
  const updateUser = async (user: UserModel) => {
    const response = await axios.put(userUrl, user);
    const updatedUser = response.data;
    dispatch(updateUserInStore(updatedUser));
  };
  const deleteUser = async (userId: number) => {
    await axios.delete(userUrl, {
      params: {
        userId,
      },
    });
    dispatch(removeUser(userId));
  };

  return {
    getAllUsers,
    getOneUser,
    addUserToCompany,
    addManager,
    updateUser,
    deleteUser,
  };
};

export default useUserService;
