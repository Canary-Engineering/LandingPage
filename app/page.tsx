import { PreLaunchHero } from "@/components/prelaunch/hero";
import { AbuseCards } from "@/components/prelaunch/abuse-cards";
import { PreLaunchCTA } from "@/components/prelaunch/cta";

export default function Home() {
  return (
    <>
      <PreLaunchHero />
      <AbuseCards />
      <PreLaunchCTA />
    </>
  );
}
