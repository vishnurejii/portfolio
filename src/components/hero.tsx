import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5",
        )}
      >
        {/* Left decoration */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#10b981]" />
          <div className="w-1 sm:h-80 h-40 emerald-gradient" />
        </div>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I'm <span className="text-[#10b981]">Vishnu C R</span>
          </h1>

          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            Full Stack Developer | BTech CSE Student <br className="sm:block hidden" />
            Passionate about building scalable web applications and real-time systems.
          </p>
          
          <div className="mt-5 flex flex-wrap gap-4 relative z-10 pointer-events-auto">
            <a href="https://github.com/vishnurejii" target="_blank" rel="noopener noreferrer" className="bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-slate-700 hover:-translate-y-1 transition duration-300">GitHub</a>
            <a href="https://linkedin.com/in/vishnurejii" target="_blank" rel="noopener noreferrer" className="bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-slate-700 hover:-translate-y-1 transition duration-300">LinkedIn</a>
            <a href="mailto:vishnurejii2003@gmail.com" className="bg-tertiary py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-slate-700 hover:-translate-y-1 transition duration-300">Email</a>
            <a href="/cv.pdf" download className="bg-emerald-500 py-2 px-6 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-emerald-600 hover:-translate-y-1 transition duration-300 animate-pulse">Download CV</a>
          </div>
        </motion.div>
      </div>

      {/* 3D Computer Model */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <motion.div 
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <a href="#about" title="Scroll to About section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};