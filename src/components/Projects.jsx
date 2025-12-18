import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import ecommerceImg from "../assests/ecommerceImg.png";
import dashboardImg from "../assests/dashboardImg.png";
import cropImg from "../assests/cropImg.png";
import { Github, ChevronLeft, ChevronRight, ExternalLink, Code, Star, Zap } from "lucide-react";

const projects = [
  {
    title: "Advance E-commerce Website",
    role: "Team Lead",
    description:
      `Developed an AI-powered fashion e-commerce website using React, Node.js, Express, and MongoDB.
Users can upload a dress.Built a responsive and interactive UI for smooth browsing and shopping experience.
Implemented secure REST APIs for authentication, product management, and cart functionality.
Enhanced product discovery through personalized, image-based recommendations.`,
    github: "https://github.com/nagumeena22/advance-ecommerce-website",
    img: ecommerceImg,
    color: "#ff6b6b",
    tech: ["React", "Node.js", "MongoDB", "AI"]
  },
  {
    title: "ecommerce-dashboard",
    role: "Full Stack Developer",
    description:
      `Developed an e-commerce analytics dashboard to perform data analysis using raw transactional data.
Used Python with Matplotlib and Seaborn to create insightful visualizations and plots.
Analyzed key metrics such as sales trends, revenue, customer behavior, and product performance.
Built multiple charts to identify patterns, growth opportunities, and business insights.
Enabled data-driven decision-making through clear and interactive visual analysis."`,
    github: "https://github.com/nagumeena22/ecommerce-dashboard",
    img: dashboardImg,
    color: "#4ecdc4",
    tech: ["Python", "Matplotlib", "Seaborn", "Analytics"]
  },
  {
    title: "AI Crop Recommendation System",
    role: "ML Engineer",
    description:
      `Developed a crop prediction system using machine learning models to recommend the most suitable crop.
The model analyzes features such as soil nutrients, temperature, humidity, rainfall, and pH levels.
Trained and evaluated ML algorithms to achieve accurate crop recommendations.
Helps farmers make data-driven decisions to improve yield and reduce risk.
Provides an efficient and scalable solution for smart agriculture applications.`,
    github: "https://github.com/nagumeena22/crop-recommendation-flask",
    img: cropImg,
    color: "#f9ca24",
    tech: ["ML", "Flask", "Python", "Agriculture"]
  }
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prevProject = () => {
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const nextProject = () => {
    setIndex((prev) =>
      (prev + 1) % projects.length
    );
    setIsAutoPlaying(false);
  };

  const project = projects[index];

  return (
    <section className="projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Code className="title-icon" />
        </motion.div>
        Featured Projects
      </motion.h1>

      <div className="carousel-container">
        <motion.button
          className="nav-btn left"
          onClick={prevProject}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ChevronLeft size={30} />
        </motion.button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ borderColor: project.color }}
          >
            <motion.div
              className="project-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="project-img"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="image-overlay"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ background: `linear-gradient(45deg, ${project.color}40, transparent)` }}
              />
            </motion.div>

            <motion.div
              className="project-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h2
                style={{ color: project.color }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.title}
              </motion.h2>

              <motion.div
                className="meta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="role" style={{ background: `${project.color}20`, color: project.color }}>
                  <Star size={14} />
                  {project.role}
                </span>
              </motion.div>

              <motion.div
                className="tech-stack"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: project.color }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {project.description}
              </motion.p>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${project.color}40`
                }}
                whileTap={{ scale: 0.95 }}
                style={{ background: `linear-gradient(45deg, ${project.color}, ${project.color}dd)` }}
              >
                <Github size={18} />
                View on GitHub
                <ExternalLink size={16} />
              </motion.a>
            </motion.div>

            {/* Floating elements */}
            <div className="floating-elements">
              <motion.div
                className="floating-icon"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ color: project.color }}
              >
                <Zap size={24} />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="nav-btn right"
          onClick={nextProject}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ChevronRight size={30} />
        </motion.button>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {projects.map((_, i) => (
          <motion.button
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            onClick={() => {
              setIndex(i);
              setIsAutoPlaying(false);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: i === index ? project.color : 'rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
