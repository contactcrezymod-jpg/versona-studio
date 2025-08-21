import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Award, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2024 - Present",
      type: "work",
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Leading frontend development for multiple client projects using React, TypeScript, and modern web technologies. Mentoring junior developers and establishing best practices for the development team.",
      technologies: ["React", "TypeScript", "Next.js", "Team Leadership", "Mentoring"],
      icon: Briefcase,
      status: "current"
    },
    {
      date: "Dec 2023",
      type: "achievement",
      title: "🏆 Winner - React Developer Challenge",
      company: "Global Developer Competition",
      description: "Secured First Prize among 500+ participants for building an innovative real-time collaboration platform using React, WebRTC, and Socket.io within 48 hours.",
      technologies: ["Winner", "React", "WebRTC", "Real-time"],
      icon: Trophy,
      status: "completed"
    },
    {
      date: "Aug 2023 - Dec 2023", 
      type: "work",
      title: "Frontend Developer",
      company: "StartupXYZ",
      description: "Developed and maintained responsive web applications using React and TypeScript. Collaborated with design and backend teams to deliver high-quality user experiences for 10,000+ active users.",
      technologies: ["React", "TypeScript", "Responsive Design", "API Integration"],
      icon: Briefcase,
      status: "completed"
    },
    {
      date: "Oct 2023",
      type: "achievement", 
      title: "🏅 Finalist - Hackathon 2023",
      company: "City Innovation Hub",
      description: "Built a comprehensive expense tracking application with AI-powered receipt scanning and budget recommendations. Reached finals among 200+ teams showcasing innovative fintech solutions.",
      technologies: ["Finalist", "AI/ML", "Fintech", "Mobile App"],
      icon: Award,
      status: "completed"
    },
    {
      date: "Jun 2023 - Aug 2023",
      type: "work", 
      title: "Frontend Development Internship",
      company: "WebDev Agency",
      description: "Assisted in building client websites using modern JavaScript frameworks. Gained hands-on experience with responsive design, performance optimization, and collaborative development workflows.",
      technologies: ["JavaScript", "CSS3", "Git", "Performance Optimization"],
      icon: GraduationCap,
      status: "completed"
    },
    {
      date: "May 2023",
      type: "achievement",
      title: "🏆 Winner - Web Design Contest",
      company: "University Design Challenge",
      description: "Won first place for creating an accessible and inclusive e-commerce platform design. Focused on usability, accessibility standards, and modern design principles.",
      technologies: ["Winner", "UI/UX", "Accessibility", "E-commerce"],
      icon: Trophy,
      status: "completed"
    },
    {
      date: "2021 - 2023",
      type: "education",
      title: "Bachelor's in Computer Science", 
      company: "University of Technology",
      description: "Specialized in Web Development and Software Engineering. Relevant coursework: Data Structures, Algorithms, Web Technologies, Database Systems, and Human-Computer Interaction.",
      technologies: ["Computer Science", "Web Development", "Software Engineering", "CGPA: 3.8"],
      icon: GraduationCap,
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-green-500/20 text-green-700 border-green-300";
      case "completed": return "bg-blue-500/20 text-blue-700 border-blue-300";
      default: return "bg-gray-500/20 text-gray-700 border-gray-300";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work": return Briefcase;
      case "achievement": return Trophy;
      case "education": return GraduationCap;
      default: return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional journey, key achievements, and milestones that have shaped my career as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => {
            const IconComponent = getTypeIcon(exp.type);
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex items-center mb-12 animate-fade-up ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background shadow-lg" />
                
                {/* Content Card */}
                <Card 
                  className={`glass-card smooth-transition hover:glow-effect w-full md:w-5/12 ml-12 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="h-4 w-4 text-primary" />
                          <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(exp.status)}`}>
                            {exp.status === 'current' ? 'Current' : 'Completed'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg leading-tight">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.date}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground smooth-transition"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-20 animate-fade-up delay-1000">
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;