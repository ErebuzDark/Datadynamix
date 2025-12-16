import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AboutSection = () => (
  <section id="about" className="relative py-24 px-6 bg-[#9fccff]">
    <div className="max-w-6xl mx-auto">
      <SectionTitle
        subtitle="ABOUT DATADYNAMIX"
        title="Over 15 Years of Software Development and Consulting Experience"
        centered
      />

      <motion.div {...fadeUp} className="max-w-4xl mx-auto">
        <p className="text-lg text-white leading-relaxed text-center mb-6">
          Datadynamix Technologies LLC brings over 15 years of experience in software development and technology
          consulting. We design, build, and maintain secure, scalable cloud based systems that help organizations
          streamline operations, protect critical data, and grow with confidence.
        </p>
        <p className="text-lg text-white leading-relaxed text-center">
          Driven by our commitment to delivering{" "}
          <span className="text-primary-dark font-semibold">Xtraordinary Solutions</span>, we go beyond standard
          implementations by creating software tailored to each organization's unique requirements. Our growing team
          serves clients across the United States and Southeast Asia, supporting long term digital transformation
          through practical, results driven technology.
        </p>
      </motion.div>
    </div>
    <div class="custom-shape-divider-bottom-1765851680">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
);

export default AboutSection;
