// AchievementsCertifications.jsx
import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle, Trophy } from "lucide-react";
import "./AchievementsCertifications.css";

import oracle from "../assests/oracle.png";
import mongo from "../assests/mongo.png";

export default function AchievementsCertifications() {
  const certifications = [
    {
      org: "MongoDB",
      title: "MongoDB Certified Developer Associate",
      issued: "Jan 2025",
      skills: "MongoDB data modeling, querying, aggregation, indexing",
      img: mongo,
      color: "#4DB33D",
      bgColor: "linear-gradient(135deg, #4DB33D 0%, #2E7030 100%)",
      glowColor: "#4DB33D"
    },
    {
      org: "Oracle",
      title: "Oracle Apex",
      issued: "Oct 2024",
      skills: "Oracle database using SQL and PL/SQL, writing queries, procedures and functions",
      img: oracle,
      color: "#F80000",
      bgColor: "linear-gradient(135deg, #F80000 0%, #B30000 100%)",
      glowColor: "#F80000"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="certifications-section">
      <div className="container">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Trophy className="title-icon" />
          Certifications
        </motion.h2>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              className="certification-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 25px 50px ${item.glowColor}40`
              }}
              whileTap={{ scale: 0.95 }}
              style={{ borderColor: item.color }}
            >
              <div className="certification-header">
                <div
                  className="certification-icon"
                  style={{ background: item.bgColor }}
                >
                  <Award size={40} />
                </div>

                <div className="certification-image-container">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="certification-image"
                  />
                </div>
              </div>

              <div className="certification-content">
                <h3 style={{ color: item.color }}>{item.title}</h3>

                <div className="certification-meta">
                  <span
                    className="organization"
                    style={{ color: item.color }}
                  >
                    <CheckCircle size={16} />
                    {item.org}
                  </span>

                  <span className="issued-date">
                    <Calendar size={16} />
                    Issued: {item.issued}
                  </span>
                </div>

                <p className="certification-skills">
                  <strong>Skills:</strong> {item.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
