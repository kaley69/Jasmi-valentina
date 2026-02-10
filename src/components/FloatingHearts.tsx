import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const heartEmojis = ["❤️", "💕", "💖", "💗", "💘", "💝", "🩷", "♥️"];

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: 14 + Math.random() * 24,
        duration: 6 + Math.random() * 8,
        delay: 0,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      };
      setHearts((prev) => [...prev.slice(-15), heart]);
    };

    const interval = setInterval(createHeart, 800);
    // Create a few initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-up animate-sway"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s, 3s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
