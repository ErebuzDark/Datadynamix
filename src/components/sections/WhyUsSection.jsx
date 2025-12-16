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

const WhyUsSection = () => {
  const reasons = [
    "Over 15 years of software development and consulting experience",
    "Proven delivery for clients in the United States and Southeast Asia",
    "Growing in house technical and support team",
    "Custom built solutions aligned to real operational needs",
    "Secure, scalable, cloud ready architectures",
    "Long term system support and maintenance"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          subtitle="WHY DATADYNAMIX"
          title="Why Organizations Choose Datadynamix"
          centered
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4 p-6 bg-muted rounded-xl"
            >
              <CheckCircleOutlined className="text-primary text-xl mt-1 flex-shrink-0" />
              <span className="text-foreground leading-relaxed">{reason}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;