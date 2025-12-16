import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const ServiceCard = ({title, description, image }) => (
   <motion.div
    variants={fadeUp}
    whileHover={{ scale: 1.05 }}
    className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Gradient Overlay - Always visible but intensifies on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent group-hover:from-foreground/95 group-hover:via-foreground/70 transition-all duration-500 z-10"></div>

    {/* Content */}
    <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
      <h3 className="text-2xl font-semibold text-white mb-3 transform transition-transform duration-300">
        {title}
      </h3>
      
      {/* Description - Hidden by default, slides up on hover */}
      <p className="hidden group-hover:block text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 delay-1000 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {description}
      </p>
    </div>

    {/* Optional: Accent border on hover */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 z-30 rounded-xl pointer-events-none"></div>
  </motion.div>
);