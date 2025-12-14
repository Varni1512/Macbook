import useMacbookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section
      id="product-viewer"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold mb-10"
      >
        Take a closer look.
      </motion.h2>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="z-20 mb-6"
      >
        <div className="flex items-center gap-10">

          {/* Color Selector */}
          <div className="flex items-center gap-3">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "h-8 w-8 rounded-full cursor-pointer border transition-all duration-300",
                color === "#adb5bd"
                  ? "border-white scale-110"
                  : "border-gray-500 hover:scale-105"
              )}
              style={{ backgroundColor: "#adb5bd" }}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "h-8 w-8 rounded-full cursor-pointer border transition-all duration-300",
                color === "#2e2c2e"
                  ? "border-white scale-110"
                  : "border-gray-500 hover:scale-105"
              )}
              style={{ backgroundColor: "#2e2c2e" }}
            />
          </div>

          {/* Size Selector */}
          <div className="flex rounded-full border border-gray-600 overflow-hidden">
            {[
              { label: '14"', value: 0.06 },
              { label: '16"', value: 0.08 },
            ].map(({ label, value }) => (
              <motion.button
                key={label}
                whileTap={{ scale: 0.95 }}
                onClick={() => setScale(value)}
                className={clsx(
                  "px-6 py-2 text-sm font-medium transition-all",
                  scale === value
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                )}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl h-[500px] md:h-[650px]"
      >
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <StudioLights />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.6}
          />
          <ModelSwitcher
            scale={isMobile ? scale - 0.03 : scale}
            isMobile={isMobile}
          />
        </Canvas>
      </motion.div>

      {/* Ambient Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
  );
};

export default ProductViewer;
