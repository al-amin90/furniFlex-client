import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingIn from "../authontication/SingIn";
import SingUp from "../authontication/SingUp";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";

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
            element: <Cart/>
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
