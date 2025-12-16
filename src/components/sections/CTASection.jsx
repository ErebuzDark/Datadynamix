import { motion } from 'framer-motion';
import { RocketOutlined, TeamOutlined } from '@ant-design/icons';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CTASection = () => (
  <section id="contact" className="py-24 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div {...fadeUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Build the Right System for Your Organization
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Whether you need a custom business platform, a secure document verification system, 
          or a scalable cloud solution, Datadynamix Technologies LLC is ready to help.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <PrimaryButton icon={<RocketOutlined />}>
            Schedule a Consultation
          </PrimaryButton>
          <SecondaryButton icon={<TeamOutlined />}>
            Contact Our Team
          </SecondaryButton>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;