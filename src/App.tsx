import CoachBioSection from "./components/CoachBioSection";
import CTASection from "./components/CTASection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />
        <Certifications />
        <ProcessSection />
        <CoachBioSection />
        <CTASection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
