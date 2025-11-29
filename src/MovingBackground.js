import React, { useEffect, useState, useRef, useMemo } from 'react';
import { 
  Gamepad2,
  Glasses,
  Globe,
  Brain,
  Code2,
  Box,
  Workflow,
  Palette,
  Laptop,
  BrainCircuit,
  Gamepad,
  Rocket,
  MonitorPlay,
  Command,
  MessageSquare,
  Building2,
  Film,
  Terminal,
  Database,
  Smartphone
} from 'lucide-react';

const MovingBackground = React.memo(() => {
  const [blobs, setBlobs] = useState([]);
  const [icons, setIcons] = useState([]);
  const animationFrameRef = useRef(null);
  const timeRef = useRef(0);
  const blobRefs = useRef([]);
  const iconRefs = useRef([]);

  const colors = useMemo(() => ['#60A5FA', '#A78BFA', '#818CF8'], []);
  
  // Pre-compute color RGB values for faster interpolation
  const colorRgbs = useMemo(() => colors.map(color => {
    const hex = color.replace('#', '');
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }), [colors]);

  // Optimized color interpolation
  const interpolateColor = (rgb1, rgb2, factor) => {
    const r = Math.round(rgb1.r * (1 - factor) + rgb2.r * factor);
    const g = Math.round(rgb1.g * (1 - factor) + rgb2.g * factor);
    const b = Math.round(rgb1.b * (1 - factor) + rgb2.b * factor);
    return `rgba(${r}, ${g}, ${b}, 0.12)`;
  };

  // Initialize with more complex blob properties
  useEffect(() => {
    const iconComponents = [
      Gamepad2, Glasses, Globe, Brain, Code2, Box, Workflow, Palette,
      Laptop, BrainCircuit, Gamepad, Rocket, MonitorPlay, Command,
      MessageSquare, Building2, Film, Terminal, Database, Smartphone
    ];

    const initialBlobs = Array.from({ length: 5 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      baseRadius: Math.random() * 40 + 30,
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.02,
      opacity: 0.12,
      phase: Math.random() * Math.PI * 2,
      amplitude: Math.random() * 10 + 5,
      frequency: Math.random() * 0.02 + 0.01,
      colorTransition: Math.random(),
      movementAngle: Math.random() * Math.PI * 2,
      angularSpeed: (Math.random() - 0.5) * 0.001,
      colorIndex: Math.floor(Math.random() * colors.length)
    }));

    const initialIcons = Array.from({ length: 12 }, () => ({
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
    }));

    setBlobs(initialBlobs);
    setIcons(initialIcons);
    blobRefs.current = initialBlobs.map(blob => ({ ...blob }));
    iconRefs.current = initialIcons.map(icon => ({ ...icon }));
  }, [colors]);

  // Optimized animation loop using requestAnimationFrame
  useEffect(() => {
    if (blobs.length === 0 || icons.length === 0) return;

    let lastTime = performance.now();

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;
      timeRef.current += deltaTime;

      const time = timeRef.current;

      // Update blob positions using refs to avoid state updates
      const updatedBlobs = blobRefs.current.map(blob => {
        const angle = blob.movementAngle + blob.angularSpeed * time;
        const radiusVariation = Math.sin(time * blob.frequency + blob.phase) * blob.amplitude;
        const currentRadius = blob.baseRadius + radiusVariation;

        // Color transition
        const colorTransitionValue = blob.colorTransition + time * 0.1;
        const colorIndex = Math.floor(colorTransitionValue) % colors.length;
        const nextColorIndex = (colorIndex + 1) % colors.length;
        const colorFactor = colorTransitionValue % 1;
        const currentColor = interpolateColor(
          colorRgbs[colorIndex], 
          colorRgbs[nextColorIndex], 
          colorFactor
        );

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
      });

      // Update icon positions
      const updatedIcons = iconRefs.current.map(icon => ({
        ...icon,
        x: ((icon.x + icon.speedX + 100) % 100),
        y: ((icon.y + icon.speedY + 100) % 100),
        rotation: (icon.rotation + icon.rotationSpeed) % 360
      }));

      // Update refs
      blobRefs.current = updatedBlobs;
      iconRefs.current = updatedIcons;

      // Batch state update for smoother rendering
      setBlobs(updatedBlobs);
      setIcons(updatedIcons);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [blobs.length, icons.length, colors.length, colorRgbs]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 blur-[90px] opacity-90">
        {blobs.map((blob, i) => (
          <div
            key={i}
            className="absolute rounded-full will-change-transform"
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
              className="absolute will-change-transform"
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
});

MovingBackground.displayName = 'MovingBackground';

export default MovingBackground;