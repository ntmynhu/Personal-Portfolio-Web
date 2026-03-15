import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const heroImage = "https://github.com/ntmynhu/Personal-Portfolio-Web/blob/main/src/assets/HeroPage/Minhu.png?raw=true";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a1d23] overflow-hidden flex items-center justify-center px-6">
      {/* Decorative scribbles */}

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
              style={{ fontFamily: "'Mrs_Saint_Delafield', cursive" }}
            >
              <p className="p-[0px] text-[#d9d9d9] text-[54px] font-[Mrs_Saint_Delafield]">
                Turn coffee into code
              </p>
              <p className="text-[#d9d9d9] text-[54px] font-[Mrs_Saint_Delafield]">
                Make the world a better place
              </p>
            </div>
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