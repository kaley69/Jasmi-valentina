import { useEffect, useState } from "react";

interface CursorHeart {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const emojis = ["💖", "💕", "💗", "❤️", "🩷"];

const CursorHearts = () => {
  const [hearts, setHearts] = useState<CursorHeart[]>([]);

  useEffect(() => {
    let throttle = 0;
    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - throttle < 120) return;
      throttle = now;

      const heart: CursorHeart = {
        id: now,
        x: e.clientX,
        y: e.clientY,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      };

      setHearts((prev) => [...prev.slice(-8), heart]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute pointer-events-none animate-bounce-in"
          style={{
            left: heart.x - 10,
            top: heart.y - 10,
            fontSize: "20px",
            animation: "bounce-in 0.3s ease-out forwards, fade-out 0.7s 0.3s ease-out forwards",
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default CursorHearts;
