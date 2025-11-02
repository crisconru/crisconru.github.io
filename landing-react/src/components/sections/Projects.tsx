import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SmartHome IoT Hub",
    description: "Complete home automation system with custom PCB, backend API, and cross-platform apps. Controls lighting, climate, and security through intuitive touchscreen interfaces.",
    tech: ["Hardware Design", "Node.js", "React Native", "MQTT"],
    link: "#",
    github: "#",
    category: "Full-Stack IoT",
  },
  {
    title: "MediTrack Patient Portal",
    description: "HIPAA-compliant healthcare platform connecting patients and providers. Real-time monitoring dashboards, appointment scheduling, and secure messaging.",
    tech: ["PostgreSQL", "Express", "React", "WebSockets"],
    link: "#",
    github: "#",
    category: "Healthcare SaaS",
  },
  {
    title: "IndustrialVision Analytics",
    description: "Computer vision system for manufacturing quality control. Custom embedded cameras with ML edge processing and cloud analytics dashboard.",
    tech: ["Embedded Linux", "Python", "TensorFlow", "Vue.js"],
    link: "#",
    github: "#",
    category: "Industrial AI",
  },
  {
    title: "RetailPOS Terminal",
    description: "Modern point-of-sale system with custom touchscreen hardware, offline-first architecture, and real-time inventory management across multiple locations.",
    tech: ["Raspberry Pi", "Go", "Electron", "SQLite"],
    link: "#",
    github: "#",
    category: "Retail Hardware",
  },
];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4 text-center">
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-display font-bold">
            Side Projects & <span className="text-accent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions built from the ground up. Each project demonstrates 
            end-to-end development across hardware, backend, and frontend.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6" role="list">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4 text-muted-foreground hover:text-foreground" aria-hidden="true" />
                    </a>
                    <a
                      href={project.link}
                      className="p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
