import React from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const blobCount = 6;
  const particleCount = 50;

  const colors = ["#00ff9f", "#00eaff", "#a66bff", "#ff4ecd"];

  // Generate blobs with random properties
  const blobs = Array.from({ length: blobCount }, (_, i) => ({
    color: colors[i % colors.length],
    size: 250 + Math.random() * 200,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 20 + Math.random() * 20,
  }));

  // Generate particles with random properties
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    dx: (Math.random() * 2 - 1).toFixed(2),
    dy: (Math.random() * 2 - 1).toFixed(2),
    duration: (Math.random() * 10 + 5).toFixed(2) + "s",
  }));

  return (
    <div className="bg-wrapper">
      <div className="blob-container">
        {blobs.map((blob, idx) => (
          <div
            key={idx}
            className="blob"
            style={{
              background: blob.color,
              width: blob.size + "px",
              height: blob.size + "px",
              top: blob.top + "%",
              left: blob.left + "%",
              animationDuration: blob.duration + "s",
            }}
          ></div>
        ))}

        {particles.map((p, idx) => (
          <span
            key={idx}
            className="particle"
            style={{
              "--x": p.x,
              "--y": p.y,
              "--dx": p.dx,
              "--dy": p.dy,
              "--duration": p.duration,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
