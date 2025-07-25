import { Award, Users, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that drive real business results and exceed expectations."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for our clients."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through transparent communication."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality checks to ensure perfect delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rox Tech</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a dynamic software house passionate about creating digital solutions that transform businesses. 
              Founded with a vision to bridge the gap between technology and business success, we've grown into a 
              trusted partner for companies worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled developers, designers, and strategists work collaboratively to deliver exceptional 
              results. We believe in the power of innovation, quality craftsmanship, and building long-lasting 
              relationships with our clients.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-card-gradient rounded-xl border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-card-gradient rounded-xl border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8 animate-fade-in">
            Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expert Team</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our diverse team of professionals brings together years of experience in software development, 
            design, and digital marketing to deliver exceptional results for every project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Developers", count: "25+", desc: "Full-stack developers skilled in modern technologies" },
              { role: "Designers", count: "10+", desc: "Creative minds crafting beautiful user experiences" },
              { role: "Strategists", count: "8+", desc: "Marketing experts driving digital growth" }
            ].map((team, index) => (
              <div
                key={team.role}
                className="bg-card-gradient border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{team.count}</div>
                <div className="text-xl font-semibold mb-3">{team.role}</div>
                <div className="text-muted-foreground">{team.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;