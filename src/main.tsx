import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import ApplicationPage from "./pages/applicationPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApplicationPage
      requestName="Dummy Team"
      privacyPolicyText="This is the privacy policy"
    />
  </StrictMode>,
);
