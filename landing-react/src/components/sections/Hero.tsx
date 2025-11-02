import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative" role="banner">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
            Building <span className="text-primary">Complete Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            From hardware to frontend, one vision, end-to-end.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a full-stack product creator who transforms ideas into reality. 
            Hardware, backend, frontend, mobile, desktop, embedded systems—I build it all 
            with a focus on human-centered design.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Hardware Design
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Backend Engineering
            </span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              Frontend Development
            </span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
              Mobile & Desktop
            </span>
          </div>
        </div>

        <div className="pt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
