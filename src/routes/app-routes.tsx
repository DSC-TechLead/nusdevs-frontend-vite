import App from "@/App";
import HostingPage from "@/pages/hosting-page";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route path="/hosting-demo" element={<HostingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
