import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImg from "../assests/mypic.png";
import { MapPin, Mail, Phone, Star, User, Sparkles, Code, Brain, Database } from "lucide-react";

const About = () => {
  const infoItems = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Erode, Tamil Nadu, India",
      color: "#ff6b6b"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "nagumeenaudayappan22@gmail.com",
      color: "#4ecdc4"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+91 9842726696",
      color: "#45b7d1"
    },
    {
      icon: <Star size={24} />,
      title: "Areas of Interest",
      content: ["Full Stack", "DATA SCIENCE", "BACKEND DEVELOPMENT", "AI & Machine Learning"],
      color: "#f9ca24",
      isTags: true
    }
  ];

  const interestIcons = [Code, Brain, Database, Sparkles];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Image */}
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.img 
            src={profileImg} 
            alt="Profile" 
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                "0 0 0 rgba(78, 205, 196, 0)",
                "0 0 30px rgba(78, 205, 196, 0.3)",
                "0 0 0 rgba(78, 205, 196, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="image-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <User className="about-icon" />
            </motion.div>
            About Me
          </motion.h2>

          <motion.p 
            className="about-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Passionate AI & Data Science enthusiast crafting solutions and
            sleek web experiences. Dedicated to transforming ideas into
            real-world applications with creativity.
          </motion.p>

          <div className="about-info">
            {infoItems.map((item, index) => (
              <motion.div 
                key={index}
                className="info-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <motion.div 
                  className="icon-container"
                  style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)` }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <div className="info-content">
                  <h4 style={{ color: item.color }}>{item.title}</h4>
                  {item.isTags ? (
                    <div className="tags">
                      {item.content.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          className="tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + tagIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, backgroundColor: item.color }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating interest icons */}
          <div className="floating-interest-icons">
            {interestIcons.map((Icon, index) => (
              <motion.div
                key={index}
                className="interest-icon"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
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
                  left: `${20 + index * 20}%`,
                  top: `${10 + index * 15}%`,
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
};

export default About;
