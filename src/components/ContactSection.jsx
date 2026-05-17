import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:ajitkumar57525@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#040405] py-4
     sm:py-4 lg:py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">// CONTACT</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-400">I'm available for freelance work and new projects — send a message and I'll reply shortly.</p>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:ajitkumar57525@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#d9ff00] px-6 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:bg-yellow-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-10 shadow-lg/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-md bg-purple-500/10 text-purple-400"><Mail size={20} /></div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:ajitkumar57525@gmail.com" className="text-sm text-white/90">ajitkumar57525@gmail.com</a>
                </div>
              </div>

              <p className="text-sm text-gray-400">Prefer a quick message? Use the form — it opens your email client with the message prefilled.</p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <label className="sr-only">Your name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-transparent transition"
              />

              <label className="sr-only">Your email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
                required
                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-transparent transition"
              />

              <label className="sr-only">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can I help you?"
                rows={5}
                required
                className="bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 outline-none resize-none focus:ring-2 focus:ring-yellow-400/40 focus:border-transparent transition"
              />

              <div className="flex items-center justify-end">
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 bg-[#d9ff00] text-black font-semibold rounded-full hover:shadow-lg transition">
                  Send Message
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
