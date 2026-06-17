import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import OperatingModel from "../components/OperatingModel/OperatingModel";
import IntelligenceLoop from "../components/IntelligenceLoop/IntelligenceLoop";
import SixModules from "../components/SixModules/SixModules";
import CompetencyFramework from "../components/CompetencyFramework/CompetencyFramework";
import StandardsCompliance from "../components/StandardsCompliance/StandardsCompliance";
import BusinessImpact from "../components/BusinessImpact/BusinessImpact";
import RoiPhilosophy from "../components/RoiPhilosophy/RoiPhilosophy";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <OperatingModel />
      <IntelligenceLoop />
      <SixModules />
      <CompetencyFramework />
      <StandardsCompliance />
      <BusinessImpact />
      <RoiPhilosophy />
    </div>
  );
};

export default Home;
