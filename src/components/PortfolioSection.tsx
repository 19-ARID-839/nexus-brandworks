import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development"
    },
    {
      title: "FinTech Mobile App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      tech: ["React Native", "Firebase", "AWS", "Blockchain"],
      category: "Mobile Development"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered platform for automated content creation with natural language processing.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      tech: ["Python", "TensorFlow", "OpenAI", "React"],
      category: "AI Solutions"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive hospital management system with patient records and appointment scheduling.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tech: ["Vue.js", "Laravel", "MySQL", "Docker"],
      category: "Web Development"
    },
    {
      title: "Social Media Dashboard",
      description: "Multi-platform social media management tool with analytics and automated posting.",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      tech: ["Angular", "Node.js", "Redis", "Chart.js"],
      category: "Digital Marketing"
    },
    {
      title: "IoT Smart Home App",
      description: "Mobile application for controlling smart home devices with voice commands and automation.",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      tech: ["Flutter", "IoT", "AWS IoT", "Alexa"],
      category: "Mobile Development"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover some of our recent projects that showcase our expertise across different technologies and industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Preview */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-background/90 hover:bg-background">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;