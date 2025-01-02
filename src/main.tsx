import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import AppRoutes from "./routes/app-routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
