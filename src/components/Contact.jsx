import { Mail, Phone, Send, MessageSquare, User } from "lucide-react";
import "./Contact.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const handleSubmit = (e) => {
  e.preventDefault(); // stop page reload
  alert("Submitted successfully ✅");
};

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <MessageSquare className="title-icon" />
        </motion.div>
        Get In Touch
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ready to get started on your project? <br />
        Contact me now for a <span>Free consultation</span>.
      </motion.p>

      {/* CONTACT INFO */}
      <motion.div
        className="contact-cards"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="icon-container"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Mail size={24} />
          </motion.div>
          <span>nagumeenaudayappan22@gmail.com</span>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="icon-container"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Phone size={24} />
          </motion.div>
          <span>(+91) 9842726696</span>
        </motion.div>
      </motion.div>

      {/* FORM */}
      <motion.h2
        className="form-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Send a Message
      </motion.h2>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="input-group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <User size={18} className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.div
          className="input-group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <MessageSquare size={18} className="input-icon" />
          <textarea
            rows="6"
            name="message"
            placeholder="Send a message to get started."
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </motion.div>

        <motion.button
          type="submit"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(78, 205, 196, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={18} />
          Send Message
        </motion.button>
      </motion.form>

      {/* Floating decorative elements */}
      <div className="floating-decorations">
        <motion.div
          className="decoration-circle"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="decoration-circle"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>
    </section>
  );
}
