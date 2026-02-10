import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const photos = [
  { id: 1, emoji: "💑", caption: "Our first date" },
  { id: 2, emoji: "💍", caption: "That special moment to Marry You" },
  { id: 3, emoji: "💕", caption: "Adventures together" },
  { id: 4, emoji: "🌹", caption: "You & Me Forever" },
  { id: 5, emoji: "💖", caption: "Forever & always" },
  { id: 6, emoji: "🧑‍🤝‍👩", caption: "Holding Hands" },
];

const PhotoGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 animate-bounce-in" style={{ animationDelay: "5s", animationFillMode: "both" }}>
      <h2 className="font-display text-3xl md:text-4xl text-gradient-love text-center mb-6">
        Things I am Waiting For💞
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelected(photo.id)}
            className="group relative aspect-square rounded-2xl bg-card/60 backdrop-blur-sm
                       border-2 border-valentine-pink/30 shadow-valentine
                       flex flex-col items-center justify-center gap-2
                       hover:scale-105 hover:border-valentine-rose/60
                       transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
              {photo.emoji}
            </span>
            <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {photo.caption}
            </span>
            <div className="absolute inset-0 bg-valentine-rose/0 group-hover:bg-valentine-rose/5 transition-colors rounded-2xl" />
          </button>
        ))}
      </div>


      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-valentine-pink/30 shadow-valentine max-w-sm text-center">
          {selected && (
            <div className="py-6">
              <span className="text-8xl block mb-4">
                {photos.find((p) => p.id === selected)?.emoji}
              </span>
              <p className="font-display text-2xl text-gradient-love">
                {photos.find((p) => p.id === selected)?.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGallery;
