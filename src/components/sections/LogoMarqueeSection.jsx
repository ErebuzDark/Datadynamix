import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

const LogoMarqueeSection = () => {
  // Sample client/partner logos (you can replace with actual logos)
  const logos = [
    { name: 'Company A', text: 'COMPANY A' },
    { name: 'Company B', text: 'COMPANY B' },
    { name: 'Company C', text: 'COMPANY C' },
    { name: 'Company D', text: 'COMPANY D' },
    { name: 'Company E', text: 'COMPANY E' },
    { name: 'Company F', text: 'COMPANY F' },
    { name: 'Company G', text: 'COMPANY G' },
    { name: 'Company H', text: 'COMPANY H' }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="TRUSTED BY ORGANIZATIONS"
          title="Proud to Serve Leading Organizations"
          centered
        />

        <div className="relative mt-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -50 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 w-48 h-24 bg-muted rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Replace this with actual logo images */}
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {logo.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Optional: Second row with reverse direction */}
          <div className="flex overflow-hidden mt-8">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [-50 + '%', 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 w-48 h-24 bg-muted rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Replace this with actual logo images */}
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {logo.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarqueeSection;