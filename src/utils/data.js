import{
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaBrain
    
}from 'react-icons/fa';
import { MdBarChart } from "react-icons/md";
import {BiLogoJavascript} from 'react-icons/bi';
import { SiRedux, SiMongodb, SiFirebase, SiBootstrap, SiTailwindcss, SiExpress, SiMysql, SiMui, SiFigma, SiCplusplus } from 'react-icons/si';
import {VscVscode, VscCommentUnresolved, VscTerminalPowershell} from 'react-icons/vsc';
import {FaGitAlt, FaXTwitter} from 'react-icons/fa6';
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";
import PROJECT_IMG_8 from "../assets/images/project-8.png";


export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
  ];
  
  export const STATS = [
    { id: "01", count: "03", label: "Years of \nExperience" },
    { id: "02", count: "12", label: "Certifications \nEarned" },
    { id: "03", count: "11", label: "Projects \nCompleted" },
   
  ];
  
  export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "01", label: "Languages", value: "languages" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "skills" },
  ];

  export const SKILLS = [
    
    {
      id: "01",
      icon: FaHtml5,
      skill: "HTML",
      progress: 100,
      type: "frontend",
      description:
        "Expert in writing semantic and accessible HTML5, ensuring well-structured, SEO-friendly web content with best practices for modern web development.",
    },
    {
      id: "02",
      icon: FaCss3Alt,
      skill: "CSS",
      progress: 95,
      type: "frontend",
      description:
          "Proficient in modern CSS, including Flexbox, Grid, animations, and responsive design. Experienced in writing maintainable styles using pre-processors like SASS and frameworks like Tailwind CSS.",
  },
    {
        id: "03",
        icon: BiLogoJavascript,
        skill: "JavaScript",
        progress: 85,
        type: "frontend",
        description:
          "Strong command of JavaScript, including ES6+ features, functional programming, and asynchronous operations. Skilled in building interactive and high-performance web applications.",
      },
      {
        id: "04",
        icon: FaReact,
        skill: "React JS",
        progress: 90,
        type: "frontend",
        description:
          "Highly proficient in developing dynamic, component-based web applications using React.js. Experienced in state management (Redux, Context API) and building optimized, scalable front-end solutions.",
      },
      {
        id: "05",
        icon: SiTailwindcss,
        skill: "Tailwind CSS",
        progress: 99,
        type: "frontend",
        description:
            "Experienced in using Tailwind CSS to build modern, responsive, and utility-first UI designs. Proficient in optimizing styles for performance and maintainability.",
    },
      {
        id: "06",
        icon: FaNodeJs,
        skill: "Node.js",
        progress: 95,
        type: "backend",
        description:
          "Experienced in developing scalable and efficient backend applications using Node.js. Proficient in event-driven architecture, asynchronous programming, and API development.",
      },
      {
        id: "07",
        icon: SiExpress,
        skill: "Express.js",
        progress: 95,
        type: "backend",
        description:
          "Expert in building RESTful APIs and server-side applications with Express.js. Skilled in middleware integration, authentication, and optimizing server performance.",
      },
      {
        id: "08",
        icon: SiMongodb,
        skill: "MongoDB",
        progress: 90,
        type: "backend",
        description:
          "Experienced in designing, managing, and querying NoSQL databases using MongoDB. Proficient in schema design, aggregation framework, indexing, and performance optimization.",
      },
      {
        id: "09",
        icon: SiMysql,
        skill: "SQL",
        progress: 90,
        type: "backend",
        description:
          "Strong understanding of relational databases and SQL. Skilled in writing efficient queries, designing normalized database schemas, and optimizing database performance for scalability.",
      },
      {
        id: "10",
        icon: SiFigma,
        skill: "Figma",
        progress: 85,
        type: "tools",
        description:
            "Proficient in UI/UX design using Figma. Experienced in creating wireframes, prototypes, and high-fidelity designs to enhance user experience and product aesthetics.",
    },
    {
      id: "11",
      icon: FaGithub,
      skill: "GitHub",
      progress: 100,
      type: "tools",
      description:
          "Experienced in using Git and GitHub for version control, collaboration, and repository management. Proficient in branching strategies, pull requests, and code reviews.",
  },
  {
    id: "12",
    icon: MdBarChart,
    skill: "Power BI",
    progress: 95,
    type: "tools",
    description:
        "Proficient in data visualization and business intelligence using Power BI. Skilled in creating interactive dashboards, data modeling, and DAX calculations for insightful analytics.",
  },
  {
    id: "13",
    icon: SiBootstrap,
    skill: "Bootstrap",
    progress: 90,
    type: "frontend",
    description:
        "Experienced in using Bootstrap to build responsive and mobile-first web designs. Skilled in utilizing Bootstrap's grid system, components, and utilities for efficient UI development.",
},
{
  id: "14",
  icon: FaBrain,
  skill: "Problem Solving",
  progress: 90,
  type: "skills",
  description:
      "Strong analytical and critical thinking skills to identify, analyze, and solve complex problems efficiently. Experienced in applying logical reasoning and algorithmic approaches to optimize solutions.",
},
{
  id: "15",
  icon: SiCplusplus,
  skill: "C++",
  progress: 85,
  type: "languages",
  description:
      "Proficient in C++ programming with experience in object-oriented programming (OOP), data structures, algorithms, and competitive programming. Skilled in writing efficient and optimized code.",
}
  ];
  
  export const ABOUT_ME = {
    content: `🚀 Passionate. Innovative. Results-Driven.  

    I am a Full-Stack Developer who thrives on turning ideas into reality through clean, scalable, and high-performance web applications. With a deep understanding of React.js, Node.js, and Express.js, I craft seamless digital experiences that are not only visually stunning but also optimized for speed, accessibility, and user engagement.  

    🔥 Why work with me? 
    - I build solutions, not just websites.  
    - I analyze & optimize performance to ensure lightning-fast applications.  
    - I embrace challenges, constantly pushing the boundaries of innovation.  
    - I stay ahead of trends, keeping up with the latest technologies to deliver cutting-edge experiences.  

    💡 Whether you're a startup looking for an MVP or an enterprise in need of a scalable web solution, I'm here to bring your vision to life. Let's collaborate and build something extraordinary together!`,

    socialLinks: [
      { id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
      { id: "02", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/vedantdeshpande.03/" },
      { id: "03", label: "Twitter", icon: FaXTwitter, link: "#" },
      { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/vedant-deshpande-853b6025a/" },
      { id: "05", label: "GitHub", icon: FaGithub, link: "https://github.com/Vedant-Santosh-Deshpande" }
    ],

    email: "vedantdeshpande03@gmail.com",
    phone: "+91-9765877307",
    website: "None",
};


  export const PROJECTS = [
    {
      id: 1,
      title: 
        "AI Trip Planner",
      image: PROJECT_IMG_7,
      tags: ["React","Gemini AI", "Firebase", "Node js","Tailwind CSS"],
    },{
      id: 2,
      title: 
        "Modern financial analytics dashboard UI",
      image: PROJECT_IMG_8,
      tags: ["react", "node.js", "Tailwind CSS", "Chart.js","jwt-authentication","data visualization","Full Stack Development"],
    },
    {
      id: 3,
      title: 
        "Responsive Nursery App using MERN ",
      image: PROJECT_IMG_1,
      tags: ["React","Node.js"],
    },
    {
      id: 7,
      title: 
        "Responsive Contact Management Website Using React JS ",
      image: PROJECT_IMG_2,
      tags: ["React"],
    },
    {
      id: 8,
      title: 
        "Responsive Amazon, Netflix, Twitter Clones",
      image: PROJECT_IMG_3,
      tags: ['HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        id: 4,
        title: 
          "Portfolio Website Using React JS and Tailwind CSS ",
        image: PROJECT_IMG_5,
        tags: ["React", "Tailwind CSS"],
      },
      {
        id: 5,
        title: 
          "Covid 19 Data Analysis and Visualization",
        image: PROJECT_IMG_4,
        tags: ["Python Libraries", "Data Visualization", "Machine Learning"],
      },
      {
        id: 6,
        title: 
          "Number System Convertion Using C++",
        image: PROJECT_IMG_6,
        tags: ["C++"],
      },
      
  ];
  
  