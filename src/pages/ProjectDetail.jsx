import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Users } from "lucide-react";
import { getProjectBySlug } from "@/data/projectsData";
import { Button } from "@/components/Button";
import { DemosSection } from "@/components/DemosSection";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="max-w-6xl space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {project.company && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.company}
              </div>
            )}
            {project.period && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.period}
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.location}
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.role}
              </div>
            )}
          </div>

          {/* Project Image */}
          <div className="glass rounded-2xl overflow-hidden glow-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.id === 1 && (
              <Link
                to="/projects/1-futsal-analysis-sportscore/demos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <span>🎥 View Detailed Demos</span>
              </Link>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Problem Statement */}
            {project.problemStatement && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Problem Statement</h2>
                <div className="glass p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.problemStatement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.problemStatement.description}
                  </p>
                  {project.problemStatement.challenges && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm uppercase tracking-wider">Challenges:</p>
                      <ul className="space-y-2">
                        {project.problemStatement.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Solution</h2>
                <div className="glass p-6 rounded-2xl border border-border/50 bg-primary/5">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </section>
            )}

            {/* Key Achievements */}
            {project.keyAchievements && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
                <div className="space-y-3">
                  {project.keyAchievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 glass p-4 rounded-lg border border-border/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Modules */}
            {project.modules && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Technical Modules</h2>
                <div className="space-y-4">
                  {project.modules.map((module, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl border border-border/50">
                      <h3 className="text-xl font-semibold mb-2">
                        {module.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {module.description}
                      </p>
                      {module.details && (
                        <p className="text-sm text-muted-foreground mb-4 italic">
                          {module.details}
                        </p>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(module.metrics).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">
                              {key.replace(/([A-Z])/g, " $1")}
                            </p>
                            <p className="text-lg font-semibold text-primary">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results/Metrics */}
            {project.results && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Results & Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="glass p-4 rounded-lg border border-border/50 space-y-2"
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="text-2xl font-bold text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {Object.entries(project.challenges).map(([key, challenge]) => (
                    <div
                      key={key}
                      className="glass p-6 rounded-2xl border border-border/50"
                    >
                      <div className="flex gap-2 items-start mb-3">
                        <div className="text-xl font-bold text-primary">⚠️</div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">
                            {challenge.problem}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            <strong>Solution:</strong> {challenge.solution}
                          </p>
                          {challenge.status && (
                            <p className="text-sm text-primary mt-1">
                              <strong>Status:</strong> {challenge.status}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Dataset */}
            {project.dataset && (
              <section className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Dataset</h2>
                <div className="glass p-6 rounded-2xl border border-border/50">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Name
                      </p>
                      <p className="font-semibold">{project.dataset.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Source
                      </p>
                      <p className="font-semibold">{project.dataset.source}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Volume
                      </p>
                      <p className="font-semibold">{project.dataset.volume}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                        Annotation
                      </p>
                      <p className="font-semibold text-sm">
                        {project.dataset.annotation}
                      </p>
                    </div>
                  </div>
                  {project.dataset.classes && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Classes:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.dataset.classes.map((cls, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between text-sm text-muted-foreground"
                          >
                            <span>{cls.name} ({cls.label})</span>
                            <span className="text-primary font-semibold">
                              {cls.distribution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tech Stack */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            {project.tags && (
              <div className="glass p-6 rounded-2xl space-y-4 border border-border/50">
                <h4 className="font-bold">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface text-xs rounded text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {(project.team || project.supervisor) && (
              <div className="glass p-6 rounded-2xl space-y-4 border border-border/50">
                <h4 className="font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team
                </h4>
                {project.team && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Members:</p>
                    <ul className="space-y-1">
                      {project.team.map((member, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.supervisor && (
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-primary">Supervisor:</p>
                    <p className="text-sm text-muted-foreground">
                      {project.supervisor}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Demos Section */}
        <DemosSection demos={project.demos} projectTitle={project.title} />

        {/* Related Projects */}
        <div className="border-t border-border/50 pt-12">
          <h2 className="text-3xl font-bold mb-8">Explore More Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <Link
              to="/projects"
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold group-hover:text-primary transition-colors">
                  View All Projects
                </span>
                <ExternalLink className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
