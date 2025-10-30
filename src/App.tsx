import CoachBioSection from "./components/CoachBioSection";
import CTASection from "./components/CTASection";
import FaqSection from "./components/FaqSection";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

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
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
