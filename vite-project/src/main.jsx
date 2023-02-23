

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Contact from "./rouutes/contact";
import Root,{loader as rootLoader} from "./rouutes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    loader:rootLoader,
    children:[ 
        {
        path: "contacts/:contactId",
        element: <Contact/>,
    },
    ],
},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
    <RouterProvider router={router} />
);