import {motion} from 'motion/react';
import {Mail, Globe, MapPin, Send} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-black overflow-hidden relative">
      {/* Background Text */}
      <div className="absolute top-20 -right-40 text-[30vw] font-display font-black text-white/5 tracking-tighter leading-none pointer-events-none rotate-90 md:rotate-0">
        BOOK
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-24">
          <h1 className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4">
            CONTACT
          </h1>
          <p className="font-mono text-sm text-white/40 uppercase tracking-widest">
            BOOKINGS \ PRESS \ GENERAL INQUIRIES
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="space-y-12">
              <section>
                <h3 className="font-display text-xs tracking-widest text-white mb-6 uppercase">Direct Booking</h3>
                <div className="group border-b border-white/10 pb-6 hover:border-white transition-colors">
                    <a href="mailto:djlamoon@gmail.com" className="flex items-center gap-4 group">
                        <Mail className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                        <span className="font-display text-xl md:text-2xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform">djlamoon@gmail.com</span>
                    </a>
                </div>
              </section>

              <section>
                <h3 className="font-display text-xs tracking-widest text-white mb-6 uppercase">Based In</h3>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-white/40" />
                    <span className="font-display text-xl md:text-2xl font-bold tracking-tighter uppercase">AUSTIN, TX \ PUERTO RICO</span>
                </div>
              </section>

              <section>
                <h3 className="font-display text-xs tracking-widest text-white mb-6 uppercase">Follow</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-tighter text-white/40">
                    <a href="#" className="hover:text-white underline">Instagram</a>
                    <a href="#" className="hover:text-white underline">TikTok</a>
                    <a href="#" className="hover:text-white underline">Twitter</a>
                    <a href="#" className="hover:text-white underline">Soundcloud</a>
                </div>
              </section>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 p-12">
            <h3 className="font-display text-lg font-black tracking-tighter uppercase mb-8">INQUIRY FORM</h3>
            <form className="space-y-8" action="https://formsubmit.co/djlamoon@gmail.com" method="POST">
                <div className="space-y-2 border-b border-white/20 pb-2 focus-within:border-white transition-colors">
                    <label className="font-mono text-[8px] uppercase tracking-widest text-white/40">Your Name</label>
                    <input type="text" name="name" required className="w-full bg-transparent border-none outline-none font-display text-sm uppercase placeholder:text-white/10" placeholder="NAME / ORGANIZATION" />
                </div>
                <div className="space-y-2 border-b border-white/20 pb-2 focus-within:border-white transition-colors">
                    <label className="font-mono text-[8px] uppercase tracking-widest text-white/40">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-none outline-none font-display text-sm uppercase placeholder:text-white/10" placeholder="EMAIL@EXAMPLE.COM" />
                </div>
                <div className="space-y-2 border-b border-white/20 pb-2 focus-within:border-white transition-colors">
                    <label className="font-mono text-[8px] uppercase tracking-widest text-white/40">Message</label>
                    <textarea name="message" required className="w-full bg-transparent border-none outline-none font-display text-sm uppercase placeholder:text-white/10 resize-none h-32" placeholder="EVENT DETAILS / DATE / BUDGET" />
                </div>
                <button type="submit" className="w-full btn-brutalist !bg-white !text-black hover:!bg-black hover:!text-white flex items-center gap-2 transition-all">
                    SEND INQUIRY <Send className="w-4 h-4" />
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
