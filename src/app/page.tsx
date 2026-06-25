import HeroContainer from "@/features/hero/containers/HeroContainer";
import StatsContainer from "@/features/stats/containers/StatsContainer";
import TeamContainer from "@/features/team/containers/TeamContainer";

export default function Home() {
  return (
    <>
      <HeroContainer />
      <StatsContainer />
      <TeamContainer />
    </>
  );
}
