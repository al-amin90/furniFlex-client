import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SingIn from "../authontication/SingIn";

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
  }
]);

export default router;
