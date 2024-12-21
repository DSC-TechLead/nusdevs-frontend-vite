import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Components from "./pages/components.tsx";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/test-container.tsx";

createRoot(document.getElementById("root")!).render(
  <DndProvider backend={HTML5Backend}>
    <StrictMode>
      {/* <Components /> */}
      <Container />
    </StrictMode>
  </DndProvider>
);
