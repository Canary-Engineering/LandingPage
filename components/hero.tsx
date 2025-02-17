import { faCar } from "@fortawesome/pro-regular-svg-icons";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Hero() {
  return (
    <div className="relative w-full flex items-center justify-center bg-black overflow-hidden min-h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Grid overlay */}
      {/* <div
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111 1px, transparent 1px),
            linear-gradient(to bottom, #111 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      /> */}

      {/* Content */}
      <div className="container px-4 py-32 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mx-auto leading-tight">
          monitor your vehicle in real-time
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          DriveSense provides real-time monitoring of your vehicle, tracking key metrics like speed, location, engine performance, and driving behavior.
        </p>
        <div className="mt-12 flex flex-col items-center gap-2">
          <Button className="bg-[#FF0049] hover:bg-[#FF0049] text-white px-8 py-6 text-lg">
            <FontAwesomeIcon icon={faCar} className="w-5 h-5 mr-2" />
            HOW IT WORKS
          </Button>
          <span className="text-sm text-white/60">COMING SOON</span>
        </div>
      </div>
    </div>
  );
}
