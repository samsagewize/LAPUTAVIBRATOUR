import {motion} from 'motion/react';
import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X, Music, Disc} from 'lucide-react';
import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'TOUR', path: '/tour' },
  { name: 'SHOP', path: '/shop' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Disc className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-display text-lg tracking-tighter font-bold">LA P*TA VIBRA</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display text-[10px] tracking-widest transition-colors duration-300 hover:text-white",
                location.pathname === link.path ? "text-white underline underline-offset-4" : "text-white/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/tour" className="btn-brutalist !py-2 !px-4">
            MEXICO TICKETS
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-display text-sm tracking-widest text-white/50 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
