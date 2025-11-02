import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.torres@example.com",
    href: "mailto:alex.torres@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/alextorres",
    href: "https://linkedin.com/in/alextorres",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@alextorres",
    href: "https://github.com/alextorres",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@alextorres_dev",
    href: "https://twitter.com/alextorres_dev",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-muted/30" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <header className="space-y-4">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-display font-bold">
            Let's Build <span className="text-primary">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a product idea? Need end-to-end development? 
            Let's discuss how we can bring your vision to life.
          </p>
        </header>

        <nav className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto" aria-label="Contact methods">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Contact via ${method.label}: ${method.value}`}
            >
              <method.icon className="w-8 h-8 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{method.label}</p>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Currently available for freelance projects and consulting opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
