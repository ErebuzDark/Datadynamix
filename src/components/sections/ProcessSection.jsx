import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const ProcessSection = () => (
  <section className="relative py-24 pb-48 px-6 bg-primary-dark">
    <img
      src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-abstract-blue-digital-technology-lines-diagram-png-image_6474402.png"
      alt="circuit-design"
      className="hidden 2xl:block absolute transform top-[45%] left-0 -translate-y-1/2 -rotate-90"
    />
    <div className="max-w-6xl mx-auto">
      <SectionTitle subtitle="HOW WE WORK" title="Built Around Your Organization" centered dark />
      <motion.div {...fadeUp} className="max-w-4xl mx-auto z-10!">
        <p className="text-lg text-white leading-relaxed text-center mb-6">
          We take a consultative, client focused approach. Every engagement begins with understanding your workflows,
          requirements, and growth goals. From system design to deployment and ongoing support, our team works closely
          with yours to deliver solutions that perform reliably in production environments.
        </p>
        <p className="text-lg text-white leading-relaxed text-center">
          Our systems are built using modern cloud infrastructure with a strong focus on security, performance, and
          scalability.
        </p>
      </motion.div>
    </div>
    <div class="custom-shape-divider-bottom-1765852394">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
      </svg>
    </div>
    <img
      src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-abstract-blue-digital-technology-lines-diagram-png-image_6474402.png"
      alt="circuit-design"
      className="hidden 2xl:block absolute transform top-[45%] right-0 -translate-y-1/2 rotate-90"
    />
  </section>
);

export default ProcessSection;
