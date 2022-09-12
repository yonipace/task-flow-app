import AuthorityModel from "./AuthorityModel";
import CompanyModel from "./CompanyModel";
import TaskModel from "./TaskModel";

export interface UserModel {
  id?: number;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  role?: Role;
  company?: CompanyModel;
  authorities?: AuthorityModel[];
  tasks?: TaskModel[];
}

export enum Role {
  ADMIN,
  EMPLOYEE,
  MANAGER,
}
