import {motion} from 'motion/react';
import {Calendar, MapPin, Ticket, ExternalLink} from 'lucide-react';

const tourDates = [
  {
    date: "JUN 27, 2026",
    city: "MEXICO CITY, MX",
    venue: "ASTRO CDMX",
    status: "ON SALE",
    link: "https://www.passline.com/eventos/la-pta-vibra-tour-cdmx",
    isUpcoming: true,
  },
  {
    date: "FEB 21, 2026",
    city: "SAN ANTONIO, TX",
    venue: "505 ROOFTOP",
    status: "PAST SHOW",
    isUpcoming: false,
  },
  {
    date: "JAN 30, 2026",
    city: "LAREDO, TX",
    venue: "JARDIN X CONTRARERAS",
    status: "PAST SHOW",
    isUpcoming: false,
  },
  {
    date: "NOV 15, 2025",
    city: "AUSTIN, TX",
    venue: "COCONUT CLUB",
    status: "PAST SHOW",
    isUpcoming: false,
  },
];

export default function Tour() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-black">
      <div className="max-w-5xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6"
          >
            TOUR DATES
          </motion.h1>
          <p className="font-mono text-sm text-white/40 uppercase tracking-widest whitespace-nowrap overflow-hidden">
            {"* ".repeat(20)}
          </p>
        </header>

        <div className="space-y-4">
          {tourDates.map((show, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-zinc-900 transition-colors ${show.isUpcoming ? 'bg-zinc-900' : 'opacity-50'}`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-white/40">
                  <Calendar className="w-4 h-4" />
                  {show.date}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-black tracking-tighter uppercase">
                  {show.city}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm uppercase text-white/60">
                  <MapPin className="w-4 h-4" />
                  {show.venue}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {show.isUpcoming ? (
                  <a
                    href={show.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brutalist !bg-white !text-black hover:!bg-transparent hover:!text-white flex items-center gap-2"
                  >
                    GET TICKETS <Ticket className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="font-display text-xs tracking-widest px-4 py-2 border border-white/20 text-white/40 uppercase">
                    {show.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Show Spotlight */}
        <div className="mt-32 p-12 bg-white text-black relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1541432901012-a7abc3513fd9?q=80&w=2000&auto=format&fit=crop" 
            alt="Mexico City Architectural Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-[10s] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10">
            <h2 className="font-display text-sm tracking-widest mb-6 font-bold uppercase">NEXT MAJOR EVENT</h2>
            <h3 className="font-display text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              MEXICO CITY <br />CDMX
            </h3>
            <p className="font-mono text-sm max-w-md uppercase mb-12 opacity-70">
              JOIN US AT ASTRO CDMX FOR THE ULTIMATE LA PUTA VIBRA EXPERIENCE. THIS IS THE BIGGEST SHOW YET.
            </p>
            <a 
              href="https://www.passline.com/eventos/la-pta-vibra-tour-cdmx" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-display text-lg font-black border-4 border-black px-8 py-4 hover:bg-black hover:text-white transition-all transform hover:scale-105"
            >
              SECURE YOUR PLACE <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-black opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-r border-t border-black opacity-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
