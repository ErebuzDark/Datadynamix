import { motion } from 'framer-motion';
import { RocketOutlined, TeamOutlined } from '@ant-design/icons';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-24 pb-16 px-6">
    <div className="max-w-7xl mx-auto w-full">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Xtraordinary</span> Solutions<br />
            for Real World Operations
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed"
        >
          B2B cloud based systems and custom software for wholesale and retail businesses, 
          schools, healthcare providers, government agencies, and professional organizations 
          across the United States and Southeast Asia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <PrimaryButton icon={<RocketOutlined />}>
            Request a Demo
          </PrimaryButton>
          <SecondaryButton icon={<TeamOutlined />}>
            Talk to Our Team
          </SecondaryButton>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;