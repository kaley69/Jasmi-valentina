import { useEffect, useState } from "react";
import Confetti from "./Confetti";
import PhotoGallery from "./PhotoGallery";

const CelebrationScreen = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showPoem, setShowPoem] = useState(false);
  const [showDate, setShowDate] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowPoem(true), 2000);
    setTimeout(() => setShowDate(true), 4000);
  }, []);

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-gradient-valentine">
      <div className="min-h-screen flex flex-col items-center justify-start py-12">
      <Confetti active />

      <div className="text-center px-6 max-w-lg relative z-50">
        {showMessage && (
          <div className="animate-bounce-in mb-8">
            <div className="text-6xl mb-4">🥰</div>
            <h1 className="font-display text-4xl md:text-6xl text-gradient-love mb-4">
              Yayyy!
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground font-medium">
              You just made me the happiest person ❤️
            </p>
          </div>
        )}

        {showPoem && (
          <div
            className="animate-bounce-in bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-valentine mb-8"
          >
            <p className="font-display text-2xl md:text-3xl text-valentine-deep leading-relaxed">
              Roses are red,
              <br />
              Violets are blue,
              <br />
              My heart skips a beat,
              <br />
              Every moment with you 💕
            </p>
          </div>
        )}

        {showDate && (
          <div className="animate-bounce-in">
            <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 shadow-valentine">
              <p className="font-display text-3xl md:text-4xl text-valentine-rose animate-pulse-heart">
                Love You Forever
              </p>
              <p className="font-body text-lg text-muted-foreground mt-3">
                I can't wait! 🌹✨
              </p>
            </div>
          </div>
        )}
      </div>

      {showDate && <PhotoGallery />}
      </div>
    </div>
  );
};

export default CelebrationScreen;
