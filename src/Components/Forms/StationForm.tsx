import { Box, Button, Grid, Select, MenuItem, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { ProductModel } from "../../Model/ProductModel";
import { StationModel } from "../../Model/StationModel";
import useStationService from "../../ServiceHooks/useStationService";
import { useParams } from "react-router-dom";
import useProductService from "../../ServiceHooks/useProductService";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";

const StationForm = () => {
  // const [productList, setProductList] = useState<ProductModel[]>([]);
  const [product, setProduct] = useState<ProductModel>();
  const [quantity, setQuantity] = useState(0);
  const stationService = useStationService();
  const { tourId } = useParams();
  const state = useSelector((state: RootState) => state);
  const productList = state.productList.productList;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const station: StationModel = {
      id: 0,
      product,
      quantity,
    };

    stationService.addStation(station, parseInt(tourId));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 2, px: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* name - select */}
          <Select
            fullWidth
            value={product ? product.id : ""}
            onChange={(e: any) => {
              setProduct(productList[e.target.value - 1]);
            }}
          >
            {productList.map((p) => (
              <MenuItem value={p.id} key={p.id}>
                {p.name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          {/* quantity - number */}
          <TextField
            fullWidth
            type="number"
            label="כמות"
            value={quantity}
            onChange={(e: any) => {
              setQuantity(e.target.value && e.target.valueAsNumber);
            }}
          ></TextField>
        </Grid>
      </Grid>
      {/* submit */}
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        הוסף תחנה
      </Button>
    </Box>
  );
};

export default StationForm;

const dummyProducts: ProductModel[] = [
  { id: 1, price: 10, name: "עוזיאלי" },
  { id: 2, price: 7, name: "שוקולד" },
  { id: 3, price: 12, name: "קובה" },
  { id: 4, price: 24, name: "בורקס" },
  { id: 5, price: 9, name: "פיתה" },
];
