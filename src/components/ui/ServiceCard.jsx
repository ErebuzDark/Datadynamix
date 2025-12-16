import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    {...fadeUp}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-border"
  >
    <div className="text-primary text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);