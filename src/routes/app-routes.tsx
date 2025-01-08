import App from "@/App";
import ApplicationPage from "@/pages/application-page";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route
          path="/applications-page"
          element={
            <ApplicationPage
              requestName="Dummy Team"
              privacyPolicyText="This is the privacy policy"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
