import { motion } from "framer-motion";
import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfPath: string;
  badgeColor: string;
  issuerLogo: string;
};

const CERTIFICATES: Certificate[] = [
  {
    id: "oracle-adb",
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    issuer: "Oracle",
    date: "2025",
    description:
      "Validated expertise in provisioning, managing, and maintaining Oracle Autonomous Databases on Oracle Cloud Infrastructure.",
    pdfPath: "/certificates/oracle-adb.pdf",
    badgeColor: "from-red-700 to-red-500",
    issuerLogo: "🔴",
  },
  {
    id: "oracle-ai",
    title: "Oracle AI Foundations Certified Associate",
    issuer: "Oracle",
    date: "2025",
    description:
      "Demonstrated knowledge in integrating artificial intelligence solutions using Oracle Cloud infrastructure and AI services.",
    pdfPath: "/certificates/oracle-ai.pdf",
    badgeColor: "from-orange-600 to-red-600",
    issuerLogo: "🔴",
  },
  {
    id: "nptel-cloud",
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL – IIT",
    date: "2024",
    description:
      "Completed intensive course on Cloud Computing architecture, virtualization, service models, and cloud deployments.",
    pdfPath: "/certificates/nptel-cloud.pdf",
    badgeColor: "from-blue-700 to-cyan-600",
    issuerLogo: "🎓",
  },
];

type CertCardProps = {
  cert: Certificate;
  index: number;
};

const CertCard = ({ cert, index }: CertCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: index * 0.5,
      }}
      className="relative group bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 flex flex-col gap-4 shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-2 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 flex flex-col h-full gap-4">
        {/* Top badge */}
        <div className="flex items-center justify-between">
          <span
            className={`bg-gradient-to-r ${cert.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}
          >
            {cert.issuer}
          </span>
          <span className="text-secondary text-sm font-medium">{cert.date}</span>
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-3">
          <div
            className={`bg-gradient-to-br ${cert.badgeColor} w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            {cert.issuerLogo}
          </div>
          <h3 className="text-white font-bold text-[16px] leading-snug mt-1">
            {cert.title}
          </h3>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-700/60" />

        {/* Description */}
        <p className="text-secondary text-[13px] leading-relaxed flex-1">
          {cert.description}
        </p>

        {/* Action buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href={cert.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 text-[13px] font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View
          </a>

          <a
            href={cert.pdfPath}
            download
            className="flex items-center gap-2 bg-slate-700/40 hover:bg-slate-600/50 border border-slate-600 hover:border-slate-400 text-slate-300 text-[13px] font-semibold px-4 py-2 rounded-lg transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white to-transparent -rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </motion.div>
  );
};

// Certifications Section
export const Certifications = () => {
  return (
    <SectionWrapper idName="certifications">
      <>
        {/* Section Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Credentials</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="mt-4 text-secondary text-[15px] max-w-3xl leading-[28px]"
        >
          Professional certifications that validate my expertise in cloud
          computing, AI, and database technologies.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
