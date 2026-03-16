import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  TimelineSection,
  ProjectDetails,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { EDUCATION, EXPERIENCE, CERTIFICATIONS, TRAININGS } from "./constants";

// Portfolio Home Page
const PortfolioHome = ({ hide }: { hide: boolean }) => (
  <div className="relative z-0 bg-primary">
    <div className="relative">
      <Navbar hide={hide} />
      <Hero />
    </div>
    <About />
    <Tech />
    <Works />

    {/* New Separated Timelines */}
    <TimelineSection idName="experience" subText="My Professional Journey" headText="Experience" items={EXPERIENCE} />
    <TimelineSection idName="education" subText="My Academic Background" headText="Education" items={EDUCATION} />
    <TimelineSection idName="certifications" subText="My Credentials" headText="Certifications" items={CERTIFICATIONS} />
    <TimelineSection idName="training" subText="My Skill Development" headText="Training" items={TRAININGS} />

    {/* <Feedbacks /> */}

    {/* Contact */}
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

// App Layout with Routing
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <Routes>
        {/* Main Portfolio Layout */}
        <Route path="/" element={<PortfolioHome hide={hide} />} />
        
        {/* Project Details Page */}
        <Route path="/project/:id" element={
          <div className="relative z-0 bg-primary min-h-screen">
            <Navbar hide={hide} />
            <div className="pt-28 pb-10">
              <ProjectDetails />
            </div>
            <StarsCanvas />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
