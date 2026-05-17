import { ExternalLink, GitBranch, Link, Mail } from "lucide-react";
import heroImage from "../assets/secondstyle.jpeg";
import resumePdf from "../assets/Ajit_Bijarniya_Resume.pdf";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: GitBranch, href: "https://github.com/ajitjaat94", label: "GitHub" },
    { icon: Link, href: "https://www.linkedin.com/in/ajit-kumar-ajitjaat94", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ajitkumar57525@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-4 pb-10 sm:pt-24 sm:pb-14 md:pt-20 md:pb-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24">
      {/* Background glow and shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-black via-black to-purple-900/50"></div>

        {/* Purple and yellow glow circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/50 rounded-full blur-3xl opacity-20"></div>

        {/* Subtle grid lines */}
        <div className="absolute w-auto h-auto  inset-0 opacity-5 bg-[linear-gradient(90deg,#d9ff00_1px,transparent_1px),linear-gradient(#d9ff00_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      {/* Page content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full h-auto flex items-start md:items-center py-10 md:py-0 lg:pl-24 xl:pl-28">
        {/* Social links on left side */}
        <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-50">
          {/* Left line decoration */}
          <div className="w-px h-32 bg-linear-to-b from-transparent via-yellow-500 to-transparent"></div>

          {/* Social Icons */}
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 transition-all duration-300 hover:scale-110"
                title={social.label}
              >
                <Icon
                  size={20}
                  className="text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-lg group-hover:drop-shadow-yellow-400/50"
                />
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-yellow-400 whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            );
          })}

          {/* Vertical line */}
          <div className="w-px h-16 bg-linear-to-b from-transparent via-yellow-400 to-transparent"></div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <span className="text-xs tracking-widest text-white/50 rotate-90 origin-center -ml-6">
              SCROLL
            </span>
          </div>
        </div>

        {/* Main layout with text on the left and image on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 lg:gap-20 items-center w-full ">
          {/* Left side text content */}
          <div className="space-y-8 md:space-y-10 animate-fade-in relative z-20">
            {/* Small Intro */}
            <div className="inline-block\">
              <p className="text-xs md:text-sm font-mono tracking-widest text-purple-400 uppercase">
                // FULLSTACK DEVELOPER
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-yellow-300 to-purple-500 drop-shadow-lg">
                  Ajit
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-md">
              I build{" "}
              <span className="text-yellow-400 font-semibold">
                digital products
              </span>{" "}
              for the web with{" "}
              <span className="text-yellow-400 font-semibold">
                modern design
              </span>{" "}
              and seamless experiences.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
              Crafting responsive, high-performance web applications with
              cutting-edge technologies. Specialized in creating intuitive user
              interfaces and delivering exceptional digital experiences.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 items-center sm:items-start">
              {/* Primary Button */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative inline-flex items-center justify-center min-w-55 px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-yellow-400 via-[#ffeb3b] to-yellow-500 text-black font-bold text-sm md:text-base uppercase tracking-[0.18em] rounded-full shadow-[0_18px_70px_-35px_rgba(217,255,0,0.9)] transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(217,255,0,0.8)] hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <ExternalLink
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </button>

              {/* Secondary Button */}
              <a
                href={resumePdf}
                download="Ajit_Bijarniya_Resume.pdf"
                className="group relative inline-flex items-center justify-center min-w-55 px-6 md:px-8 py-3 md:py-4 border border-purple-500/70 bg-white/5 text-white font-bold text-sm md:text-base uppercase tracking-[0.18em] rounded-full transition-all duration-300 hover:bg-purple-500/15 hover:border-purple-400 hover:shadow-[0_16px_50px_-30px_rgba(139,92,246,0.9)] hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

            {/* Availability Status */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm text-white/70 font-medium">
                Available for Freelance
              </span>
            </div>
          </div>

          {/* Right side image and visual effects */}
          <div className="relative h-130 sm:h-140 md:h-full md:min-h-screen flex items-center justify-center">
            {/* Glow shapes behind the photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large neon glow circle */}
              <div className="absolute w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Floating cubes */}
              <div className="absolute top-20 right-20 w-12 h-12 border-2 border-yellow-400/30 rounded-lg animate-float opacity-50"></div>
              <div className="absolute bottom-20 right-32 w-8 h-8 border border-purple-500/30 rounded opacity-40 animate-float-delayed"></div>
              <div className="absolute top-1/3 left-10 w-10 h-10 border-2 border-yellow-400/20 rounded-lg animate-float opacity-30"></div>
            </div>

            {/* Photo block */}
            <div className="relative z-20">
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden group">
                {/* Image glow border */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500/50 to-yellow-400/50 rounded-2xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Image */}
                <img
                  src={heroImage}
                  alt="Developer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-500"
                />
              </div>
            </div>

            {/* Floating code snippet card */}
            <div className="absolute bottom-10 left-0 md:bottom-20 md:left-10 z-30 animate-float-code">
              <div className="backdrop-blur-md bg-white/5 border border-purple-500/30 rounded-lg p-4 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:border-purple-500/60 group cursor-pointer">
                <div className="text-xs md:text-sm font-mono text-green-400 space-y-1">
                  <p>
                    <span className="text-purple-400">const</span> Ajit = ()
                    =&gt; {"{"}
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">build</span>();
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">innovate</span>();
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">repeat</span>();
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>

            {/* Orbit lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ pointerEvents: "none" }}
            >
              <circle
                cx="50%"
                cy="50%"
                r="40%"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="1"
                opacity="0.2"
              />
              <circle
                cx="50%"
                cy="50%"
                r="60%"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="1"
                opacity="0.1"
              />
              <defs>
                <linearGradient
                  id="orbitGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d9ff00" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Floating contact button on large screens */}
        <div className="hidden lg:flex absolute bottom-10 right-10 z-30">
          <button className="group relative w-24 h-24 border-2 border-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110">
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-yellow-400 border-r-purple-500 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Let's
              </span>
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Talk
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-code {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-float-code {
          animation: float-code 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
