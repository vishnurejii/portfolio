import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

import { useNavigate } from "react-router-dom";

// Project Card
const ProjectCard = ({
  index,
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.05,
          speed: 450,
          perspective: 1000,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-2xl transition-all duration-300 relative group overflow-hidden"
      >
        <div 
          className="cursor-pointer" 
          onClick={() => navigate(`/project/${id}`)}
        >
          <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
            {/* Work image */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Glossy Flare Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent -rotate-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                View Details
              </span>
            </div>
          </div>
  
          {/* Work Info */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] group-hover:text-emerald-400 transition-colors duration-300">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] line-clamp-2">{description}</p>
          </div>
        </div>
  
        {/* Live Site & Github Floating Buttons */}
        <div className="absolute top-8 right-8 flex justify-end m-3 card-img_hover z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            onClick={(e) => { e.stopPropagation(); window.open(live_site_link, "_blank", "noreferrer"); }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
  
          {/* Github */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank", "noreferrer");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2 hover:scale-110 transition-transform"
          >
            <img
              src={github}
              alt="Github"
              title="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
  
        {/* Work Tag */}
        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag, tagIdx) => (
            <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[12px] font-medium px-2 py-0.5 rounded-md bg-white/5")}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
