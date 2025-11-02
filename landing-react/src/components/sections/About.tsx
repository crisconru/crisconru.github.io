import { Code, Cpu, Layers, Palette } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Hardware & Embedded",
    description: "Circuit design, PCB development, and embedded systems programming for touchable interfaces and IoT devices.",
  },
  {
    icon: Layers,
    title: "Backend Architecture",
    description: "Scalable APIs, database design, cloud infrastructure, and server-side logic that powers seamless experiences.",
  },
  {
    icon: Code,
    title: "Full Frontend Stack",
    description: "Web, mobile, desktop, and embedded touchscreen applications built with modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "Human-Centered Design",
    description: "Every solution starts with people. Intuitive interfaces, accessible experiences, thoughtful interactions.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-muted/30" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="space-y-4 text-center">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-display font-bold">
            The Complete <span className="text-primary">Band-Man</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I don't just build features—I create complete products. From the first prototype 
            to the final deployment, I handle every layer of the stack.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6" role="list">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <capability.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="text-xl font-display font-semibold mb-2">
                {capability.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-card border border-border">
          <blockquote className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-light italic text-foreground/90">
              "Technology should serve humans, not the other way around. 
              Every line of code, every circuit, every interface—designed with empathy."
            </p>
            <footer className="text-sm text-muted-foreground">— My Design Philosophy</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
