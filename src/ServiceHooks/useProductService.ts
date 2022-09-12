import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductModel } from "../Model/ProductModel";
import {
  addProductToStore,
  removeProduct,
  setProductList,
  updateProductInStore,
} from "../Redux/Reducers/productListSlice";

import { RootState } from "../Redux/Store/store";
import appConfig from "../Util/Config";

const useProductService = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const productList = state.productList.productList;
  const productUrl = appConfig.productUrl;

  //product methods

  const getAllProducts = async () => {
    if (productList.length === 0) {
      const response = await axios.get<ProductModel[]>(productUrl, {});
      const products = response.data;
      //this is checked to avoid infinite calls to the server when the array is empty
      if (products.length > 0) {
        dispatch(setProductList(products));

        return products;
      }
    }
    return productList;
  };

  const getOneProduct = (id: number) => {
    return productList.find((t) => t.id === id);
  };

  const addProduct = async (product: ProductModel, tourId: number) => {
    const response = await axios.post(productUrl, product, {
      params: { tourId },
    });
    const addedProduct = response.data;
    dispatch(addProductToStore(addedProduct));
  };
  const updateProduct = async (product: ProductModel) => {
    const response = await axios.put(productUrl, product);
    const updatedProduct = response.data;
    dispatch(updateProductInStore(updatedProduct));
  };
  const deleteProduct = async (id: number) => {
    await axios.delete(productUrl + id);
    dispatch(removeProduct(id));
  };

  return {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProductService;
