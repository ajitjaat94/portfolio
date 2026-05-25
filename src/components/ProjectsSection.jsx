import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import educationImage from "../assets/dlkdj.png";
import hospitalImage from "../assets/ChatGPT Image May 9, 2026, 03_13_35 PM.png";
import weatherImage from "../assets/weather app.avif";

const projects = [
  {
    id: 1,
    title: "Education Platform",
    label: "Full Stack Project",
    description:
      "Full Stack education platform with authentication, PDF management, question system, and admin dashboard features. Built with modern web technologies for scalable learning experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/ajitjaat94/Eduction-Platform",
    image: educationImage,
  },
  {
    id: 2,
    title: "Hospital Management Website",
    label: "Frontend Project",
    description:
      "Modern hospital website built using React and Tailwind CSS with responsive UI and clean component structure. Designed for optimal user experience and accessibility.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://hospital-management-system-coral-two.vercel.app/",
    githubLink: "https://github.com/ajitjaat94/hospital-management-frontend",
    image: hospitalImage,
  },
  {
    id: 3,
    title: "Weather App",
    label: "React Project",
    description:
      "Real-time weather application using API integration to display live weather data and conditions. Features dynamic UI updates and location-based weather forecasting.",
    tech: ["React.js", "API Integration", "CSS3", "JavaScript"],
    liveLink: "#",
    githubLink: "https://github.com/ajitjaat94/Weather-App",
    image: weatherImage,
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-4 sm:py-4 lg:py-8"
    >
      {/* Background glow effects */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#8b5cf6]/15 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#d9ff00]/10 blur-3xl" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(217,255,0,0.06),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
            // FEATURED PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Selected <span className="text-[#d9ff00]">Work & Projects</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-400">
            Showcasing real-world projects and development experience. Each
            project demonstrates my expertise in building scalable, modern web
            applications with premium user experience and clean code
            architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 hover:border-[#d9ff00]/20 hover:shadow-[0_50px_140px_-35px_rgba(217,255,0,0.3)]"
            >
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(217,255,0,0.6),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={`grid gap-8 lg:grid-cols-2 items-center p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Image Section */}
                <div
                  className={`relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff00]/10 to-[#8b5cf6]/10 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Corner glow effects */}
                  <div className="absolute top-4 left-4 w-16 h-16 rounded-full border border-[#d9ff00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#8b5cf6]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                      {project.label}
                    </p>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full border border-[#d9ff00]/30 bg-[#d9ff00]/5 text-[#d9ff00] transition-all duration-300 group-hover:border-[#d9ff00]/60 group-hover:bg-[#d9ff00]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href={project.liveLink}
                      className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d9ff00] to-[#ffeb3b] text-black font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_16px_50px_-30px_rgba(217,255,0,0.6)] transition-all duration-300 hover:shadow-[0_18px_55px_-25px_rgba(217,255,0,0.7)] hover:-translate-y-0.5"
                    >
                      Live Demo
                      <ExternalLink
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                    <a
                      href={project.githubLink}
                      className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 bg-white/5 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:border-[#8b5cf6]/60 hover:bg-[#8b5cf6]/10 hover:shadow-[0_16px_50px_-30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
                    >
                      GitHub
                      <SiGithub
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom corner glow */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-[#8b5cf6]/10 bg-[#8b5cf6]/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
