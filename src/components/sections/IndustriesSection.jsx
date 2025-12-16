import { motion } from 'framer-motion';
import { CheckCircleOutlined } from '@ant-design/icons';
import { SectionTitle } from '../ui/SectionTitle';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const IndustriesSection = () => {
  const industries = [
    "Wholesale and retail businesses",
    "Educational institutions",
    "Healthcare providers and clinics",
    "Government agencies and public sector organizations",
    "Professional and service based organizations"
  ];

  return (
    <section id="industries" className="py-24 px-6 bg-gradient-to-br from-primary/5 to-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="INDUSTRIES WE SERVE"
          title="Trusted Across Multiple Sectors"
          centered
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md"
            >
              <CheckCircleOutlined className="text-primary text-2xl" />
              <span className="text-lg text-foreground font-medium">{industry}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;