import { Code, Smartphone, Zap, Palette, Share2, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and AI-powered features to transform your business processes and enhance user engagement.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Stunning visual designs that capture your brand essence and communicate your message effectively.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and drive engagement across all platforms.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive digital solutions to transform your business and accelerate growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} p-1 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-6 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-card-gradient border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how our expertise can help you achieve your digital goals.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;