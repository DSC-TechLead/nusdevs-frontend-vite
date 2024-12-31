import App from "@/App";
import { Container } from "@/components/test-container";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route path="/drag-demo" element={<Container />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
