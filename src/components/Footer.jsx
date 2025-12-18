import React from "react";
import "./Footer.css";
import {
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Mail
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/nagumeena22" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://github.com/nagumeena22" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="https://wa.me/9842726696" target="_blank" rel="noreferrer">
          <MessageCircle />
        </a>
        <a href="https://www.instagram.com/nagumeena_22" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a href="mailto:nagumeenaudayappan22@gmail.com">
          <Mail />
        </a>
      </div>

      <p className="footer-text">
        This website was made with <span>⚛️</span>
      </p>

      <p className="footer-credit">
        © {new Date().getFullYear()} Nagumeena Udayappan
      </p>
    </footer>
  );
}
