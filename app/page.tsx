import { PreLaunchHero } from "@/components/prelaunch/hero";
import { AbuseCards } from "@/components/prelaunch/abuse-cards";
import { Notifications } from "@/components/prelaunch/notifications";
import { Security } from "@/components/prelaunch/security";
import { Faq } from "@/components/prelaunch/faq";

export default function Home() {
  return (
    <>
      <PreLaunchHero />
      <AbuseCards />
      <Notifications />
      <Security />
      <Faq />
    </>
  );
}
