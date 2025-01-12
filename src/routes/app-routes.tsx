import App from "@/App";
import { Container } from "@/components/test-container";
import Main from "@/pages/main";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route path="/drag-demo" element={<Container />} />
        <Route path="/main-hosting" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
