import App from "@/App";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
