import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      // 🔹 EXISTING video animation (UNCHANGED)
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", { scale: 1.1 })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });

      // 🔹 TEXT animation (NEW – BELOW VIDEO)
      gsap.from(".text-reveal", {
        scrollTrigger: {
          trigger: ".content",
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".stat", {
        scrollTrigger: {
          trigger: ".stats",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 0.9,
        ease: "power3.out",
      });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      {/* ===== VIDEO (UNCHANGED) ===== */}
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      {/* ===== TEXT CONTENT ===== */}
      <div className="content opacity-0 translate-y-10">
        <div className="wrapper">
          {/* LEFT TEXT */}
          <div className="lg:max-w-md">
            <h2 className="text-reveal">MacBook Pro</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p className="text-reveal">
                Introducing{" "}
                <span className="text-white">
                  M-series Apple silicon
                </span>
                , delivering next-level performance and efficiency.
              </p>

              <p className="text-reveal">
                MacBook Pro is built for demanding workflows — from coding and
                rendering to professional-grade multitasking.
              </p>

              <p className="text-reveal">
                With a powerful GPU, fast unified memory, and exceptional battery
                life, performance feels effortless.
              </p>

              <p className="text-reveal text-primary cursor-pointer">
                Learn more about MacBook Pro
              </p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="stats max-w-3xs space-y-14">
            <div className="stat space-y-2">
              <p>Up to</p>
              <h3>4× faster</h3>
              <p>graphics performance</p>
            </div>

            <div className="stat space-y-2">
              <p>Up to</p>
              <h3>1.5× faster</h3>
              <p>CPU performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
