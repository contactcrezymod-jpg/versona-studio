import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools",
      technologies: ["Git", "VS Code", "Figma", "Webpack", "Vite", "npm/yarn"]
    },
    {
      category: "Concepts",
      technologies: ["Responsive Design", "SEO", "Performance", "Accessibility", "Testing"]
    }
  ];

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating beautiful, intuitive interfaces with attention to user experience and aesthetics."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, SEO, and excellent user experience across devices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and modern development workflows."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate frontend developer with experience building interactive web applications. 
            I love creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Section */}
          <div className="space-y-6 animate-fade-up">
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                Hi there! I'm a <span className="text-primary font-semibold">Frontend Developer</span> who 
                specializes in building interactive applications for the web. I have experience working with 
                modern technologies and frameworks to create seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a Frontend Developer, I specialize in using latest technologies including 
                <span className="text-primary font-semibold"> React</span>, 
                <span className="text-primary font-semibold"> TypeScript</span>, 
                <span className="text-primary font-semibold"> Tailwind CSS</span>, and 
                <span className="text-primary font-semibold"> Next.js</span> to build responsive 
                and performant web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about writing clean, maintainable code and staying up-to-date with 
                the latest web development trends and best practices.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up delay-300">
            {skills.map((skill, index) => (
              <Card key={skill.category} className="glass-card smooth-transition hover:glow-effect">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-primary">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="glass-card smooth-transition hover:glow-effect text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;