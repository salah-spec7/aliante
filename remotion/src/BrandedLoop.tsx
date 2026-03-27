import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

const NAVY = "#000080";
const BG = "#0E0E0E";

export const BrandedLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Seamless loop progress (0 to 1)
  const progress = frame / durationInFrames;
  const angle = progress * Math.PI * 2;

  // Slow rotating gradient
  const gradAngle = 135 + Math.sin(angle) * 30;
  const gradAngle2 = 225 + Math.cos(angle) * 20;

  // Pulsing navy glow intensity
  const glowOpacity = 0.15 + Math.sin(angle) * 0.08;
  const glow2Opacity = 0.1 + Math.cos(angle * 0.7) * 0.06;

  // Floating geometric shapes
  const shapes = Array.from({ length: 8 }, (_, i) => {
    const seed = i * 1.618;
    const speed = 0.3 + (i % 3) * 0.2;
    const x = 15 + (i * 12) % 85;
    const baseY = 10 + (i * 15) % 80;
    const y = baseY + Math.sin(angle * speed + seed) * 8;
    const rotation = Math.sin(angle * speed * 0.5 + seed) * 45;
    const scale = 0.6 + Math.sin(angle * speed * 0.3 + seed) * 0.3;
    const opacity = 0.04 + Math.sin(angle * speed * 0.8 + seed) * 0.025;
    const size = 60 + i * 30;

    return { x, y, rotation, scale, opacity, size, i };
  });

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => {
    const seed = i * 2.37;
    const speed = 0.2 + (i % 4) * 0.15;
    const x = (i * 5.3) % 100;
    const y = (i * 7.1 + Math.sin(angle * speed + seed) * 15) % 100;
    const opacity = 0.15 + Math.sin(angle * speed + seed) * 0.1;
    const size = 2 + (i % 3);

    return { x, y, opacity, size };
  });

  // Light ray sweep
  const rayX = 30 + Math.sin(angle * 0.5) * 40;
  const rayOpacity = 0.06 + Math.sin(angle) * 0.03;

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Base radial gradient */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${NAVY}22 0%, transparent 70%)`,
          opacity: glowOpacity + 0.1,
        }}
      />

      {/* Rotating gradient overlay 1 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradAngle}deg, transparent 30%, ${NAVY}18 50%, transparent 70%)`,
          opacity: glowOpacity,
        }}
      />

      {/* Rotating gradient overlay 2 */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(${gradAngle2}deg, transparent 20%, ${NAVY}12 45%, transparent 75%)`,
          opacity: glow2Opacity,
        }}
      />

      {/* Light ray sweep */}
      <div
        style={{
          position: "absolute",
          left: `${rayX}%`,
          top: 0,
          width: "30%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${NAVY}15, transparent)`,
          opacity: rayOpacity,
          transform: "skewX(-15deg)",
        }}
      />

      {/* Geometric shapes */}
      {shapes.map(({ x, y, rotation, scale, opacity, size, i }) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            border: `1px solid ${NAVY}`,
            borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "4px" : "0",
            transform: `rotate(${rotation}deg) scale(${scale})`,
            opacity,
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map(({ x, y, opacity, size }, i) => (
        <div
          key={`p-${i}`}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: i % 3 === 0 ? NAVY : "#F5F5F2",
            opacity,
          }}
        />
      ))}

      {/* Subtle vignette */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, ${BG} 100%)`,
          opacity: 0.6,
        }}
      />

      {/* Noise texture overlay (simulated with gradients) */}
      <AbsoluteFill
        style={{
          opacity: 0.03,
          backgroundImage: `
            repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%) 
            0 0 / 4px 4px
          `,
          mixBlendMode: "overlay",
        }}
      />
    </AbsoluteFill>
  );
};
