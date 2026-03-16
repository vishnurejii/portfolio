import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { github, preview } from "../assets";
import { cn } from "../utils/lib";

export const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();

  window.scrollTo(0, 0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const project = (PROJECTS as unknown as any[]).find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Project Not Found</h2>
        <Link to="/" className="ml-5 text-emerald-400 hover:text-emerald-500 underline text-xl">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <SectionWrapper>
      <>
        {/* Navigation */}
        <motion.div variants={textVariant()} className="mb-10">
          <Link to="/" className="text-secondary hover:text-white transition cursor-pointer flex items-center gap-2">
            &larr; Back to Portfolio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Project Deep Dive</p>
          <h2 className={styles.sectionHeadText}>{project.name}</h2>
        </motion.div>

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          {/* Project Details */}
          <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="flex-1">
            <h3 className="text-white text-[24px] font-bold mb-4">Overview</h3>
            <p className="text-secondary text-[17px] leading-[30px] whitespace-pre-wrap">
              {project.detailed_description || project.description}
            </p>

            {/* Links */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() => window.open(project.source_code_link, "_blank", "noreferrer")}
                className="bg-black-100 py-3 px-6 rounded-xl text-white font-bold flex gap-2 items-center hover:bg-slate-700 transition"
              >
                <img src={github} alt="github" className="w-6 h-6 object-contain" />
                Source Code
              </button>
              {project.live_site_link && (
                <button
                  onClick={() => window.open(project.live_site_link, "_blank", "noreferrer")}
                  className="bg-emerald-600 py-3 px-6 rounded-xl text-white font-bold flex gap-2 items-center hover:bg-emerald-700 transition"
                >
                  <img src={preview} alt="live" className="w-6 h-6 object-contain" />
                  Live Demo
                </button>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {project.tags.map((tag: any) => (
                <p key={tag.name} className={cn(tag.color, "text-[16px] bg-tertiary px-3 py-1 rounded-md")}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div variants={fadeIn("left", "spring", 0.5, 0.75)} className="flex-[0.8] w-full">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover rounded-2xl shadow-card"
            />
          </motion.div>
        </div>
      </>
    </SectionWrapper>
  );
};
