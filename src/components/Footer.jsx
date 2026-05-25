import { SiGithub } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  const scrollToTop = () => {
    const el = document.getElementById('/home');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02030a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Ajit Bijarniya — Built with care.</div>
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
          <button onClick={scrollToTop} className="text-sm text-white/70 transition hover:text-yellow-400">Back to top</button>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ajitjaat94" title="GitHub" className="text-white/60 transition hover:text-white/90"><SiGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/ajit-kumar-ajitjaat94" title="LinkedIn" className="text-white/60 transition hover:text-white/90"><BsLinkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
