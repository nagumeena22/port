import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Award, Star, Trophy, Target, Crown, Zap, Heart, Lightbulb, Rocket } from "lucide-react";
import "./Leadership.css";

const Leadership = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const leadershipData = [
    {
      club: "AI Coding Club of KEC",
      role: "Treasurer",
      description: "Oversees the management of club members, organizes and executes events, ensuring smooth operations and participation.",
      icon: <Users size={40} />,
      color: "linear-gradient(135deg, #2f3241ff 0%, #392c46ff 100%)",
      glowColor: "#2d3143ff",
      accentColor: "#483535ff"
    },
    {
      club: "National Service Scheme",
      role: "Junior Executive",
      description: "Supports senior executives in organizing community outreach programs, working closely with volunteers to execute projects.",
      icon: <Award size={40} />,
      color: "linear-gradient(135deg, #241f25ff 0%, #5e4e50ff 100%)",
      glowColor: "#380d13ff",
      accentColor: "#4ecdc4"
    },
    {
      club: "AI CODING CLUB",
      role: "Executive Member",
      description: "Supports senior executives in organizing community outreach programs, working closely with volunteers to execute projects.",
      icon: <Trophy size={40} />,
      color: "linear-gradient(135deg, #3b434aff 0%, #7d9091ff 100%)",
      glowColor: "#2a3233ff",
      accentColor: "#f9ca24"
    }
  ];

  const floatingIcons = [Zap, Heart, Lightbulb, Rocket, Star, Target];

  return (
    <section className="leadership-section">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        {floatingIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </div>

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Crown className="title-icon" />
        </motion.div>
        Leadership Activities
      </motion.h2>

      <div className="card-container">
        {leadershipData.map((item, index) => (
          <motion.div
            key={index}
            className="leadership-card"
            style={{ background: item.color }}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, type: "spring" }}
            whileHover={{ 
              scale: 1.08, 
              rotateY: 5,
              boxShadow: `0 25px 50px ${item.glowColor}60`,
              zIndex: 10
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => controls.start({ scale: 1.2 })}
            onHoverEnd={() => controls.start({ scale: 1 })}
          >
            <motion.div 
              className="card-glow"
              animate={controls}
              style={{ background: `radial-gradient(circle, ${item.accentColor}40 0%, transparent 70%)` }}
            />

            <div className="card-header">
              <motion.div 
                className="icon-container"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <motion.h3 
                className="club-title"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                {item.club}
              </motion.h3>
            </div>

            <div className="role-block">
              <motion.h4 
                className="role-title"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Star size={16} className="role-icon" />
                </motion.div>
                {item.role}
              </motion.h4>
              <motion.p 
                className="role-description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.2 }}
              >
                {item.description}
              </motion.p>
            </div>

            <motion.div 
              className="card-decoration"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Target size={20} className="decoration-icon" />
            </motion.div>

            {/* Interactive particles on hover */}
            <div className="card-particles">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50
                  }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: item.accentColor,
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 15}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parallax effect based on mouse */}
      <motion.div 
        className="parallax-bg"
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
      />
    </section>
  );
};

export default Leadership;
