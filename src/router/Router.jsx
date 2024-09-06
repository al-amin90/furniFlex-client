import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingIn from "../authontication/SingIn";
import SingUp from "../authontication/SingUp";
import Products from "../pages/Products/Products";
import Carts from "../pages/Carts/Carts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    children: [
        {
            path: "/products",
            element: <Products/>
        },
        {
            path: "/carts",
            element: <Carts/>
        },

    ]
  },
  {
    path: "singIn",
    element: <SingIn/>,
  },
  {
    path: "singUp",
    element: <SingUp/>,
  },
]);

export default router;
