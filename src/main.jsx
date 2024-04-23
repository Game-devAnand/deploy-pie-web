import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "../pages/Events/events.jsx";
import Test from "../pages/test.jsx";
import About from "../pages/about.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Home from "../pages/Home/home.jsx";
import Execom from "../pages/Execom/execom.jsx";
import Awards from "../pages/Awards/awards";

const router = createBrowserRouter([
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/execom",
    element: <Execom />,
  },
  {
    path: "/",
    element: <Home />,
  },
  // TODO : remove after test
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
