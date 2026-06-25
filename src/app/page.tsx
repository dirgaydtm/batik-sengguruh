import BatikContainer from "@/features/batik/containers/BatikContainer";
import BlogContainer from "@/features/blog/containers/BlogContainer";
import HeroContainer from "@/features/hero/containers/HeroContainer";
import ProductContainer from "@/features/products/containers/ProductContainer";
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
      <BatikContainer />
      <ProductContainer />
      <BlogContainer />
    </>
  );
}
