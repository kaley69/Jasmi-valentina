import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import CursorHearts from "@/components/CursorHearts";
import RunawayButton from "@/components/RunawayButton";
import CelebrationScreen from "@/components/CelebrationScreen";
import valentineBg from "@/assets/valentine-bg.jpg";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noAttempts, setNoAttempts] = useState(0);

  const handleYes = () => {
    setAccepted(true);
  };

  const handleNoCaught = () => {
    setNoAttempts((prev) => prev + 1);
    toast({
      title: "Nice try 😏",
      description: "That's not an option, sweetheart!",
    });
  };

  // YES button grows bigger each time NO runs away
  const growYes = () => {
    setYesScale((prev) => Math.min(prev + 0.08, 1.8));
    setNoAttempts((prev) => prev + 1);
  };

  if (accepted) {
    return (
      <>
        <FloatingHearts />
        <CursorHearts />
        <CelebrationScreen />
      </>
    );
  }

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${valentineBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      <FloatingHearts />
      <CursorHearts />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Sparkle decorations */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="text-3xl animate-sparkle" style={{ animationDelay: "0s" }}>✨</span>
          <span className="text-4xl animate-pulse-heart">💖</span>
          <span className="text-3xl animate-sparkle" style={{ animationDelay: "0.5s" }}>✨</span>
        </div>

        {/* Main question */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-love mb-4 animate-bounce-in leading-tight">
          Will you be my Valentine?
        </h1>

        <p className="font-body text-lg md:text-xl text-foreground/80 mb-2 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
          I already know the answer, but still... 💕
        </p>

        <div className="text-4xl mb-10 animate-pulse-heart">💖</div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* YES button */}
          <button
            onClick={handleYes}
            className="px-10 py-5 rounded-full font-body font-bold text-xl
                       bg-primary text-primary-foreground
                       shadow-valentine glow-heart
                       transition-all duration-300
                       hover:scale-110 active:scale-95
                       animate-bounce-in cursor-pointer"
            style={{
              animationDelay: "0.4s",
              transform: `scale(${yesScale})`,
            }}
          >
            YES 💕
          </button>

          {/* NO button (runaway!) */}
          <div
            className="animate-bounce-in"
            style={{ animationDelay: "0.6s" }}
            onMouseEnter={growYes}
          >
            <RunawayButton onCaught={handleNoCaught} />
          </div>
        </div>

        {noAttempts > 3 && (
          <p className="mt-8 font-body text-muted-foreground animate-bounce-in">
            Just click YES already! 🥺💗
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
