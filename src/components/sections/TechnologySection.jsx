import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const TechnologySection = () => (
  <section className="py-24 px-6 bg-gradient-to-br from-primary to-primary/80">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div {...fadeUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Secure, Scalable, Cloud Based
        </h2>
        <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Our platforms are built on trusted cloud infrastructure and supported by established 
          third party service providers for hosting, security, and payment processing. We follow 
          best practices in data protection, system reliability, and access control to support 
          mission critical operations.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TechnologySection;