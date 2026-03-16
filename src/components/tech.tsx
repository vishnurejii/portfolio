import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { TECHNOLOGIES } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

// Technologies
export const Tech = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Technologies & Expertise</h2>
        </motion.div>

        {/* 3D Skill Balls */}
        <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
          {TECHNOLOGIES.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={fadeIn("up", "spring", 0.1, 0.75)} className="bg-tertiary p-6 rounded-2xl shadow-card hover:scale-105 transition duration-300">
            <h3 className="text-white text-[20px] font-bold mb-4">Languages</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• C++</li>
              <li>• JavaScript</li>
              <li>• PHP</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="bg-tertiary p-6 rounded-2xl shadow-card hover:scale-105 transition duration-300">
            <h3 className="text-white text-[20px] font-bold mb-4">Frontend & Backend</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• HTML & CSS</li>
              <li>• React</li>
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• Tailwind CSS</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)} className="bg-tertiary p-6 rounded-2xl shadow-card hover:scale-105 transition duration-300">
            <h3 className="text-white text-[20px] font-bold mb-4">Tools & Platforms</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• Git & GitHub</li>
              <li>• MongoDB</li>
              <li>• MySQL</li>
              <li>• VS Code</li>
              <li>• XAMPP</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn("up", "spring", 0.7, 0.75)} className="bg-tertiary p-6 rounded-2xl shadow-card hover:scale-105 transition duration-300">
            <h3 className="text-white text-[20px] font-bold mb-4">Soft Skills</h3>
            <ul className="text-secondary text-[16px] space-y-2">
              <li>• Problem Solving</li>
              <li>• Team Player</li>
              <li>• Adaptability</li>
            </ul>
          </motion.div>
        </div>
      </>
    </SectionWrapper>
  );
};
