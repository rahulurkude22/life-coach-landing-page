import CoachBioSection from "./components/CoachBioSection";
import CTASection from "./components/CTASection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />
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
