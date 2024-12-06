import React, { useEffect, useRef } from 'react';

const MovingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const colors = [
      'rgba(96, 165, 250, 0.12)', // blue
      'rgba(167, 139, 250, 0.12)', // purple
      'rgba(129, 140, 248, 0.12)', // indigo
    ];

    const blobs = Array.from({ length: 3 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 700 + 500,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.005;
      
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(blob => {
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        if (blob.x < -blob.radius) blob.x = canvas.width + blob.radius;
        if (blob.x > canvas.width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = canvas.height + blob.radius;
        if (blob.y > canvas.height + blob.radius) blob.y = -blob.radius;

        // Increased base brightness and pulse intensity
        const brightness = 1.2 + Math.sin(time + blob.phase) * 0.4;

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );

        const baseColor = blob.color.replace('rgba(', '').replace(')', '').split(',');
        const currentOpacity = parseFloat(baseColor[3]) * brightness;
        const brighterColor = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${currentOpacity})`;
        
        gradient.addColorStop(0, brighterColor);
        gradient.addColorStop(1, 'rgba(2, 6, 23, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          filter: 'blur(90px) brightness(1.3)',
          opacity: 0.9,
        }}
      />
    </div>
  );
};

export default MovingBackground;