import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Components from "./pages/components.tsx";
import Navbar from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="mb-[95px]">
      <Components />
    </div>
    <Navbar />
  </StrictMode>,
);
