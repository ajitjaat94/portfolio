import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiFilePaper2Line } from 'react-icons/ri';

const Expreince = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#02030a] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#d9ff00]/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">// EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Selected Experience</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-400">Real systems built for production, focusing on reliability, usability, and clear product value.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.75)] transition-transform duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#d9ff00]/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              <HiOutlineAcademicCap size={20} /> Featured project
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white">Exam System Web App</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">A full exam platform with timed assessments, question bank management, role-based dashboards for students and instructors, and progress reporting.</p>

            <div className="mt-6 grid gap-3 text-sm text-gray-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Role</p>
                <p className="mt-2 text-white/80">Fullstack Developer</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Tech</p>
                <p className="mt-2 text-white/80">React · Node.js · Express · MongoDB · Tailwind</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">Timed Exams</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">Randomized Questions</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">Admin Analytics</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-200">PDF Results</span>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#d9ff00]/10 p-3 text-[#d9ff00]"><RiFilePaper2Line size={20} /></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">UX & Frontend</h4>
                  <p className="mt-2 text-sm text-gray-300">Improved UI flow, accessibility, and reusable component structure across responsive pages.</p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[#8b5cf6]/10 p-3 text-[#8b5cf6]"><RiFilePaper2Line size={20} /></div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Deployment</h4>
                  <p className="mt-2 text-sm text-gray-300">Set up deployments and environment pipelines for consistent staging and production releases & deployment in render.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expreince;
