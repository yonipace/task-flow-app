import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../../Model/ProductModel";

export interface ProductListState {
  productList: ProductModel[];
}

const initialState: ProductListState = {
  productList: [],
};

export const ProductListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<ProductModel[]>) => {
      state.productList = action.payload;
    },
    addProductToStore: (state, action: PayloadAction<ProductModel>) => {
      state.productList.push(action.payload);
    },
    updateProductInStore: (state, action: PayloadAction<ProductModel>) => {
      const indexToUpdate = state.productList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexToUpdate >= 0) state.productList[indexToUpdate] = action.payload;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const indexToDelete = state.productList.findIndex(
        (t) => t.id === action.payload
      );
      if (indexToDelete >= 0) state.productList.splice(indexToDelete, 1);
    },
  },
});

export const {
  setProductList,
  addProductToStore,
  updateProductInStore,
  removeProduct,
} = ProductListSlice.actions;

export const getProducts = (state: any) => {
  state.ProductListState.productList();
};

export default ProductListSlice.reducer;
