import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../pages/Home";

import DashboardLayout from "../MainLayOut/DashboardLayout";
import AddProducts from "../pages/AddProducts";
import AllProducts from "../pages/AllProducts";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import ProductEdit from "../pages/ProductEdit";
import ContactUs from "../pages/ContactUs";
import About from "../components/About/About";
import EditProfile from "../pages/EditProfile";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "allProducts",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/data/${params.id}`),
      },

      {
        path: "allProducts/edit/:id",
        element: (
          <PrivateRoute>
            <ProductEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
