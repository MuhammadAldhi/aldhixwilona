import { useState, useEffect } from "react";
import Particles from "../components/ui/Particles";
import BlurText from "../components/ui/BlurText";
import TiltedCard from "../components/ui/TiltedCard";
import Pictures1 from "../assets/action.png";
import Pictures2 from "../assets/action2.png";
import About from "./About";
import Galery from "./Galery";
import ElectricBorder from "../components/ui/ElectricBorder";

const CARDS = [
  { img: Pictures1, name: "Aldhi" },
  { img: Pictures2, name: "Wilona" },
];

export default function HomePage() {
  const [screenSize, setScreenSize] = useState(320);

  // Update ukuran card berdasarkan lebar layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScreenSize(200); // Mobile
      else if (window.innerWidth < 1024) setScreenSize(260); // Tablet
      else setScreenSize(320); // Desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardProps = {
    containerHeight: `${screenSize}px`,
    containerWidth: `${screenSize}px`,
    imageHeight: `${screenSize}px`,
    imageWidth: `${screenSize}px`,
    rotateAmplitude: 12,
    scaleOnHover: 1.05,
    showMobileWarning: false,
    showTooltip: true,
    displayOverlayContent: true
  };

  return (
    <>
      <div className="relative w-full h-screen bg-[#0d0f14] overflow-hidden flex items-center justify-center">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute botom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />

        {/* Background Particles */}
        <div className="absolute inset-0 z-10 opacity-40">
          <Particles particleColors={["#ffffff", "#7df9ff"]} particleCount={150} speed={0.2} particleBaseSize={80} />
        </div>

        {/* Cards Layer - Diubah menjadi Flex Column di Mobile */}
        <div className="absolute inset-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 md:px-20 lg:px-40 gap-8 lg:gap-0 z-30">
          {CARDS.map((card, i) => (
            <div key={i} className="group relative scale-90 sm:scale-100">
              <div className="absolute -inset-2 bg-[#7df9ff] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full" />

              <ElectricBorder
                color="#7df9ff"
                speed={0.8}
                chaos={0.1}
                thickness={screenSize < 250 ? 2 : 3}
                style={{
                  borderRadius: "20px",
                  padding: "8px",
                  filter: "drop-shadow(0 0 8px rgba(125, 249, 255, 0.5))"
                }}
              >
                <div className="cursor-target overflow-hidden rounded-[12px]">
                  <TiltedCard
                    imageSrc={card.img}
                    altText={card.name}
                    captionText={card.name}
                    {...cardProps}
                  />
                </div>
              </ElectricBorder>

              <p className="text-center mt-3 text-cyan-400 font-mono text-sm tracking-widest opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                {card.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        {/* Text Layer - Ukuran font responsif */}
        <div className="relative z-40 text-center pointer-events-none px-4">
          <BlurText
            text="ALDHI X WILONA"
            className="font-Vector text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            animateBy="letters"
            direction="top"
            delay={100}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="z-50 absolute bottom-6 w-full flex justify-center">
          <a href="#about" className="group flex flex-col items-center gap-1 cursor-target">
            <span className="text-[8px] lg:text-[10px] text-cyan-400 tracking-[0.3em] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all">SCROLL</span>
            <svg className="h-5 w-5 lg:h-6 lg:w-6 text-white group-hover:text-cyan-400 transition-colors animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
      <About />
      <Galery />
    </>
  );
}
