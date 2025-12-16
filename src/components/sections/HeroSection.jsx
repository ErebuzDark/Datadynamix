import { motion } from 'framer-motion';
import { RocketOutlined, TeamOutlined } from '@ant-design/icons';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/data_dynamix_team.jpg" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-foreground/60"></div>
      {/* Optional: Gradient overlay for more effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30"></div>
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="text-primary">Xtraordinary</span> Solutions<br />
            for Real World Operations
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed drop-shadow-md"
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