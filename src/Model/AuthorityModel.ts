import { UserModel } from "./UserModel";

export default interface AuthorityModel {
  id?: number;
  name: string;
  users?: UserModel[];
}
