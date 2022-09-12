import { ProductModel } from "./ProductModel";
import TaskModel from "./TaskModel";
import { UserModel } from "./UserModel";

export default interface CompanyModel {
  id?: number;
  name: string;
  code?: string;
  users?: UserModel[];
  tasks?: TaskModel[];
  products?: ProductModel[];
}
