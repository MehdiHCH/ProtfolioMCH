import { Play } from "lucide-react";
import { useState } from "react";

export const VideoDemo = ({ demo }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="glass rounded-2xl overflow-hidden border border-border/50 group cursor-pointer">
      <div
        className="relative w-full bg-black aspect-video overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        {/* Video or Thumbnail */}
        {isPlaying ? (
          <video
            autoPlay
            controls
            className="w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <source src={demo.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            {/* Video Thumbnail Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-primary/10" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-colors rounded-2xl" />
          </>
        )}

        {/* Demo Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-xs font-bold rounded-full">
          {demo.category || "Demo"}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-bold text-foreground">{demo.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {demo.description}
        </p>
      </div>
    </div>
  );
};

export const DemosSection = ({ demos, projectTitle }) => {
  if (!demos || demos.length === 0) return null;

  return (
    <section className="space-y-6 py-12 border-t border-border/50">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold">Live Demonstrations</h2>
        <p className="text-lg text-muted-foreground">
          See {projectTitle} in action with these video demonstrations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demos.map((demo) => (
          <VideoDemo key={demo.id} demo={demo} />
        ))}
      </div>
    </section>
  );
};
