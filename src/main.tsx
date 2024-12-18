import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Components from "./pages/components.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Components />
  </StrictMode>,
);
