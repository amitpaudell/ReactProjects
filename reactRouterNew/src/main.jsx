import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";

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
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
