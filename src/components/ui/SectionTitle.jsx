import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const SectionTitle = ({ title, subtitle, centered = false }) => (
  <motion.div 
    {...fadeUp}
    className={`mb-12 ${centered ? 'text-center' : ''}`}
  >
    {subtitle && (
      <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
        {subtitle}
      </p>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
      {title}
    </h2>
  </motion.div>
);