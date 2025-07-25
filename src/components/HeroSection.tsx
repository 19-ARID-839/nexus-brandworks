import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-bg-gradient"
    >
      {/* Interactive Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float hover:bg-accent/30 transition-colors duration-500 cursor-pointer"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float hover:bg-primary/30 transition-colors duration-500 cursor-pointer"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float hover:bg-accent/25 transition-colors duration-500 cursor-pointer"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Interactive floating geometric shapes */}
        <div
          className="absolute top-32 right-1/4 w-8 h-8 bg-primary/30 rotate-45 animate-drift hover:bg-accent/50 hover:scale-125 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-6 h-6 bg-accent/40 rounded-full animate-bounce-slow hover:bg-primary/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 left-16 w-4 h-12 bg-primary/25 rounded-full animate-drift hover:bg-accent/45 hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-16 w-10 h-10 bg-accent/30 animate-rotate-slow hover:bg-primary/50 hover:scale-125 transition-all duration-300 cursor-pointer"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animationDelay: "3s",
          }}
        ></div>

        {/* Interactive orbiting elements */}
        <div className="absolute top-1/4 left-1/3 group cursor-pointer">
          <div className="relative w-4 h-4">
            <div
              className="absolute w-2 h-2 bg-primary/50 rounded-full animate-orbit group-hover:bg-accent/70 group-hover:scale-150 transition-all duration-300"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 group cursor-pointer">
          <div className="relative w-6 h-6">
            <div
              className="absolute w-1 h-1 bg-accent/60 rounded-full animate-orbit group-hover:bg-primary/80 group-hover:scale-200 transition-all duration-300"
              style={{ animationDelay: "4s", animationDirection: "reverse" }}
            ></div>
          </div>
        </div>

        {/* Interactive particle-like elements */}
        <div
          className="absolute top-40 left-1/2 w-2 h-2 bg-primary/40 rounded-full animate-particle-float hover:bg-accent/60 hover:scale-150 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute top-60 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-particle-float hover:bg-primary/70 hover:scale-200 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-primary/35 rounded-full animate-particle-float hover:bg-accent/55 hover:scale-125 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "3.5s" }}
        ></div>
        <div
          className="absolute bottom-60 right-1/4 w-1 h-1 bg-accent/45 rounded-full animate-particle-float hover:bg-primary/65 hover:scale-175 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "1.8s" }}
        ></div>

        {/* Interactive glowing lines */}
        <div
          className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-drift hover:via-accent/50 transition-all duration-500 cursor-pointer"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-accent/40 to-transparent animate-drift hover:via-primary/60 transition-all duration-500 cursor-pointer"
          style={{ animationDelay: "4.2s" }}
        ></div>

        {/* Interactive rotating rings */}
        <div
          className="absolute top-1/2 left-20 w-16 h-16 border border-primary/20 rounded-full animate-rotate-slow hover:border-accent/40 hover:scale-110 transition-all duration-300 cursor-pointer"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-20 w-12 h-12 border border-accent/25 rounded-full animate-rotate-slow hover:border-primary/45 hover:scale-125 transition-all duration-300 cursor-pointer"
          style={{
            animationDelay: "3.2s",
            animationDirection: "reverse",
          }}
        ></div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              #1 Software Development Agency
            </span>
          </div>

          {/* Main Heading */}
         <h1
  className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
  style={{ animationDelay: "0.2s" }}
>
  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
    Enter the Realm of Innovation
  </span>
  <br />
  <span className="text-foreground">Where Magic Meets Code</span>
</h1>


          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Empowering Your Vision with Scalable Digital Intelligence From Code
            to Creative — We Engineer the Future of Innovation
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
