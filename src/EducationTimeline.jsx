import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin, Star, Sparkles, BookOpen } from "lucide-react";
import "./EducationTimeline.css";

const educationData = [
  {
    title: "B. Tech - Artificial Intelligence and Data Science",
    institute: "Kongu Engineering College, Erode",
    score: "8.41 CGPA",
    year: "2023 - 2027",
    location: "Erode, Tamil Nadu",
    side: "left",
    color: "#4ecdc4",
    bgColor: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
    glowColor: "#4ecdc4"
  },
  {
    title: "HSC - Higher Secondary Education",
    institute: "Rd International School, CBSE, Erode",
    score: "80%",
    year: "2018 - 2019",
    location: "Erode, Tamil Nadu",
    side: "right",
    color: "#ffd700",
    bgColor: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
    glowColor: "#ffd700"
  },
  {
    title: "SSLC - Secondary School Education",
    institute: "Rd International School, CBSE, Erode",
    score: "72%",
    year: "2016 - 2017",
    location: "Erode, Tamil Nadu",
    side: "left",
    color: "#9c88ff",
    bgColor: "linear-gradient(135deg, #9c88ff 0%, #6c5ce7 100%)",
    glowColor: "#9c88ff"
  },
];

export default function EducationTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="education-section">
      <div className="container">
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <GraduationCap className="title-icon" />
          </motion.div>
          Education Journey
        </motion.h2>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${item.side}`}
              variants={itemVariants}
            >
              <motion.div
                className="content"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 25px 50px ${item.glowColor}40`
                }}
                style={{ borderColor: item.color }}
              >
                <motion.div
                  className="card-glow"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ background: `radial-gradient(circle, ${item.glowColor}30 0%, transparent 70%)` }}
                />

                <motion.div
                  className="education-header"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="education-icon"
                    style={{ background: item.bgColor }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <BookOpen size={30} />
                  </motion.div>

                  <motion.div
                    className="education-meta"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="year" style={{ color: item.color }}>
                      <Calendar size={16} style={{ marginRight: '6px' }} />
                      {item.year}
                    </span>
                    <span className="location">
                      <MapPin size={16} style={{ marginRight: '6px' }} />
                      {item.location}
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="education-content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    style={{ color: item.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="institute"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Award size={16} style={{ marginRight: '6px' }} />
                    {item.institute}
                  </motion.p>
                  <motion.p
                    className="score"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} style={{ marginRight: '6px', color: item.color }} />
                    Score: {item.score}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="education-decoration"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles size={20} style={{ color: item.color }} />
                </motion.div>

                {/* Interactive particles */}
                <div className="education-particles">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                        x: Math.random() * 60 - 30,
                        y: Math.random() * 60 - 30
                      }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      style={{
                        background: item.color,
                        left: `${25 + i * 25}%`,
                        top: `${20 + i * 20}%`
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="icon"
                style={{ background: item.bgColor, boxShadow: `0 0 20px ${item.glowColor}` }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap size={24} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating education badges */}
        <div className="floating-edu-badges">
          {[GraduationCap, BookOpen, Award].map((Icon, index) => (
            <motion.div
              key={index}
              className="floating-edu-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10 + index * 2, repeat: Infinity, ease: "linear" }
              }}
              style={{
                left: `${15 + index * 25}%`,
                top: `${10 + index * 20}%`,
              }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
