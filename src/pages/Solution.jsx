
import SolutionChallenges from "../components/Solution/SolutionChallenges";
import SolutionConnectedModel from "../components/Solution/SolutionConnectedModel";
import SolutionDeliveryStages from "../components/Solution/SolutionDeliveryStages";
import SolutionHero from "../components/Solution/SolutionHero";
import SolutionResultsTimeline from "../components/Solution/SolutionResultsTimeline";

const Solution = () => {
  return (
    <main className="overflow-hidden bg-white">
      <SolutionHero />
      <SolutionChallenges />
      <SolutionConnectedModel />
      <SolutionDeliveryStages />
      <SolutionResultsTimeline />
    </main>
  );
};

export default Solution;
