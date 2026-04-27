import {motion} from 'motion/react';
import {Play, Image as ImageIcon, Maximize2} from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'DJ LA MOON - LIVE',
    url: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?q=80&w=1000&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 2,
    type: 'video',
    title: 'LA PUTA VIBRA - SHORTS',
    url: 'https://www.youtube.com/embed/EV_06UxEE2A',
    size: 'small',
  },
  {
    id: 3,
    type: 'image',
    title: 'MEXICO TOUR TEASER',
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 4,
    type: 'image',
    title: 'BEHIND THE SCENES',
    url: 'https://images.unsplash.com/photo-1621509355799-a4773da28456?q=80&w=1000&auto=format&fit=crop',
    size: 'tall',
  },
  {
    id: 5,
    type: 'image',
    title: 'CROWD LOVE',
    url: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 6,
    type: 'video',
    title: 'THE MIXING BOARD',
    url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    size: 'large',
  },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-white flex-grow opacity-20" />
                <h2 className="font-mono text-[10px] tracking-[0.5em] text-white/60">PAST SHOWS \ ARCHIVE</h2>
            </div>
          <h1 className="font-display text-7xl md:text-[10vw] font-black tracking-tighter uppercase text-center leading-[0.8] mb-12">
            VISUALS
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative group overflow-hidden border border-white/10 thorny-vibe",
                item.size === 'large' && "md:col-span-2",
                item.size === 'tall' && "md:row-span-2"
              )}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                   {item.type === 'video' ? <Play className="w-6 h-6 fill-white" /> : <ImageIcon className="w-6 h-6" />}
                   <Maximize2 className="w-4 h-4 text-white/50 cursor-pointer" />
                </div>
                <div>
                   <span className="font-mono text-[10px] text-white/50 mb-2 block">{item.type.toUpperCase()}</span>
                   <h3 className="font-display text-xl font-bold tracking-tighter uppercase">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Featured Section */}
        <div className="mt-32 p-1 border border-white/20">
            <div className="relative aspect-video bg-zinc-900 flex items-center justify-center overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80\u0026w=2000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[20s] linear"
                />
                <div className="relative z-10 text-center">
                    <button className="w-24 h-24 rounded-full border border-white flex items-center justify-center mb-8 hover:bg-white hover:text-black transition-all group/btn">
                        <Play className="w-8 h-8 fill-current translate-x-1" />
                    </button>
                    <h2 className="font-display text-2xl md:text-5xl font-black tracking-tighter uppercase mb-2">TOUR AFTERMOVIE</h2>
                    <p className="font-mono text-[10px] tracking-widest text-white/50 underline cursor-pointer">WATCH ON YOUTUBE</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
