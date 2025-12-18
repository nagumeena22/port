// Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, ExternalLink, Sparkles, Target, Crown } from "lucide-react";
import "./Achievements.css";

const achievements = [
  {
    title: "Coding Contest",
    subtitle: "1st Place",
    description:
      "Secured top position in a competitive coding contest by solving complex algorithmic problems with optimal efficiency and accuracy.",
    icon: <Trophy size={40} />,
    color: "#ffd700",
    bgColor: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
    glowColor: "#ffd700"
  },
  {
    title: "Paper Presentation",
    subtitle: "1st Place",
    description:
      "Built a real-world project that transformed ideas into a functional solution by applying modern technologies and problem-solving skills.",
    icon: <Award size={40} />,
    color: "#ff6b6b",
    bgColor: "linear-gradient(135deg, #ff6b6b 0%, #ff4757 100%)",
    glowColor: "#ff6b6b"
  },
  
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="achievements-section">
      <div className="container">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Crown className="title-icon" />
          </motion.div>
          My Achievements
        </motion.h2>

        <motion.div
          className="grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 25px 50px ${item.glowColor}40`
              }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: item.color }}
            >
              <motion.div
                className="card-glow"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ background: `radial-gradient(circle, ${item.glowColor}30 0%, transparent 70%)` }}
              />

              <motion.div
                className="icon-container"
                style={{ background: item.bgColor }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>

              <motion.div
                className="card-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  style={{ color: item.color }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="subtitle"
                  style={{ color: item.color }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Target size={16} style={{ marginRight: '6px' }} />
                  {item.subtitle}
                </motion.p>

                <motion.p
                  className="description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>
              </motion.div>

              <motion.div
                className="card-decoration"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={20} style={{ color: item.color }} />
              </motion.div>

              {/* Interactive particles */}
              <div className="achievement-particles">
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
          ))}
        </motion.div>

        {/* Floating achievement badges */}
        <div className="floating-badges">
          {[Trophy, Award, Medal, Star].map((Icon, index) => (
            <motion.div
              key={index}
              className="floating-badge"
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
                left: `${10 + index * 20}%`,
                top: `${15 + index * 15}%`,
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

