import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Play, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export const Demos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDemoId, setSelectedDemoId] = useState(null);

  // Aggregate all demos from all projects
  const allDemos = projectsData.flatMap((project) =>
    project.demos.map((demo) => ({
      ...demo,
      projectTitle: project.title,
      projectSlug: project.slug,
      projectImage: project.image,
    }))
  );

  const categories = [
    "All",
    ...new Set(allDemos.map((d) => d.category)),
  ];

  const filteredDemos =
    selectedCategory === "All"
      ? allDemos
      : allDemos.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back Home
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            🎥 Project Demos
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Explore interactive video
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              demonstrations.
            </span>
          </h1>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Discover the complete AI pipeline demonstrations for all my projects.
            Filter by category and click to see full project details!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-in animation-delay-300">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass hover:bg-primary/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat === "All" ? "All Demos" : cat}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemos.map((demo, idx) => (
            <div
              key={`${demo.projectSlug}-${demo.id}`}
              className="group glass rounded-2xl overflow-hidden animate-fade-in cursor-pointer hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              onClick={() => setSelectedDemoId(`${demo.projectSlug}-${demo.id}`)}
            >
              {/* Video Container */}
              <div className="relative overflow-hidden aspect-video bg-black">
                {selectedDemoId === `${demo.projectSlug}-${demo.id}` ? (
                  // Video Player when selected
                  <video
                    autoPlay
                    controls
                    className="w-full h-full"
                    style={{ objectFit: "contain" }}
                  >
                    <source src={demo.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Thumbnail with play button
                  <>
                    <div
                      className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center"
                      style={{
                        backgroundImage: `url('${demo.projectImage}')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center border border-primary/70 group-hover:bg-primary/50 transition-all duration-300">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="space-y-1">
                  <p className="text-xs text-primary font-semibold tracking-wider uppercase">
                    {demo.category}
                  </p>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {demo.projectTitle}
                  </p>
                </div>

                {demo.description && (
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {demo.description}
                  </p>
                )}

                {/* View Project Link */}
                <Link
                  to={`/projects/${demo.projectSlug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDemos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              No demos found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
