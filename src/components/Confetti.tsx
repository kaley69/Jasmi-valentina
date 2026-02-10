import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const confettiItems = ["🎉", "💖", "💗", "✨", "💕", "🩷", "❤️", "🌹", "💝", "🥰"];
const colors = [
  "hsl(346, 77%, 55%)",
  "hsl(340, 80%, 78%)",
  "hsl(20, 80%, 65%)",
  "hsl(40, 90%, 60%)",
  "hsl(300, 60%, 70%)",
];

const Confetti = ({ active }: { active: boolean }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) return;

    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 16 + Math.random() * 20,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 1.5,
        emoji: confettiItems[Math.floor(Math.random() * confettiItems.length)],
      });
    }
    setPieces(newPieces);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            fontSize: `${piece.size}px`,
            animationDuration: `${piece.duration}s`,
            animationDelay: `${piece.delay}s`,
          }}
        >
          {piece.emoji}
        </span>
      ))}
    </div>
  );
};

export default Confetti;
