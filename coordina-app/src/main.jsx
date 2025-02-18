import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginPage.jsx";
import ResendPage from "./components/ResendPage.jsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "resend",
    element: <ResendPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      /* será as páginas de dentro do app
      {
        path: "/",
        element: <Home />
      }
      */
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
