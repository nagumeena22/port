import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Hero.css";
import heroImg from "../assests/image.svg";
import { ChevronDown, Sparkles, Code, Zap } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

import {
  Github,
  Linkedin,
  Mail,
  LeetCode,
  MessageCircle,
  Download
} from "lucide-react";
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [Sparkles, Code, Zap];

  return (
    <div className="hero-container">
      {/* Enhanced Floating animation circles */}
      <motion.div 
        className="circle c1"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="circle c2"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="circle c3"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating background icons */}
      <div className="floating-bg-icons">
        {floatingIcons.map((Icon, index) => (
          <motion.div
            key={index}
            className="bg-icon"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, opacity: 0 }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.3, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Icon size={30} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p 
          className="hello"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello 👋, I'm
        </motion.p>
        <motion.h1 
          className="name"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100 }}
        >
          Nagumeena Udayappan
        </motion.h1>
        <motion.p 
          className="role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          AI & Data Science Enthusiast | Full Stack Developer
        </motion.p>
        <motion.div
  className="hero-icons"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  <a href="https://github.com/nagumeena22" aria-label="GitHub">
    <Github />
  </a>
  <a href="https://www.linkedin.com/in/nagumeena22" aria-label="LinkedIn">
    <Linkedin />
  </a>
  <a href="mailto:nagumeenaudayappan22@gmail.com" aria-label="Email">
    <Mail />
  </a>
<a
  href="https://leetcode.com/u/Nagumeena_22"
  target="_blank"
  rel="noreferrer"
  aria-label="LeetCode"
>
  <SiLeetcode size={24} />
</a>

  <a href="https://wa.me/919842726696" aria-label="WhatsApp">
    <MessageCircle />
  </a>
  <a href="/resume.pdf" aria-label="Resume">
    <Download />
  </a>
</motion.div>

      
      </motion.div>
       
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.img 
          src={heroImg} 
          alt="hero" 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="image-glow"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={30} />
        </motion.div>
        <p>Scroll Down</p>
      </motion.div>

      {/* Parallax effect */}
      <motion.div 
        className="parallax-overlay"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
      />
    </div>
  );
}
