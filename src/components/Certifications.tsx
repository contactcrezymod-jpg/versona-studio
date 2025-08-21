import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, CheckCircle, Clock, Book } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "React Developer Certification",
      provider: "Meta (Facebook)",
      description: "Comprehensive React development program covering hooks, state management, routing, and advanced React patterns for building modern web applications.",
      status: "completed",
      completionDate: "December 2023",
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      skills: ["React", "Hooks", "State Management", "JSX"]
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      description: "Fundamental cloud computing certification covering AWS services, security, architecture, pricing and support for cloud practitioners.",
      status: "completed",
      completionDate: "November 2023", 
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      skills: ["AWS", "Cloud Computing", "Architecture", "Security"]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      description: "Comprehensive JavaScript certification covering algorithms, data structures, functional programming, and object-oriented programming concepts.",
      status: "completed",
      completionDate: "October 2023",
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      title: "TypeScript Deep Dive",
      provider: "Udemy",
      description: "Advanced TypeScript course covering type systems, generics, decorators, and integration with modern frameworks for type-safe development.",
      status: "in-progress",
      completionDate: null,
      certificateUrl: null,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      skills: ["TypeScript", "Type Safety", "Generics", "Advanced Types"]
    },
    {
      title: "Frontend Web Development",
      provider: "Coursera (University of Michigan)",
      description: "Specialization in frontend web development covering HTML5, CSS3, JavaScript, responsive design, and modern development workflows.",
      status: "completed",
      completionDate: "September 2023",
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      skills: ["HTML5", "CSS3", "Responsive Design", "Web Standards"]
    },
    {
      title: "Git & GitHub Mastery",
      provider: "GitHub Learning Lab",
      description: "Comprehensive version control certification covering Git workflows, branching strategies, collaboration, and advanced GitHub features.",
      status: "completed",
      completionDate: "August 2023",
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"]
    },
    {
      title: "Google Analytics Certified",
      provider: "Google",
      description: "Professional analytics certification covering web analytics, data analysis, reporting, and digital marketing measurement strategies.",
      status: "ongoing",
      completionDate: null,
      certificateUrl: null,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      skills: ["Analytics", "Data Analysis", "Digital Marketing", "Reporting"]
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      description: "Certification covering responsive web design principles, CSS Grid, Flexbox, and modern layout techniques for all device types.",
      status: "completed",
      completionDate: "July 2023",
      certificateUrl: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      skills: ["Responsive Design", "CSS Grid", "Flexbox", "Mobile First"]
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-green-500/20 text-green-700 border-green-300",
          icon: CheckCircle,
          label: "Completed"
        };
      case "in-progress":
        return {
          color: "bg-yellow-500/20 text-yellow-700 border-yellow-300", 
          icon: Clock,
          label: "In Progress"
        };
      case "ongoing":
        return {
          color: "bg-blue-500/20 text-blue-700 border-blue-300",
          icon: Book,
          label: "Ongoing"
        };
      default:
        return {
          color: "bg-gray-500/20 text-gray-700 border-gray-300",
          icon: Award,
          label: "Unknown"
        };
    }
  };

  const completedCount = certifications.filter(cert => cert.status === "completed").length;
  const inProgressCount = certifications.filter(cert => cert.status === "in-progress" || cert.status === "ongoing").length;

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements that validate my expertise 
            and commitment to staying current with industry standards.
          </p>
        </div>

        {/* Summary Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto animate-fade-up">
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">{completedCount}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <Book className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">{inProgressCount}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card text-center smooth-transition hover:glow-effect">
            <CardContent className="p-6">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary mb-1">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const statusConfig = getStatusConfig(cert.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <Card 
                key={cert.title}
                className="glass-card smooth-transition hover:glow-effect group animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${statusConfig.color}`}>
                      <StatusIcon className="h-3 w-3" />
                      {statusConfig.label}
                    </div>
                  </div>

                  {/* Certificate Link Overlay */}
                  {cert.status === "completed" && cert.certificateUrl && (
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </CardTitle>
                  <div className="text-primary font-medium text-sm">{cert.provider}</div>
                  {cert.completionDate && (
                    <div className="text-xs text-muted-foreground">{cert.completionDate}</div>
                  )}
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground smooth-transition"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  {cert.status === "completed" && cert.certificateUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full smooth-transition hover:glow-effect"
                      asChild
                    >
                      <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <Award className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      {cert.status === "in-progress" ? "In Progress" : "Ongoing"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-up delay-1000">
          <p className="text-muted-foreground mb-6">
            Continuously expanding my skillset through professional development and industry certifications.
          </p>
          <Button variant="outline" size="lg" className="smooth-transition hover:glow-effect">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;