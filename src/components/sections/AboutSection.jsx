import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-[#9fccff] overflow-hidden">
      {/* Decorative Background Elements - Subtle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle
          subtitle="ABOUT DATADYNAMIX"
          title="Over 15 Years of Software Development and Consulting Experience"
          centered
        />

        {/* Main Content - Magazine Style Layout */}
        <motion.div 
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          viewport={fadeUp.viewport}
          transition={fadeUp.transition}
          className="space-y-8"
        >
          {/* Opening Statement - Featured */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
            <p className="text-2xl md:text-3xl text-foreground leading-relaxed text-center font-light">
              Datadynamix Technologies LLC brings over{" "}
              <span className="font-bold text-primary text-4xl">15 years</span>{" "}
              of experience in software development and technology consulting.
            </p>
          </div>

          {/* Two Column Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - What We Do */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">What We Build</h3>
                <p className="text-foreground leading-relaxed text-lg">
                  We design, build, and maintain <strong>secure, scalable cloud based systems</strong> that 
                  help organizations streamline operations, protect critical data, and grow with confidence.
                </p>
              </div>
              
              <div className="bg-primary/20 backdrop-blur-sm p-6 rounded-xl border-l-4 border-primary">
                <p className="text-white text-lg font-medium italic">
                  "Supporting long term digital transformation through practical, results driven technology."
                </p>
              </div>
            </motion.div>

            {/* Right - Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 h-full flex"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
                <p className="text-foreground leading-relaxed text-lg mb-4">
                  Driven by our commitment to delivering{" "}
                  <span className="font-bold text-primary text-xl">Xtraordinary Solutions</span>, 
                  we go beyond standard implementations.
                </p>
                <p className="text-foreground leading-relaxed text-lg">
                  We create software tailored to each organization's unique requirements, 
                  with a growing team serving clients across the <strong>United States</strong> and <strong>Southeast Asia</strong>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar - Different from other sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12"
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Years</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Continents</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wide">Dedicated</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="custom-shape-divider-bottom-1765851680">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;