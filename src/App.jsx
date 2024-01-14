import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import OurHistory from "./pages/OurHistory";
import OurMission from "./pages/OurMission";
import OurVision from "./pages/OurVision";
import Contact from "./pages/Contact";
import OurTeam from "./pages/OurTeam";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
