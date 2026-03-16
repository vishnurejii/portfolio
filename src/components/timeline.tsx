import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type TimelineItem = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: readonly string[];
};

type TimelineCardProps = {
  item: TimelineItem;
};

// Timeline Card
const TimelineCard = ({ item }: TimelineCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#0f172a", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
    date={item.date}
    iconStyle={{ background: item.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={item.icon}
          alt={item.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {item.title}
      </h3>

      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {item.company_name}
      </p>
    </div>

    {/* Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {item.points.map((point, i) => (
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

type TimelineSectionProps = {
  idName: string;
  subText: string;
  headText: string;
  items: readonly TimelineItem[];
};

// Timeline Section
export const TimelineSection = ({ idName, subText, headText, items }: TimelineSectionProps) => {
  return (
    <SectionWrapper idName={idName}>
      <>
        {/* Section Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {subText}
          </p>

          <h2 className={styles.sectionHeadText}>
            {headText}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {items.map((item, i) => (
              <TimelineCard key={i} item={item} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
