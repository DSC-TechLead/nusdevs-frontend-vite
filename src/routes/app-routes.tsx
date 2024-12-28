import App from "@/App";
import DragTest from "@/pages/test-draggable";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route path="/drag-demo" element={<DragTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
