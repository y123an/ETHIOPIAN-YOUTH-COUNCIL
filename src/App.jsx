import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import OurHistory from "./pages/OurHistory";
import OurMission from "./pages/OurMission";
import OurVision from "./pages/OurVision";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";
import Dashboard from "./pages/Dashboard/Dashboard";
import Youth from "./pages/Dashboard/Youth";
import Companies from "./pages/Dashboard/Companies";
import Account from "./pages/Dashboard/Account";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/YouthRegister";
import YouthRegister from "./pages/Auth/YouthRegister";
import OrganizationRegister from "./pages/Auth/OrganizationRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-council/history" element={<OurHistory />} />
        <Route path="/our-council/mission" element={<OurMission />} />
        <Route path="/our-council/vision" element={<OurVision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/youth" element={<Youth />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-youth" element={<YouthRegister />} />
        <Route
          path="/register-organization"
          element={<OrganizationRegister />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
