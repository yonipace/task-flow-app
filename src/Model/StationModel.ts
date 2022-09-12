import { ProductModel } from "./ProductModel";

export interface StationModel {
  id: number;
  product: ProductModel;
  quantity: number;
}
