import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      rating: 5,
      content: "Rox Tech Hub  transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations. The team delivered on time and within budget.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO, FinanceFlow",
      company: "FinanceFlow",
      rating: 5,
      content: "Working with Rox Tech Hub was a game-changer for our fintech startup. They built a secure, scalable platform that handles thousands of transactions daily. Exceptional quality and support.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      rating: 5,
      content: "The mobile app they developed for us increased our user engagement by 300%. The UI/UX design is intuitive and the performance is flawless. Highly recommend their services.",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Founder, EcoSolutions",
      company: "EcoSolutions",
      rating: 5,
      content: "Rox Tech Hub's AI solution automated our inventory management and saved us 40 hours per week. Their innovative approach and technical skills are unmatched in the industry.",
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager, InnovateLab",
      company: "InnovateLab",
      rating: 5,
      content: "From concept to deployment, the team guided us through every step. The final product exceeded our expectations and our customers love the new features. Outstanding work!",
      avatar: "LW"
    },
    {
      name: "James Miller",
      role: "CEO, RetailMax",
      company: "RetailMax",
      rating: 5,
      content: "The e-commerce platform they built increased our online sales by 250%. The integration with our existing systems was seamless. Professional, reliable, and results-driven team.",
      avatar: "JM"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            What Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-accent mt-6 group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-card-gradient border border-border/50 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction Rate</div>
          </div>
          <div className="bg-card-gradient border border-border/50 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Project Rating</div>
          </div>
          <div className="bg-card-gradient border border-border/50 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;