import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./app/router/router";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
