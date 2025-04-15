import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import ParamComp from "./components/PaaramComp.jsx";
import Courses from "./components/Courses.jsx";
import MockTest from "./components/MockTest.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar></Navbar>
        <About></About>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar></Navbar>
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "courses",
        element: <Courses></Courses>,
      },

      {
        path: "mockTest",
        element: <MockTest></MockTest>,
      },
    ],
  },

  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar></Navbar>
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
