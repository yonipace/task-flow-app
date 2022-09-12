import "./App.css";
import AppBar from "./Components/Layout/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AlertColor, Button, CssBaseline } from "@mui/material";
import Login from "./Pages/Login";
import Routing from "./Pages/Routing";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AlertPopup from "./Components/Layout/AlertPopup";
import useAlert from "./Hooks/useAlert";
import { useEffect } from "react";
import useProductService from "./ServiceHooks/useProductService";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2D022",
    },
    secondary: {
      main: "#D95C14",
    },
    background: {
      default: "#e0e0e0",
    },
  },
  // typography: {
  //   fontFamily: "Secular One",
  //   button: {
  //     fontFamily: "Secular One",
  //   },
  // },
});

function App() {
  const { getAllProducts } = useProductService();
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;

  // //this function runs on every initialization of the app
  // useEffect(() => {
  //   //initialize product list for adding stations later
  //   getAllProducts();
  // }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoggedIn && <AppBar />}
        <Routing />
        <AlertPopup />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
