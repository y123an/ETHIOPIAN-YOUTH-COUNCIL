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
import YouthRegister from "./pages/Auth/YouthRegister";
import OrganizationRegister from "./pages/Auth/OrganizationRegister";
import AdminPrivateRoutes from "./utils/AdminPrivateRoutes";
import News from "./pages/News";
import Messages from "./pages/Messages";
import Resources from "./pages/Resources";
import Publication from "./pages/Publication";
import UploadResources from "./pages/Dashboard/AddResources";
import UploadPublication from "./pages/Dashboard/AddPublication";
import Organization from "./pages/Organization";
import OrganizationCompleteProfile from "./pages/Organization/CompleteProfile";
import YouthCompleteProfile from "./pages/Youth/CompleteProfile";
import AdminPublication from "./pages/Dashboard/Publication";
import AdminResources from "./pages/Dashboard/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-council/history" element={<OurHistory />} />
        <Route path="/our-council/mission" element={<OurMission />} />
        <Route path="/our-council/vision" element={<OurVision />} />
        <Route path="/our-council/leadership" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/organization" element={<Organization />} />
        <Route
          path="/organization/complete-profile"
          element={<OrganizationCompleteProfile />}
        />
        <Route
          path="/youth/complete-profile"
          element={<YouthCompleteProfile />}
        />
        <Route element={<AdminPrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/upload-resources" element={<UploadResources />} />
          <Route
            path="/admin/upload-publication"
            element={<UploadPublication />}
          />
          <Route path="/admin/publication" element={<AdminPublication />} />
          <Route path="/admin/resources" element={<AdminResources />} />
        </Route>
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
