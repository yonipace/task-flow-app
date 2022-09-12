import CompanyModel from "./CompanyModel";
import { UserModel } from "./UserModel";

export default interface TaskModel {
  id?: number;
  name: string;
  description: string;
  date: string;
  user?: UserModel;
  company?: CompanyModel;
}
