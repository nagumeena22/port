import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import { Code, Award, Zap, Star, Trophy, Target } from "lucide-react";

const techStack = [
  "python", "docker", "spring", "flask", "aws", "git", "github",
  "tensorflow", "c", "java", "react", "node", "mongodb",
  "html", "css", "javascript", "terraform", "bootstrap", "linux"
];

const certifications = [
  {
    name: "AWS Certified",
    issuer: "Amazon Web Services",
    image: "/aws-cert.png",
    color: "#ff9900"
  }
];

export default function Skills() {
  return (
    <section className="skills-section">
      <motion.h1
        className="section-title"
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
        Skills & Certifications
      </motion.h1>

      <div className="skills-container">
        {/* LEFT IMAGE */}
        <motion.div
          className="skills-image"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.img
            src="/workspace.jpg"
            alt="workspace"
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0 0 0 rgba(78, 205, 196, 0)",
                "0 0 40px rgba(78, 205, 196, 0.3)",
                "0 0 0 rgba(78, 205, 196, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="image-overlay"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Zap className="content-icon" />
            Tech Stack
          </motion.h2>

          <motion.div
            className="tech-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-card"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(78, 205, 196, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={`/icons/${tech}.svg`}
                  alt={tech}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10 + index, repeat: Infinity, ease: "linear" }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="tech-fallback" style={{ display: 'none' }}>
                  <Code size={32} />
                  <span>{tech.toUpperCase()}</span>
                </div>
                <motion.div
                  className="tech-glow"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.h2
            className="cert-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Trophy className="content-icon" />
            Certifications
          </motion.h2>

          <div className="cert-container">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-card"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.4 + index * 0.2,
                  type: "spring"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 15px 40px ${cert.color}30`
                }}
                style={{ borderColor: cert.color }}
              >
                <motion.div
                  className="cert-icon"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award size={40} color={cert.color} />
                </motion.div>
                <div className="cert-content">
                  <h3 style={{ color: cert.color }}>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <motion.div
                  className="cert-decoration"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star size={20} color={cert.color} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Floating skill indicators */}
          <div className="floating-skills">
            {[Zap, Target, Star].map((Icon, index) => (
              <motion.div
                key={index}
                className="skill-indicator"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                transition={{ delay: 2 + index * 0.3 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${15 + index * 30}%`,
                  top: `${20 + index * 25}%`,
                }}
              >
                <Icon size={24} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
