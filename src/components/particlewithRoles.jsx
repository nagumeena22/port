// ParticleWithRoles.jsx
import React, { useRef, useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'AI Engineer', 'Data Analyst'];

const ParticleWithRoles = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const shapes = ['circle', 'triangle', 'square'];
    const colors = ['#ff3f81', '#ffba08', '#8cfaff', '#6a0dad', '#3fff7f'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = 2 + Math.random() * 4;
        this.speedX = -1 + Math.random() * 2;
        this.speedY = -1 + Math.random() * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        switch (this.shape) {
          case 'circle': ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); break;
          case 'triangle':
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            break;
          case 'square':
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            break;
          default: ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    }

    const particlesArray = [];
    for (let i = 0; i < 150; i++) particlesArray.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typing effect
  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 50;
    const pause = 1500;

    let timeout;

    if (!deleting && charIndex <= roles[roleIndex].length) {
      setText(roles[roleIndex].substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(prev => prev + 1), typeSpeed);
    } else if (deleting && charIndex >= 0) {
      setText(roles[roleIndex].substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(prev => prev - 1), deleteSpeed);
    } else if (!deleting && charIndex > roles[roleIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '48px',
        textAlign: 'center',
        textShadow: '0 0 10px #fff, 0 0 20px #ff3f81, 0 0 30px #ffba08'
      }}>
        {text}
      </h1>
    </div>
  );
};

export default ParticleWithRoles;
