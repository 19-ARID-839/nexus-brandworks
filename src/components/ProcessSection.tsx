import { Search, Palette, Code2, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Requirement Gathering",
      description: "We deep dive into your business needs, goals, and challenges to create a comprehensive project roadmap.",
      details: [
        "Stakeholder interviews",
        "Market research",
        "Technical analysis",
        "Project planning"
      ]
    },
    {
      step: "02",
      icon: Palette,
      title: "Design & Prototyping",
      description: "Our design team creates stunning visual concepts and interactive prototypes that bring your vision to life.",
      details: [
        "UI/UX wireframes",
        "Visual design",
        "Interactive prototypes",
        "User testing"
      ]
    },
    {
      step: "03",
      icon: Code2,
      title: "Development",
      description: "Our developers build robust, scalable solutions using cutting-edge technologies and best practices.",
      details: [
        "Clean code architecture",
        "Agile development",
        "Regular testing",
        "Code reviews"
      ]
    },
    {
      step: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "We ensure smooth deployment and provide ongoing support to keep your solution running perfectly.",
      details: [
        "Quality assurance",
        "Deployment strategy",
        "Performance monitoring",
        "Ongoing maintenance"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            How We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our proven 4-step process ensures successful project delivery from concept to launch and beyond.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <Card className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          
                          {/* Details List */}
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-primary" />
                    </div>
                    
                    {/* Connecting Line (hidden on mobile) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="bg-card-gradient border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss your requirements and create something amazing together.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;