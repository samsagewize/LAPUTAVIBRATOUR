import {Disc, Instagram, Twitter, Youtube, Music2} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Disc className="w-8 h-8" />
            <span className="font-display text-xl tracking-tighter font-bold">LA P*TA VIBRA</span>
          </Link>
          <p className="text-white/40 text-sm max-w-sm font-mono uppercase tracking-tighter leading-relaxed">
            The experience of reggaeton, perreo, and latin rhythms coming to life.
            From Puerto Rico to the world.
          </p>
        </div>

        <div>
          <h4 className="font-display text-[10px] tracking-widest text-white mb-6 uppercase">Navigate</h4>
          <ul className="flex flex-col gap-4 text-xs font-mono text-white/40 uppercase">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/tour" className="hover:text-white">Tour Dates</Link></li>
            <li><Link to="/shop" className="hover:text-white">Merch Shop</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[10px] tracking-widest text-white mb-6 uppercase">Connect</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com/djlamoon" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/djlamoon" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/djlamoon" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://soundcloud.com/djlamoon" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Music2 className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-8 text-[10px] font-mono text-white/30 uppercase tracking-widest">
            © 2026 LA PUTA VIBRA TOUR.
          </p>
        </div>
      </div>
    </footer>
  );
}
