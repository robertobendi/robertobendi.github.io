import React, { useEffect, useState, useCallback } from 'react';
import { 
  Gamepad2,
  Glasses,
  Globe,
  Brain,
  Code2,
  Box,
  Workflow,
  Palette
} from 'lucide-react';

const MovingBackground = () => {
  const [blobs, setBlobs] = useState([]);
  const [icons, setIcons] = useState([]);
  const [time, setTime] = useState(0);

  const colors = ['#60A5FA', '#A78BFA', '#818CF8'];

  // Initialize with more complex blob properties
  useEffect(() => {
    setBlobs(Array.from({ length: 5 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      baseRadius: Math.random() * 40 + 30,
      radius: Math.random() * 40 + 30,
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.12,
      phase: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 10 + 5,
      frequency: Math.random() * 0.02 + 0.01,
      colorTransition: Math.random(),
      movementAngle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.001
    })));

    const iconComponents = [
      Gamepad2, Glasses, Globe, Brain, Code2, Box, Workflow, Palette
    ];
    
    setIcons(Array.from({ length: 12 }, () => ({
      Icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 20,
      speedX: (Math.random() - 0.5) * 0.03,
      speedY: (Math.random() - 0.5) * 0.03,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)]
    })));
  }, []);

  // Color interpolation helper
  const interpolateColor = useCallback((color1, color2, factor) => {
    const result = color1.match(/\d+/g).map((a, i) => {
      const b = color2.match(/\d+/g)[i];
      return Math.round(a * (1 - factor) + b * factor);
    });
    return `rgba(${result[0]}, ${result[1]}, ${result[2]}, 0.12)`;
  }, []);

  // Complex animation loop
  useEffect(() => {
    const animate = () => {
      setTime(t => t + 0.016); // Approximately 60fps

      setBlobs(prev => prev.map(blob => {
        // Organic movement pattern
        const angle = blob.movementAngle + blob.angularSpeed * time;
        const radiusVariation = Math.sin(time * blob.frequency + blob.phase) * blob.amplitude;
        const currentRadius = blob.baseRadius + radiusVariation;

        // Color transition
        const colorIndex = Math.floor(blob.colorTransition + time * 0.1) % colors.length;
        const nextColorIndex = (colorIndex + 1) % colors.length;
        const colorFactor = (blob.colorTransition + time * 0.1) % 1;
        const currentColor = interpolateColor(colors[colorIndex], colors[nextColorIndex], colorFactor);

        // Position calculation with organic movement
        const newX = ((blob.x + 
          Math.cos(angle) * blob.speedX + 
          Math.sin(time * 0.5) * 0.1 + 
          100) % 100);
        const newY = ((blob.y + 
          Math.sin(angle) * blob.speedY + 
          Math.cos(time * 0.5) * 0.1 + 
          100) % 100);

        return {
          ...blob,
          x: newX,
          y: newY,
          radius: currentRadius,
          color: currentColor,
          movementAngle: angle,
        };
      }));

      setIcons(prev => prev.map(icon => ({
        ...icon,
        x: ((icon.x + icon.speedX + 100) % 100),
        y: ((icon.y + icon.speedY + 100) % 100),
        rotation: (icon.rotation + icon.rotationSpeed) % 360
      })));
    };

    const intervalId = setInterval(animate, 16);
    return () => clearInterval(intervalId);
  }, [time, interpolateColor]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 blur-[90px] opacity-90">
        {blobs.map((blob, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-[2000ms] ease-in-out"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.radius}%`,
              height: `${blob.radius}%`,
              backgroundColor: blob.color,
              opacity: blob.opacity,
              transform: 'translate(-50%, -50%)',
              mixBlendMode: 'screen'
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0">
        {icons.map((icon, i) => {
          const IconComponent = icon.Icon;
          return (
            <div
              key={i}
              className="absolute transition-all duration-100 ease-linear"
              style={{
                left: `${icon.x}%`,
                top: `${icon.y}%`,
                transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
                opacity: icon.opacity
              }}
            >
              <IconComponent 
                size={icon.size} 
                color={icon.color}
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovingBackground;