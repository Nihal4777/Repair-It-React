// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import StepsSection from "./components/StepsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="px-4 md:px-18">
        <HomeSection />
        <AboutSection />
        <ServiceSection />
        <div className="ps-20">

        <StepsSection/>
        </div>
        <ContactSection/>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeSection />} />
            <Route path="/" element={<HomeSection />} />
          </Routes>
        </BrowserRouter> */}
      </div>
      <FooterSection/>
    </div>
  );
}
export default App;
