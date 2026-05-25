import { HiOutlineAcademicCap } from 'react-icons/hi';


const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#02030a] py-16 sm:py-20 lg:py-24">
      
      {/* BG Effects */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#d9ff00]/7 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#d9ff00_1px,transparent_1px),linear-gradient(#d9ff00_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-72 h-72 bg-[#d9ff00]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-purple-400 uppercase">// experience</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Selected Experience
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Real systems built for production, focusing on reliability, usability, and clear product value.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Featured Card */}
          <article className="group relative rounded-3xl border border-purple-500/20 bg-white/[0.03] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50">
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9ff00]/20 bg-[#d9ff00]/8 px-4 py-1.5 text-xs font-bold text-[#d9ff00] font-mono tracking-wider mb-6">
              <HiOutlineAcademicCap size={14} /> Featured Project
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">Exam System Web App</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              A full exam platform with timed assessments, question bank management, role-based dashboards for students and instructors, and progress reporting.
            </p>

            {/* Meta */}
            <div className="grid gap-3 mb-6">
              {[
                { label: 'Role', value: 'Fullstack Developer' },
                { label: 'Tech Stack', value: 'React · Node.js · Express · MongoDB · Tailwind' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-2xl border border-white/7 bg-white/[0.03] px-4 py-3">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase mb-1.5">{label}</p>
                  <p className="text-sm text-white/75">{value}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Timed Exams', 'Randomized Questions', 'Admin Analytics', 'PDF Results'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60 font-mono hover:border-yellow-400/40 hover:text-yellow-400 transition-colors duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Right Column */}
          <div className="flex flex-col gap-4">

            {/* UX Card */}
            <article className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#d9ff00]/30">
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-[#d9ff00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-11 h-11 rounded-2xl border border-[#d9ff00]/15 bg-[#d9ff00]/8 flex items-center justify-center text-xl mb-4">
                🎨
              </div>
              <h4 className="font-bold text-white mb-2">UX &amp; Frontend</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Improved UI flow, accessibility, and reusable component structure across responsive pages.</p>
            </article>

            {/* Deployment Card */}
            <article className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-11 h-11 rounded-2xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center text-xl mb-4">
                🚀
              </div>
              <h4 className="font-bold text-white mb-2">Deployment</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Set up deployment pipelines for consistent staging and production releases on Render.</p>
            </article>

            {/* Stats Bar */}
            <div className="rounded-2xl border border-white/7 bg-white/[0.02] px-6 py-5">
              <div className="flex justify-between items-center">
                {[
                  { num: '3+', label: 'Projects' },
                  { num: '5+', label: 'Tech Used' },
                  { num: '100%', label: 'Fullstack' },
                ].map(({ num, label }, i, arr) => (
                  <div key={label} className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[#d9ff00]">{num}</p>
                      <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase mt-1">{label}</p>
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-10 bg-white/8" />}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;