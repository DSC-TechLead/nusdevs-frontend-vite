import App from "@/App";
import HostCreateTeamFormStep4 from "@/components/features/team/forms/host-create-team-form-step-4";
import HostCreateTeamFormStep5 from "@/components/features/team/forms/host-create-team-form-step-5";
import HostCreateTeamFormLayout from "@/components/layouts/host-create-team-form-layout";
import Components from "@pages/components";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components-demo" element={<Components />} />
        <Route path="/create-team" element={<HostCreateTeamFormLayout />}>
          <Route path="step-4" element={<HostCreateTeamFormStep4 />} />
          <Route path="step-5" element={<HostCreateTeamFormStep5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
