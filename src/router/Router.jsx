import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

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
]);

export default router;
