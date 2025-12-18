import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Star, Sparkles, Target, Award } from "lucide-react";

export default function Experience() {
  const experienceData = [
    {
      role: "Generative AI Consortium",
      company: "Research & Development",
      duration: "Current",
      location: "Remote",
      description: [
        "Gained hands-on experience in machine learning and generative AI, focusing on building and training ML models.",
        "Developed AI-powered features including image-based product matching and ML-based predictions.",
        "Created data analysis dashboards using Python, Matplotlib, and Seaborn.",
        "Developed and trained ML models for various applications",
        "Worked with both supervised and unsupervised learning algorithms"
      ],
      color: "#00f5ff",
      bgColor: "linear-gradient(135deg, #00f5ff 0%, #0099cc 100%)",
      glowColor: "#00f5ff"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
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
    <section className="experience-section">
      <div className="container">
        <motion.h1
          className="experience-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Briefcase className="title-icon" />
          </motion.div>
          Professional Experience
        </motion.h1>

        <motion.div
          className="experience-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 25px 50px ${exp.glowColor}40`
              }}
              style={{ borderColor: exp.color }}
            >
            

              <motion.div
                className="experience-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="experience-icon"
                  style={{ background: exp.bgColor }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase size={40} />
                </motion.div>

                <motion.div
                  className="experience-info"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.h2
                    className="experience-role"
                    style={{ color: exp.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.role}
                  </motion.h2>
                  <motion.p
                    className="experience-company"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Target size={16} style={{ marginRight: '6px' }} />
                    {exp.company}
                  </motion.p>
                  <motion.div
                    className="experience-meta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="duration">
                      <Calendar size={16} style={{ marginRight: '6px' }} />
                      {exp.duration}
                    </span>
                    <span className="location">
                      <MapPin size={16} style={{ marginRight: '6px' }} />
                      {exp.location}
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="experience-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ul className="experience-points">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Star size={14} style={{ marginRight: '8px', color: exp.color }} />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="experience-decoration"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={20} style={{ color: exp.color }} />
              </motion.div>

              {/* Interactive particles */}
              <div className="experience-particles">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="particle"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      x: Math.random() * 80 - 40,
                      y: Math.random() * 80 - 40
                    }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      background: exp.color,
                      left: `${20 + i * 20}%`,
                      top: `${15 + i * 15}%`
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating experience badges */}
      
      </div>

      <style>{`
        .experience-section {
          min-height: 100vh;
          padding: 100px 6%;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .experience-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 153, 204, 0.2) 0%, transparent 50%);
        
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .experience-title {
          font-size: 3.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 60px;
          background: linear-gradient(135deg, #fff 0%, #e0e7ff 50%, #c7d2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .title-icon {
          color: #00f5ff;
          filter: drop-shadow(0 0 10px #00f5ff);
        }

        .experience-container {
          display: flex;
          justify-content: center;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          max-width: 800px;
          width: 100%;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          opacity: 0.6;
        }

        .experience-header {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 30px;
        }

        .experience-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 3;
          flex-shrink: 0;
        }

        .experience-icon svg {
          color: white;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .experience-info {
          flex: 1;
        }

        .experience-role {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .experience-company {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .experience-meta {
          display: flex;
          gap: 20px;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .duration, .location {
          display: flex;
          align-items: center;
        }

        .experience-content {
          position: relative;
          z-index: 3;
        }

        .experience-points {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .experience-points li {
          margin-bottom: 15px;
          padding-left: 25px;
          position: relative;
          line-height: 1.7;
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .experience-decoration {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.7;
        }

        .experience-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
        }

        .floating-exp-badges {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-exp-badge {
          position: absolute;
          opacity: 0.3;
          color: rgba(255, 255, 255, 0.6);
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
        }

        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .experience-card:hover .experience-points li {
          color: rgba(255, 255, 255, 1);
        }

        @keyframes backgroundShift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .experience-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .experience-card:hover::after {
          left: 100%;
        }

        @media (max-width: 768px) {
          .experience-section {
            padding: 80px 4%;
          }

          .experience-title {
            font-size: 2.5rem;
            margin-bottom: 40px;
          }

          .experience-card {
            padding: 30px;
          }

          .experience-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .experience-icon {
            width: 70px;
            height: 70px;
          }

          .experience-icon svg {
            width: 35px;
            height: 35px;
          }

          .experience-role {
            font-size: 1.6rem;
          }

          .experience-company {
            font-size: 1.1rem;
          }

          .experience-meta {
            flex-direction: column;
            gap: 8px;
            align-items: center;
          }

          .experience-points li {
            font-size: 1rem;
            padding-left: 20px;
          }
        }

        @media (max-width: 480px) {
          .experience-title {
            font-size: 2rem;
            flex-direction: column;
            gap: 10px;
          }

          .experience-card {
            padding: 25px;
          }

          .experience-icon {
            width: 60px;
            height: 60px;
          }

          .experience-icon svg {
            width: 30px;
            height: 30px;
          }

          .experience-role {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
