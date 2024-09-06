import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingIn from "../authontication/SingIn";
import SingUp from "../authontication/SingUp";
import Products from "../pages/Products/Products";
import Carts from "../pages/Carts/Carts";
import NoContent from "../pages/sharePage/NoContent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    children: [
        {
            index: true,
            element: <NoContent/>
        },
        {
            path: "/products",
            element: <Products/>
        },
        {
            path: "/carts",
            element: <Carts/>
        },
        {
            path: "/categories",
            element: <NoContent/>
        },
        {
            path: "/custom",
            element: <NoContent/>
        },
        {
            path: "/blog",
            element: <NoContent/>
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
