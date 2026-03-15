import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const heroImage = "https://raw.githubusercontent.com/ntmynhu/Personal-Portfolio-Web/refs/heads/main/src/assets/5089d4fc33c7a5255a3d0aafd65fee28f5b8133b.png";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a1d23] overflow-hidden flex items-center justify-center px-6">
      {/* Decorative scribbles */}

      {/* Heart decoration top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-1/3 right-32 w-16 h-16 z-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 85 C 20 60, 10 40, 15 25 C 20 10, 35 5, 50 20 C 65 5, 80 10, 85 25 C 90 40, 80 60, 50 85 Z"
            stroke="#ff6694"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Heart decoration bottom left */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-1/3 left-40 w-12 h-12 z-10"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 85 C 20 60, 10 40, 15 25 C 20 10, 35 5, 50 20 C 65 5, 80 10, 85 25 C 90 40, 80 60, 50 85 Z"
            stroke="#ff6694"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Main content container */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Small label at top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="top-0 left-1/2 -translate-x-[250px] translate-y-[25px] mb-8 z-20"
          >
            <p className="text-white uppercase tracking-widest text-[20px]">
              GAME PROGRAMMER
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
          >
            <h1 className="leading-none whitespace-nowrap text-[#ff6694] text-[275px]">
              Portfolio.
            </h1>
          </motion.div>

          {/* "My" text - left of Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="absolute top-0 left-1/2 -translate-x-[625px] translate-y-[100px] z-0"
          >
            <h1
              className="leading-none whitespace-nowrap text-[180px] text-[#ffffff]"
              style={{
                fontFamily: "'Mrs_Saint_Delafield', cursive",
              }}
            >
              <p className="text-[#d9d9d9] font-[Mrs_Saint_Delafield]">
                My
              </p>
            </h1>
          </motion.div>

          {/* Portrait image in center */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 mt-20"
          >
            <ImageWithFallback
              src={heroImage}
              alt="Game Developer"
              className="w-80 h-96 md:w-96 md:h-[564px] object-cover object-top mx-[0px] my-[-25px]"
            />
          </motion.div>

          {/* Coffee text - overlaying portrait */}
          <motion.div
            initial={{ opacity: 0, rotate: -7, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -7, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-12 z-20 pointer-events-none"
          >
            <div
              className="text-[#ff6694] text-4xl md:text-5xl text-center leading-none"
              style={{ fontFamily: "'Reenie Beanie', cursive" }}
            >
              <p className="p-[0px] text-[#d9d9d9] text-[54px] font-[Mrs_Saint_Delafield]">
                Turn coffee into code
              </p>
              <p className="text-[#d9d9d9] text-[54px] font-[Mrs_Saint_Delafield]">
                Make the world a better place
              </p>
            </div>
          </motion.div>

          {/* Left side - Name tag */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
          >
            <div className="border-2 border-[#ff6694] rounded-full px-8 py-3">
              <p className="text-white uppercase tracking-wider text-lg">
                MIINHUU
              </p>
            </div>
          </motion.div>

          {/* Center - Handwritten text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 z-5"
          >
            <p
              className="text-gray-400 text-2xl md:text-3xl italic whitespace-nowrap"
              style={{
                fontFamily: "'Brush Script MT', cursive",
              }}
            >
              I'm looking for my place
            </p>
          </motion.div>

          {/* Right side - Year tag */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-0 top-2/3 z-20"
          >
            <div className="border-2 border-[#ff6694] rounded-full px-8 py-3">
              <p className="text-white text-lg">2005 - 2026</p>
            </div>
          </motion.div>

          {/* Bottom handwritten text continuation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute left-1/2 bottom-32 -translate-x-1/2 z-5"
          >
            <p
              className="text-gray-400 text-2xl md:text-3xl italic whitespace-nowrap"
              style={{
                fontFamily: "'Brush Script MT', cursive",
              }}
            >
              in the real world
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom contact info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div>+84 828505798</div>
            <div>ntmn1105@gmail.com</div>
            <div>linkedin.com/in/ntmynhu/</div>
            <div>github.com/ntmynhu</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}