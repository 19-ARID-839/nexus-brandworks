import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import techLogos from "@/data/techLogos";
import roadmapSteps from "@/data/roadmap";
import subServices from "@/data/subServices";
import Header from "@/components/Header"; // ✅ Assuming you have a Header component

const ServiceDetailPage = () => {
  const { serviceId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = {
    title: serviceId?.replace(/-/g, " ") ?? "",
    description:
      "This is a detailed service page about " +
      serviceId?.replace(/-/g, " ") +
      ", offering tailored solutions, cutting-edge tools, and scalable strategies.",
    image: "/images/" + serviceId + ".jpg",
    subServices: subServices[serviceId!] ?? [],
    roadmap: roadmapSteps[serviceId!] ?? [],
    techLogos: techLogos[serviceId!] ?? [],
  };

  return (
    <div className="bg-[#12141D] text-white">
      {/* ✅ Header */}
      <Header />

      {/* 1. Hero Section */}
      <section className="min-h-screen px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 capitalize">
            {service.title}
          </h1>
          <p className="text-lg text-gray-400 mb-6">{service.description}</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold">
            Get Free Consultation
          </button>
        </div>
        <div className="w-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* 2. Sub Services */}
      <section
        className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center relative text-white"
        style={{ backgroundColor: "#12141D" }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>

        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {service.subServices.map((sub, idx) => (
            // <div
            //   key={idx}
            //   className="group bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#2b2b2b] rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            // >
            <div className="bg-glassCard border border-primary/70 rounded-xl p-6 transition transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col items-center text-center">
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-25 h-25 mb-6 shadow-md"
                />
                <h3 className="text-2xl font-semibold mb-2" style={{color: '#309ECF'}}>{sub.title}</h3>
                <p className="text-gray-400 mb-4 text-base leading-relaxed">
                  {sub.description}
                </p>
                <p className="text-sm text-gray-500 leading-6">
                  Our {sub.title.toLowerCase()} service ensures end-to-end
                  support, tailored solutions, and performance-focused
                  implementation using the latest tools and technologies to
                  drive results.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Roadmap Section */}
      <section
        className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center relative text-white"
        style={{ backgroundColor: "#12141D" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          Our Workflow
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 relative z-10">
          {service.roadmap.map((step, idx) => (
            <div
              key={idx}
              className="relative group w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center transition-transform duration-500 hover:-translate-y-3"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary to-accent z-0" />

              {/* Transparent Circle */}
              <div className="relative z-10 w-full h-full bg-transparent border-4 border-transparent rounded-full flex items-center justify-center text-center font-semibold text-sm md:text-base backdrop-blur-sm">
                {step.title}
              </div>

              {/* Hover Description */}
              <div className="absolute bottom-[-50px] text-xs md:text-sm text-center opacity-0 group-hover:opacity-100 transition duration-500 w-40">
                {step.description}
              </div>

              {/* Left Connector */}
              {idx !== 0 && (
                <span
                  className="absolute top-1/2 left-[-40px] hidden md:block"
                  style={{
                    width: "40px",
                    height: "4px",
                    background:
                      "linear-gradient(to right, rgba(136,132,255,0.5), transparent)",
                    transform: "translateY(-50%) rotate(5deg)",
                    borderRadius: "9999px",
                  }}
                />
              )}

              {/* Right Connector */}
              {idx !== service.roadmap.length - 1 && (
                <span
                  className="absolute top-1/2 right-[-40px] hidden md:block"
                  style={{
                    width: "40px",
                    height: "4px",
                    background:
                      "linear-gradient(to left, rgba(136,132,255,0.5), transparent)",
                    transform: "translateY(-50%) rotate(-5deg)",
                    borderRadius: "9999px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technologies Section */}
      <section className="min-h-screen px-6 md:px-20 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {service.techLogos.map((tech, idx) => (
            // <div
            //   key={idx}
            //   className="bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-2xl transition p-4 flex flex-col items-center justify-center"
            // >
            <div className="bg-glassCard border border-primary/70 rounded-xl p-6 transition transform hover:-translate-y-1 duration-300 flex flex-col items-center justify-center">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm text-gray-300 text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;

// import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
// import {
//   SiJavascript,
//   SiReact,
//   SiAngular,
//   SiNodedotjs,
//   SiPhp,
//   SiLaravel,
//   SiFlutter,
//   SiKotlin,
//   SiSwift,
//   SiPython,
//   SiTensorflow,
//   SiNextdotjs,
//   SiAdobeillustrator,
//   SiAdobexd,
//   SiCanva,
//   SiInstagram,
//   SiFacebook,
//   SiGooglemarketingplatform,
//   SiMaildotru,
//   SiChartdotjs,
//   SiGoogleads,
//   SiSequelize,
//   SiMysql,
// } from "react-icons/si";
// import { useState } from "react";

// const serviceMap: Record<
//   string,
//   {
//     title: string;
//     description: string;
//     subServices: string[];
//     technologies: { name: string; icon: JSX.Element }[];
//   }
// > = {
//   "web-development": {
//     title: "Web Development",
//     description: "Build cutting-edge, scalable, and interactive web applications tailored to your business.",
//     subServices: ["Frontend Development", "Backend Development", "MERN Stack", "Next.js"],
//     technologies: [
//       { name: "JavaScript", icon: <SiJavascript /> },
//       { name: "React", icon: <SiReact /> },
//       { name: "Angular", icon: <SiAngular /> },
//       { name: "Node.js", icon: <SiNodedotjs /> },
//       { name: "PHP", icon: <SiPhp /> },
//       { name: "Laravel", icon: <SiLaravel /> },
//     ],
//   },
//   "mobile-app-development": {
//     title: "Mobile App Development",
//     description: "Deliver immersive user experiences through high-performance mobile applications.",
//     subServices: ["React Native", "Flutter", "Swift", "Kotlin"],
//     technologies: [
//       { name: "React Native", icon: <SiReact /> },
//       { name: "Flutter", icon: <SiFlutter /> },
//       { name: "Kotlin", icon: <SiKotlin /> },
//       { name: "Swift", icon: <SiSwift /> },
//     ],
//   },
//   "ai-solutions": {
//     title: "AI Solutions",
//     description: "Harness artificial intelligence to automate, predict, and personalize at scale.",
//     subServices: ["Chatbots", "Vision AI", "NLP", "Recommendation Engines"],
//     technologies: [
//       { name: "Python", icon: <SiPython /> },
//       { name: "TensorFlow", icon: <SiTensorflow /> },
//       { name: "Next.js", icon: <SiNextdotjs /> },
//     ],
//   },
//   "graphic-design": {
//     title: "Graphic Design",
//     description: "Make your brand visually unforgettable with high-impact graphics.",
//     subServices: ["Logo Design", "UI/UX Design", "Illustration", "Print Design"],
//     technologies: [
//       { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
//       { name: "Adobe XD", icon: <SiAdobexd /> },
//       { name: "Canva", icon: <SiCanva /> },
//     ],
//   },
//   "social-media-marketing": {
//     title: "Social Media Marketing",
//     description: "Grow your online audience organically and through advertising.",
//     subServices: ["Instagram", "Facebook", "Content Creation", "Ad Strategy"],
//     technologies: [
//       { name: "Instagram", icon: <SiInstagram /> },
//       { name: "Facebook", icon: <SiFacebook /> },
//       { name: "Google Ads", icon: <SiGoogleads /> },
//     ],
//   },
//   "digital-marketing": {
//     title: "Digital Marketing",
//     description: "Comprehensive digital marketing — from SEO to email to analytics.",
//     subServices: ["SEO", "Email Marketing", "PPC Ads", "Analytics"],
//     technologies: [
//       { name: "Google Marketing", icon: <SiGooglemarketingplatform /> },
//       { name: "Mail", icon: <SiMaildotru /> },
//       { name: "Analytics", icon: <SiChartdotjs /> },
//     ],
//   },
// };

// const ServiceDetailPage = () => {
//   const { serviceId } = useParams<{ serviceId: string }>();
//   const service = serviceMap[serviceId || ""];
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Submit logic here
//     console.log("Message sent:", formData);
//     setIsModalOpen(false);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   if (!service) {
//     return <div className="text-center text-red-500 p-10">Service not found.</div>;
//   }

//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#090909] to-[#12172c] px-4">
//         <h1 className="text-5xl font-extrabold text-white mb-4">{service.title}</h1>
//         <p className="text-lg text-muted-foreground max-w-2xl mb-6">{service.description}</p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
//         >
//           Send Us a Message
//         </button>
//       </section>

//       {/* Modal */}
//     {isModalOpen && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-[#1f1f1f] text-white rounded-xl shadow-lg max-w-md w-full p-6 relative border border-gray-700">
//       <h2 className="text-xl font-bold mb-4">Send a Message</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           className="w-full bg-[#2a2a2a] text-white border border-gray-600 p-2 rounded-md placeholder-gray-400"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           className="w-full bg-[#2a2a2a] text-white border border-gray-600 p-2 rounded-md placeholder-gray-400"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows={4}
//           value={formData.message}
//           onChange={handleInputChange}
//           className="w-full bg-[#2a2a2a] text-white border border-gray-600 p-2 rounded-md placeholder-gray-400"
//           required
//         />
//         <div className="flex justify-end gap-2">
//           <button
//             type="button"
//             onClick={() => setIsModalOpen(false)}
//             className="px-4 py-2 border border-gray-600 text-white bg-[#2a2a2a] rounded-md hover:bg-[#3a3a3a]"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//       <button
//         onClick={() => setIsModalOpen(false)}
//         className="absolute top-3 right-3 text-gray-400 hover:text-white"
//       >
//         ✕
//       </button>
//     </div>
//   </div>
// )}

//       {/* Sub-Services Section */}
//       <section className="py-16 px-6 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//           {service.subServices.map((sub, i) => (
//             <div
//               key={i}
//               className="p-6 border border-border rounded-xl bg-card shadow-md transition-all duration-300 transform hover:scale-105 hover:border-primary hover:shadow-lg"
//             >
//               <div className="flex items-center justify-center mb-4">
//                 <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary text-xl">
//                   {/* Optionally add icon here if available */}
//                   {sub[0]}
//                 </div>
//               </div>
//               <h3 className="text-xl font-semibold text-center">{sub}</h3>
//               <p className="text-muted-foreground mt-2 text-sm text-center">
//                 Learn how <strong>{sub}</strong> fits into our services offering.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Technologies Used Section */}
//       <section className="py-16 bg-muted px-6">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">Technologies We Use</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
//             {service.technologies.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center gap-2 p-4 bg-background rounded-lg border border-border hover:shadow-md transition"
//               >
//                 <div className="text-4xl text-primary w-12 h-12 flex items-center justify-center">
//                   {tech.icon}
//                 </div>
//                 <span className="text-sm font-medium">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceDetailPage;
