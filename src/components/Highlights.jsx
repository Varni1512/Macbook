import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.from(".hl-title", {
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".hl-card", {
      scrollTrigger: {
        trigger: ".hl-grid",
        start: isMobile ? "top 85%" : "top 70%",
      },
      y: 80,
      opacity: 0,
      scale: 0.92,
      duration: 0.9,
      stagger: 0.25,
      ease: "power3.out",
    });
  }, [isMobile]);

  return (
    <>
      {/* ===== CSS INSIDE FILE ===== */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-150%) rotate(12deg); }
          100% { transform: translateX(300%) rotate(12deg); }
        }

        .premium-card {
          background: linear-gradient(135deg, #0a0a0a, #1b1b2f, #0a0a0a);
          border: 1px solid rgba(255, 255, 255, 0.12);
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top,
            rgba(255,255,255,0.25),
            transparent 60%
          );
          opacity: 0.6;
          pointer-events: none;
        }

        .premium-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          transform: rotate(12deg);
          animation: shine 4s linear infinite;
          pointer-events: none;
        }

        .premium-card:hover {
          transform: translateY(-6px) scale(1.02);
          transition: transform 0.4s ease;
        }
      `}</style>

      {/* ===== SECTION ===== */}
      <section
        id="highlights"
        className="bg-black text-white py-32 overflow-hidden"
      >
        {/* HEADINGS */}
        <div className="text-center max-w-4xl mx-auto px-6 mb-24">
          <h2 className="hl-title text-4xl md:text-5xl font-semibold">
            There’s never been a better time to upgrade.
          </h2>
          <h3 className="hl-title mt-5 text-lg text-gray-400">
            Here’s what you get with the new MacBook Pro.
          </h3>
        </div>

        {/* GRID */}
        <div className="hl-grid max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* PERFORMANCE */}
          <div className="hl-card premium-card rounded-3xl p-10">
            <img src="/laptop.png" className="w-16 mb-6 relative z-10" />
            <p className="text-2xl font-semibold relative z-10">
              Performance without limits
            </p>
            <p className="mt-4 text-gray-300 text-base leading-relaxed relative z-10">
              Take on intensive workflows with confidence. From compiling large
              codebases to rendering complex 3D scenes, MacBook Pro delivers up to
              9.8× faster performance with sustained power that doesn’t slow you down.
            </p>
          </div>

          {/* DISPLAY */}
          <div className="hl-card premium-card rounded-3xl p-10">
            <img src="/sun.png" className="w-16 mb-6 relative z-10" />
            <p className="text-2xl font-semibold relative z-10">
              A display that redefines clarity
            </p>
            <p className="mt-4 text-gray-300 text-base leading-relaxed relative z-10">
              The Liquid Retina XDR display delivers extreme dynamic range,
              incredible brightness, and true-to-life color accuracy — perfect
              for creators, developers, and visual professionals.
            </p>
          </div>

          {/* APPLE INTELLIGENCE */}
          <div className="hl-card premium-card rounded-3xl p-10">
            <img src="/ai.png" className="w-16 mb-6 relative z-10" />
            <p className="text-2xl font-semibold relative z-10">
              Built for{" "}
              <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                Apple Intelligence
              </span>
            </p>
            <p className="mt-4 text-gray-300 text-base leading-relaxed relative z-10">
              Advanced on-device AI helps you write smarter, code faster, and
              stay focused — all while protecting your privacy. Intelligence
              works seamlessly across macOS to elevate everything you do.
            </p>
          </div>

          {/* BATTERY */}
          <div className="hl-card premium-card rounded-3xl p-10">
            <img src="/battery.png" className="w-16 mb-6 relative z-10" />
            <p className="text-2xl font-semibold relative z-10">
              Power that lasts all day
            </p>
            <p className="mt-4 text-gray-300 text-base leading-relaxed relative z-10">
              Go longer than ever with up to 24 hours of battery life. Whether
              you’re working remotely, traveling, or creating on the go,
              MacBook Pro keeps up without reaching for the charger.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Highlights;
