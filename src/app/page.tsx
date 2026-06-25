import BatikContainer from "@/features/batik/containers/BatikContainer";
import BlogContainer from "@/features/blog/containers/BlogContainer";
import FaqContainer from "@/features/faq/containers/FaqContainer";
import HeroContainer from "@/features/hero/containers/HeroContainer";
import LocationContainer from "@/features/location/containers/LocationContainer";
import PartnersContainer from "@/features/partners/containers/PartnersContainer";
import ProductContainer from "@/features/products/containers/ProductContainer";
import ProgramContainer from "@/features/programs/containers/ProgramContainer";
import StatsContainer from "@/features/stats/containers/StatsContainer";
import TeamContainer from "@/features/team/containers/TeamContainer";
import TrustedContainer from "@/features/trusted/containers/TrustedContainer";

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
      <TrustedContainer />
      <PartnersContainer />
      <FaqContainer />
      <LocationContainer />
    </>
  );
}
