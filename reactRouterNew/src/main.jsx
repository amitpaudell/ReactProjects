import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
