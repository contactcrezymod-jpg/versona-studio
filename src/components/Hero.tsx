import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", 
    "Node.js", "Firebase", "Redux", "JavaScript"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto animate-fade-up">
          {/* Main Title */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
              Hi, My name is
            </h2>
            <h1 className="hero-title mb-6">
              YOUR NAME HERE
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300">
            I build interactive frontend of web applications using React, TypeScript & 
            other modern technologies. Based in Your Location. 📍
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in delay-500">
            <Button variant="outline" size="icon" className="smooth-transition hover:glow-effect">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="smooth-transition hover:glow-effect">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="smooth-transition hover:glow-effect">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-700">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="smooth-transition hover:glow-effect"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="smooth-transition hover:glow-effect"
            >
              Get In Touch
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="animate-fade-in delay-1000">
            <p className="text-sm text-muted-foreground mb-4">Tech Stack</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm smooth-transition hover:bg-primary hover:text-primary-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary smooth-transition"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;