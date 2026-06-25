import HeroContainer from "@/features/hero/containers/HeroContainer";
import ProgramContainer from "@/features/programs/containers/ProgramContainer";
import StatsContainer from "@/features/stats/containers/StatsContainer";
import TeamContainer from "@/features/team/containers/TeamContainer";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <StatsContainer />
      <TeamContainer />
      <ProgramContainer />
    </>
  );
}
