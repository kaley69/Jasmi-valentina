import { useState, useCallback } from "react";

interface RunawayButtonProps {
  onCaught?: () => void;
}

const RunawayButton = ({ onCaught }: RunawayButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [attempts, setAttempts] = useState(0);

  const messages = [
    "NO 🙃",
    "Nope! 😜",
    "Try again 😏",
    "Can't catch me! 🏃",
    "Hehe 😆",
    "Not happening 💨",
    "Too slow! 😝",
    "Almost! 🤭",
  ];

  const runAway = useCallback(() => {
    const maxX = window.innerWidth * 0.3;
    const maxY = window.innerHeight * 0.3;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    setPosition({ x: newX, y: newY });
    setScale(Math.max(0.5, scale - 0.05));
    setAttempts((prev) => prev + 1);
  }, [scale]);

  const handleClick = () => {
    onCaught?.();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={runAway}
      onTouchStart={(e) => {
        e.preventDefault();
        runAway();
      }}
      className="px-8 py-4 rounded-full font-body font-bold text-lg
                 bg-secondary text-secondary-foreground
                 border-2 border-valentine-pink
                 shadow-valentine transition-all duration-200
                 hover:shadow-lg select-none cursor-pointer"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      }}
    >
      {messages[attempts % messages.length]}
    </button>
  );
};

export default RunawayButton;
