import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navigation = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Navigation - Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-50" aria-label="Main navigation">
        <div className="flex justify-between items-center px-4 py-3 gap-2">
          {/* Theme toggle on the left for mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-foreground" aria-hidden="true" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" aria-hidden="true" />
            )}
          </button>

          {/* Navigation items on the right */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Navigate to ${item.label}`}
              >
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Navigation - Top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border z-50" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation items on the left */}
            <div className="flex items-center gap-8" role="menubar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Theme toggle on the right for desktop */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground" aria-hidden="true" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
