import { useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface NeuralBackgroundProps {
  className?: string;
  nodeCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
}

export default function NeuralBackground({
  className = "",
  nodeCount = 60,
  connectionDistance = 150,
  mouseRadius = 200,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const isMobile = useIsMobile();

  const actualNodeCount = isMobile ? Math.floor(nodeCount * 0.35) : nodeCount;
  const actualConnectionDist = isMobile ? connectionDistance * 0.7 : connectionDistance;

  const initNodes = useCallback(
    (w: number, h: number) => {
      const nodes: Node[] = [];
      for (let i = 0; i < actualNodeCount; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 0.8,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
        });
      }
      nodesRef.current = nodes;
    },
    [actualNodeCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (nodesRef.current.length === 0) {
        initNodes(w, h);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    if (!isMobile) {
      canvas.addEventListener("mousemove", handleMouse);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    // Read CSS custom properties for theming
    const getColor = () => {
      const style = getComputedStyle(document.documentElement);
      const primary = style.getPropertyValue("--neon-blue").trim();
      const purple = style.getPropertyValue("--neon-purple").trim();
      return { primary, purple };
    };

    let frameCount = 0;

    const draw = () => {
      const nodes = nodesRef.current;
      ctx.clearRect(0, 0, w, h);
      frameCount++;

      const { primary, purple } = getColor();
      const mouse = mouseRef.current;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += node.pulseSpeed;

        // Bounce off edges with padding
        if (node.x < 0) { node.x = 0; node.vx *= -1; }
        if (node.x > w) { node.x = w; node.vx *= -1; }
        if (node.y < 0) { node.y = 0; node.vy *= -1; }
        if (node.y > h) { node.y = h; node.vy *= -1; }

        // Mouse repulsion (desktop only)
        if (!isMobile) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (1 - dist / mouseRadius) * 0.015;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        // Damping
        node.vx *= 0.999;
        node.vy *= 0.999;
      }

      // Draw connections (skip some frames on mobile)
      if (!isMobile || frameCount % 2 === 0) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < actualConnectionDist) {
              const opacity = (1 - dist / actualConnectionDist) * 0.15;

              // Connections near mouse glow brighter
              let extraGlow = 0;
              if (!isMobile) {
                const midX = (nodes[i].x + nodes[j].x) / 2;
                const midY = (nodes[i].y + nodes[j].y) / 2;
                const mouseDist = Math.sqrt(
                  (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
                );
                if (mouseDist < mouseRadius) {
                  extraGlow = (1 - mouseDist / mouseRadius) * 0.25;
                }
              }

              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `hsla(${primary}, ${Math.min((opacity + extraGlow) * 100, 40)}%)`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const r = node.radius + pulse * 0.6;
        const baseOpacity = 0.35 + pulse * 0.3;

        // Mouse proximity glow
        let glowRadius = 0;
        if (!isMobile) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            glowRadius = (1 - dist / mouseRadius) * 8;
          }
        }

        // Outer glow
        if (glowRadius > 1) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowRadius + r
          );
          gradient.addColorStop(0, `hsla(${primary}, ${Math.min(glowRadius * 6, 50)}%)`);
          gradient.addColorStop(1, `hsla(${primary}, 0%)`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius + r, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        const useColor = node.pulsePhase % (Math.PI * 4) > Math.PI * 2 ? purple : primary;
        ctx.fillStyle = `hsla(${useColor}, ${baseOpacity * 100}%)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    // Throttle on mobile: use lower FPS
    if (isMobile) {
      let lastTime = 0;
      const mobileDraw = (time: number) => {
        if (time - lastTime > 50) { // ~20fps on mobile
          lastTime = time;
          draw();
        } else {
          animRef.current = requestAnimationFrame(mobileDraw);
        }
      };
      animRef.current = requestAnimationFrame(mobileDraw);
    } else {
      animRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      if (!isMobile) {
        canvas.removeEventListener("mousemove", handleMouse);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile, actualNodeCount, actualConnectionDist, mouseRadius, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
