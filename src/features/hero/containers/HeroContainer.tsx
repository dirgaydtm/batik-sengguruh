import { ExploreButton } from "../components/ExploreButton";
import { HeroTypo } from "../components/HeroTypo";
import { PhotoCards } from "../components/PhotoCards";

export default function HeroContainer() {
  return (
    <section className="relative flex min-h-screen flex-col items-center w-full  bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 75% 50%, rgba(150,90,55,0.16) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 85%, rgba(90,55,35,0.22) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col md:flex-row max-w-360 w-full items-center justify-between gap-10 md:gap-12 px-5 md:px-10 pb-16 pt-24 md:pt-28 text-center md:text-left">
        <HeroTypo className="flex flex-col gap-8 max-w-140 items-center md:items-start">
          <PhotoCards className="flex md:hidden items-center justify-center my-6" />
          <ExploreButton />
        </HeroTypo>

        <PhotoCards className="hidden md:flex items-center justify-center" />
      </div>
    </section>
  );
}