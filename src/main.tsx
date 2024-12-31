import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import AppRoutes from "./routes/app-routes";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
  <DndProvider backend={HTML5Backend}>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </DndProvider>
);
