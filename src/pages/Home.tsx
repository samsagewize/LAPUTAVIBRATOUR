import {motion} from 'motion/react';
import {ArrowRight, Disc, Star, Zap} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Overlay Texture */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
        
        {/* Animated Background Text */}
        <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center">
            <h1 className="text-[20vw] font-display font-black tracking-tighter whitespace-nowrap animate-pulse">
                PERREO PERREO PERREO
            </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
            >
                <Disc className="w-32 h-32 text-white/20" />
                <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white fill-white" />
            </motion.div>
          </div>
          
          <h2 className="font-display text-[12vw] md:text-[8vw] leading-[0.8] mb-8 font-black tracking-tighter">
            LA P*TA<br />VIBRA
          </h2>
          
          <p className="font-mono text-sm md:text-md uppercase tracking-[0.3em] text-white/60 mb-12 max-w-2xl mx-auto px-4">
            DJ LA MOON TOUR 2026 — EXPERIENCE THE RHYTHM OF THE MOON.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/tour" className="btn-brutalist w-full md:w-auto">
              SEE TOUR DATES
            </Link>
            <Link to="/shop" className="group flex items-center gap-2 font-display text-[10px] tracking-widest hover:text-white/60 transition-colors">
              GET EXCLUSIVE MERCH <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 md:left-20 hidden md:block"
        >
            <div className="font-mono text-[10px] text-white/20 uppercase vertical-text">STAY TUNED</div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
              WHO IS <br />DJ LA MOON?
            </h3>
            <div className="space-y-6 font-mono text-sm uppercase leading-relaxed text-black/70">
              <p>
                From Puerto Rico to Austin, Texas. DJ la MOON is a force of nature spinning the rhythms that define a generation.
              </p>
              <p>
                Specializing in Reggaeton, Perreo, Dembow, and Baile Funk. If you can dance to it, she drops it.
              </p>
              <p>
                A MixSyndicate DJ and 2020 Future Front of Texas Resident Artist. Beyond the music, a pioneer in Web3 and NFT culture.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-black group overflow-hidden thorny-vibe">
             {/* Simulated Portrait */}
             <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop" 
                alt="DJ La Moon Portrait"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 border-[20px] border-white/10 group-hover:border-white/30 transition-colors z-10 pointer-events-none" />
             <div className="absolute bottom-8 right-8 z-20">
                <Star className="w-12 h-12 text-white fill-white" />
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter mb-20 text-white/10 uppercase">
                THE TOUR EXPERIENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10">
                <div className="p-12 bg-black hover:bg-zinc-900 transition-colors group thorny-vibe">
                    <Zap className="w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="font-display text-lg mb-4 tracking-tighter uppercase">HIGH ENERGY</h4>
                    <p className="font-mono text-xs text-white/40 uppercase">Non-stop perreo from start to finish. We don't just host shows, we create memories.</p>
                </div>
                <div className="p-12 bg-black hover:bg-zinc-900 transition-colors group thorny-vibe">
                    <Disc className="w-8 h-8 mb-6 group-hover:rotate-180 transition-transform duration-700" />
                    <h4 className="font-display text-lg mb-4 tracking-tighter uppercase">CURATED SETS</h4>
                    <p className="font-mono text-xs text-white/40 uppercase">A blend of classic reggaeton and the latest viral hits, perfectly curated for the vibe.</p>
                </div>
                <div className="p-12 bg-black hover:bg-zinc-900 transition-colors group thorny-vibe">
                    <Star className="w-8 h-8 mb-6 group-hover:animate-pulse" />
                    <h4 className="font-display text-lg mb-4 tracking-tighter uppercase">EXCLUSIVE MERCH</h4>
                    <p className="font-mono text-xs text-white/40 uppercase">Limited edition tour drops and collectibles available only at our shows.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
