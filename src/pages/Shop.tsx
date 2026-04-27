import {motion} from 'motion/react';
import {ShoppingBag, Plus, Star} from 'lucide-react';

const products = [
  {
    id: 1,
    name: "LPV TOUR HOODIE",
    price: "$65.00",
    description: "OVERSIZED BRUTALIST PRINT. HEAVYWEIGHT COTTON.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "APPAREL",
  },
  {
    id: 2,
    name: "CDMX LIMITED TEE",
    price: "$35.00",
    description: "EXCLUSIVE CDMX ASTRO SHOW DESIGN.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "APPAREL",
  },
  {
    id: 3,
    name: "MOON STAR CAP",
    price: "$30.00",
    description: "EMBROIDERED LOGO. ADJUSTABLE.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e881?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "ACCESSORIES",
  },
  {
    id: 4,
    name: "PERREO SLIPMATS",
    price: "$25.00",
    description: "PAIR OF HIGH-QUALITY TURNTABLES SLIPMATS.",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "COLLECTIBLES",
  },
  {
    id: 5,
    name: "VIOLENTA VINYL",
    price: "$40.00",
    description: "LIMITED RECORDED EDITION. CLEAR VINYL.",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "MUSIC",
  },
  {
    id: 6,
    name: "LA MOON STAMP SET",
    price: "$15.00",
    description: "COLLECTIBLE STICKER PACK.",
    image: "https://images.unsplash.com/photo-1572375927083-07f66a4f20ec?q=80\u0026w=1000\u0026auto=format\u0026fit=crop",
    category: "COLLECTIBLES",
  },
];

export default function Shop() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase mb-4">
              SHOP
            </h1>
            <p className="font-mono text-sm text-white/40 uppercase tracking-widest">
              COLLECTIBLES & TOUR MERCH
            </p>
          </div>
          <div className="flex gap-4">
             <div className="font-mono text-[10px] uppercase border border-white/20 px-4 py-2 opacity-50">FILTER: ALL</div>
             <div className="font-mono text-[10px] uppercase border border-white/20 px-4 py-2 opacity-50">SORT: NEWEST</div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[1/1] overflow-hidden bg-zinc-900 mb-6 border border-white/10 group-hover:border-white/40 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 bg-white text-black p-3 hover:scale-110 transition-transform flex items-center gap-2 font-display text-[10px] font-bold">
                  ADD TO BAG <Plus className="w-4 h-4" />
                </button>
                <div className="absolute top-4 left-4 font-mono text-[8px] bg-black/50 backdrop-blur-md px-2 py-1 tracking-widest text-white/70">
                    {product.category}
                </div>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-lg font-black tracking-tighter uppercase leading-none">
                  {product.name}
                </h3>
                <span className="font-mono text-sm font-bold">{product.price}</span>
              </div>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-tight">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Banner */}
        <div className="mt-40 p-20 border border-white/10 flex flex-col items-center text-center overflow-hidden relative">
            <h2 className="font-display text-4xl md:text-8xl font-black tracking-tighter text-white/5 uppercase mb-8 absolute -bottom-10 whitespace-nowrap">
                {"EXCLUSIVE DROPS ".repeat(5)}
            </h2>
            <Star className="w-12 h-12 mb-8 animate-pulse" />
            <p className="font-display text-2xl tracking-tighter uppercase max-w-xl mb-12">
                MORE ITEMS DROPPING DURING THE MEXICO TOUR. JOIN THE NEWSLETTER FOR EARLY ACCESS.
            </p>
            <div className="flex w-full max-w-md border-b-2 border-white pb-2 hover:border-white/50 transition-colors">
                <input 
                    type="email" 
                    placeholder="ENTER EMAIL"
                    className="bg-transparent border-none outline-none flex-grow font-mono text-xs uppercase"
                />
                <button className="font-display text-[10px] font-bold tracking-widest">JOIN</button>
            </div>
        </div>
      </div>
    </div>
  );
}
