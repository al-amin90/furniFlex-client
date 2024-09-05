import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingIn from "../authontication/SingIn";
import SingUp from "../authontication/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    children: [
        {
            path: "/products",
            element: <h3> nothing</h3>
        }
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
