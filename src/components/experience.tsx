import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCE } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCE)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}
      </h3>

      <p
        className="text-secondary text-[16px] font-semibold m-0"
      >
        {experience.company_name}
      </p>
    </div>

    {/* Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point: string, i: number) => (
        <li
          key={i}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience Section
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Section Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My Journey
          </p>

          <h2 className={styles.sectionHeadText}>
            Training, Certifications & Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCE.map((experience: (typeof EXPERIENCE)[number], i: number) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};