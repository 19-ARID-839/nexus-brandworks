import { User, Linkedin, Github, Globe, Dribbble } from "lucide-react";
import { useState } from "react";

const ceoAndPartner = [
  {
    name: "Dr. Fahad Malik",
    role: "Founder & Director",
    field: "Innovation & Leadership",
    image: "/team/fahad.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/fahadmalik",
      github: "https://github.com/fahadmalik",
      website: "https://fahadmalik.com",
    },
  },
  {
    name: "Shoaib Malik",
    role: "Co-Founder",
    field: "Technology & Innovation",
    image: "/team/aimen.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/shoaibmalik",
      github: "https://github.com/shoaib",
      website: "#",
    },
  },
];

const teamMembers = [
  {
    name: "Muhammad Masab",
    role: "Lead MERN Stack Developer",
    field: "Full Stack",
    image: "/team/ayesha.jpg",
  },
  {
    name: "Areeba Tehreem Ahmad",
    role: "Lead AI Engineer",
    field: "Design",
    image: "/team/rohit.jpg",
  },
  {
    name: "Usama Farooq",
    role: "Graphic Designer",
    field: "Design",
    image: "/team/sara.jpg",
  },
  {
    name: "Malik Sarim",
    role: "Analyst Manager",
    field: "Business Analysis",
    image: "/team/ali.jpg",
  },
  {
    name: "Abeeha Amir",
    role: "Social Media Manager",
    field: "Marketing",
    image: "/team/ali.jpg",
  },
  {
    name: "Syeda Maryam Gillani",
    role: "B.D.M",
    field: "Business Development",
    image: "/team/ali.jpg",
  },
  {
    name: "Labaina Zafar",
    role: "UI/UX Designer",
    field: "Design",
    image: "/team/ali.jpg",
  },
  {
    name: "Asifa",
    role: "Mobile App Developer",
    field: "Mobile Development",
    image: "/team/ali.jpg",
  },
];

const TeamSection = () => {
  const [imageError, setImageError] = useState<string[]>([]);

  const handleImageError = (name: string) => {
    setImageError((prev) => [...prev, name]);
  };

  const renderSocialIcons = (socials: any) => (
    <div className="flex justify-center gap-4 mt-3 text-muted-foreground">
      {socials.linkedin && (
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-primary transition" />
        </a>
      )}
      {socials.github && (
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-primary transition" />
        </a>
      )}
      {socials.dribbble && (
        <a href={socials.dribbble} target="_blank" rel="noopener noreferrer">
          <Dribbble className="w-5 h-5 hover:text-primary transition" />
        </a>
      )}
      {socials.website && (
        <a href={socials.website} target="_blank" rel="noopener noreferrer">
          <Globe className="w-5 h-5 hover:text-primary transition" />
        </a>
      )}
    </div>
  );

  return (
    <section id="team" className="mt-24 px-4">
      <h3 className="text-3xl font-bold text-center mb-16">
        Meet Our{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Core Team
        </span>
      </h3>

      {/* CEO and Co-Founder Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
        {ceoAndPartner.map((member) => (
          <div
            key={member.name}
            className="bg-card-gradient border border-border/40 rounded-2xl p-8 w-full md:w-1/2 text-center shadow-xl transition-transform hover:scale-105 hover:border-primary/70"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 flex items-center justify-center bg-muted">
              {!imageError.includes(member.name) ? (
                <img
                  src={member.image}
                  alt={member.name}
                  onError={() => handleImageError(member.name)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-muted-foreground" />
              )}
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-1">
              {member.name}
            </h4>
            <p className="text-md text-primary mb-1">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.field}</p>
            {renderSocialIcons(member.socials)}
          </div>
        ))}
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-card-gradient border border-border/40 rounded-xl p-6 text-center shadow-md transition-all hover:scale-105 hover:border-primary/60 hover:shadow-lg"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 flex items-center justify-center bg-muted">
              {!imageError.includes(member.name) ? (
                <img
                  src={member.image}
                  alt={member.name}
                  onError={() => handleImageError(member.name)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-muted-foreground" />
              )}
            </div>
            <h4 className="text-lg font-semibold text-foreground">
              {member.name}
            </h4>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.field}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
