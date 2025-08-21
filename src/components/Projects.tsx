import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Stripe"],
      github: "https://github.com",
      live: "https://demo-project.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      github: "https://github.com",
      live: "https://demo-project.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information, forecasts, and beautiful data visualizations using weather APIs.",
      technologies: ["React", "Chart.js", "Weather API", "CSS3", "Responsive Design"],
      github: "https://github.com",
      live: "https://demo-project.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with performance and SEO optimization in mind.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "MDX"],
      github: "https://github.com",
      live: "https://demo-project.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    },
    {
      title: "Social Media Dashboard", 
      description: "A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL", "Chart.js"],
      github: "https://github.com",
      live: "https://demo-project.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Learning Management System",
      description: "An interactive learning platform with course management, progress tracking, video streaming, and assessment tools for online education.",
      technologies: ["React", "Firebase", "Video.js", "Stripe", "PWA"],
      github: "https://github.com",
      live: "https://demo-project.com", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique 
            challenge and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card smooth-transition hover:glow-effect group animate-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-up delay-1000">
          <Button variant="outline" size="lg" className="smooth-transition hover:glow-effect">
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;