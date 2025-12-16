import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ProcessSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <SectionTitle 
        subtitle="HOW WE WORK"
        title="Built Around Your Organization"
        centered
      />
      
      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
          We take a consultative, client focused approach. Every engagement begins with understanding 
          your workflows, requirements, and growth goals. From system design to deployment and ongoing 
          support, our team works closely with yours to deliver solutions that perform reliably in 
          production environments.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          Our systems are built using modern cloud infrastructure with a strong focus on security, 
          performance, and scalability.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;