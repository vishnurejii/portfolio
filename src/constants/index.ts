import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  project1,
  project2,
  project3,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

/* ---------------- NAVBAR ---------------- */

export const NAV_LINKS = [
  { id: "about", title: "About", link: null },
  { id: "work", title: "Projects", link: null },
  { id: "education", title: "Education", link: null },
  { id: "experience", title: "Experience", link: null },
  { id: "contact", title: "Contact", link: null },
] as const;

/* ---------------- SERVICES ---------------- */

export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
] as const;

/* ---------------- TECHNOLOGIES ---------------- */

export const TECHNOLOGIES = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
] as const;

/* ---------------- TIMELINES ---------------- */

export const EDUCATION = [
  {
    title: "BTech in Computer Science and Engineering",
    company_name: "Lovely Professional University",
    icon: web,
    iconBg: "#0f172a",
    date: "Present",
    points: [
      "Currently pursuing my BTech degree with a strong focus on software engineering, algorithms, and full-stack web development.",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Vijaya HSS, Wayanad",
    icon: web,
    iconBg: "#1e293b",
    date: "Past",
    points: [
      "Completed higher secondary education in science and mathematics.",
    ],
  },
  {
    title: "Matriculation",
    company_name: "GHSS Athirattukunnu",
    icon: web,
    iconBg: "#0f172a",
    date: "Past",
    points: [
      "Completed secondary education with strong foundational academics.",
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    title: "Community Volunteer",
    company_name: "Non-Governmental Organization (NGO)",
    icon: creator,
    iconBg: "#0f172a",
    date: "Past",
    points: [
      "Actively participated in community service and volunteering programs.",
      "Collaborated with diverse teams to organize local events and distribute resources to marginalized groups.",
      "Developed strong interpersonal and teamwork skills while working towards social welfare.",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    company_name: "Oracle",
    icon: backend,
    iconBg: "#1e293b",
    date: "Recent",
    points: [
      "Validated expertise in provisioning, managing, and maintaining Oracle Autonomous Databases.",
    ],
  },
  {
    title: "Oracle AI Certification",
    company_name: "Oracle",
    icon: web,
    iconBg: "#0f172a",
    date: "Recent",
    points: [
      "Demonstrated knowledge in integrating artificial intelligence solutions using Oracle Cloud infrastructure.",
    ],
  },
  {
    title: "NPTEL Cloud Computing",
    company_name: "NPTEL",
    icon: mobile,
    iconBg: "#1e293b",
    date: "Recent",
    points: [
      "Completed intensive course on Cloud Computing architecture, virtualization, and deployments.",
    ],
  },
] as const;

export const TRAININGS = [
  {
    title: "Data Structures and Algorithms Summer Training",
    company_name: "Lovely Professional University",
    icon: backend,
    iconBg: "#0f172a",
    date: "Summer",
    points: [
      "Completed intensive summer training focusing on advanced Data Structures and Algorithms using C++.",
      "Solved complex algorithmic problems and optimized code for better time and space complexity.",
    ],
  },
] as const;


/* ---------------- PROJECTS ---------------- */

export const PROJECTS = [
  {
    id: "travesia",
    name: "Travesia",
    description:
      "Full-stack MERN hotel booking system with date-based room availability validation and cloud image storage.",
    detailed_description: "Travesia is a comprehensive hotel booking platform built from the ground up to solve the complexities of real-time room availability. Using the MERN stack (MongoDB, Express, React, Node.js), it offers users a secure and seamless way to explore hotels, check dynamic date-based room availability, and make reservations.\n\nThe system integrates Clerk for robust user authentication and relies on Cloudinary for highly optimized, cloud-based image storage. For the admins, there is a dedicated secure dashboard that enables full CRUD operations on hotel listings and view bookings.",
    tags: [
      { name: "mongodb", color: "emerald-text-gradient" },
      { name: "express", color: "slate-text-gradient" },
      { name: "react", color: "cyan-text-gradient" },
      { name: "nodejs", color: "emerald-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/vishnurejii/Travesia---Hotel-booking-website",
    live_site_link: "https://travesia-hotel-booking-platform.vercel.app/",
  },
  {
    id: "readyup",
    name: "ReadyUp",
    description:
      "Event management web platform where startups can create and manage events with database connectivity and email notifications.",
    detailed_description: "ReadyUp serves as an all-in-one event management portal tailored specifically for startups and small organizations. Built dynamically using PHP and MySQL, it allows organizers to rapidly set up event pages, manage attendee registrations, and analyze event metrics.\n\nA key engineering feature is its automated email notification system, which instantly dispatches confirmations and event reminders to registered users. The frontend utilizes Tailwind CSS to ensure the platform remains fully responsive, sleek, and easily navigable across all mobile and desktop devices.",
    tags: [
      { name: "html", color: "slate-text-gradient" },
      { name: "tailwind", color: "cyan-text-gradient" },
      { name: "php", color: "slate-text-gradient" },
      { name: "mysql", color: "emerald-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/vishnurejii/ReadyUp-Event-Management-Platform",
    live_site_link: "",
  },
  {
    id: "helochat",
    name: "HeloChat",
    description:
      "Real-time messaging platform with chat, voice call, and video call functionality.",
    detailed_description: "HeloChat is a modern, blazing-fast real-time communication platform built on the MERN stack. Designed for seamless connectivity, the application supports instantaneous one-on-one text messaging, as well as integrated high-quality voice and video calling features utilizing WebRTC.\n\nThe real-time chat infrastructure is powered natively by Socket.io, enabling live typing indicators, instant read receipts, and online status tracking. State management on the client side ensures the messaging experience is fluid and never stutters, providing a premium end-user experience.",
    tags: [
      { name: "react", color: "cyan-text-gradient" },
      { name: "nodejs", color: "emerald-text-gradient" },
      { name: "mongodb", color: "slate-text-gradient" },
      { name: "socket.io", color: "teal-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/vishnurejii/helo--chat-App",
    live_site_link: "https://helo-chat-8g8ld6elm-vishnu-s-projects-efa10ec3.vercel.app/",
  },
] as const;

/* ---------------- TESTIMONIALS ---------------- */

export const TESTIMONIALS = [
  {
    testimonial:
      "Vishnu is a passionate developer who focuses on building modern web applications.",
    name: "Project Mentor",
    designation: "Software Engineer",
    company: "Tech Community",
    image: user1,
  },
  {
    testimonial:
      "Strong problem solving skills and dedication towards learning full stack development.",
    name: "Faculty Member",
    designation: "Professor",
    company: "Lovely Professional University",
    image: user2,
  },
  {
    testimonial:
      "A motivated student with great interest in coding and software development.",
    name: "Senior Developer",
    designation: "Mentor",
    company: "Developer Community",
    image: user3,
  },
] as const;

/* ---------------- SOCIAL LINKS ---------------- */

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://youtube.com",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/in/vishnurejii",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/vishnurejii",
  },
] as const;