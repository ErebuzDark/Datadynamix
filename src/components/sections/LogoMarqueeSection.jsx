import { motion } from "framer-motion";
// import { SectionTitle } from "../ui/SectionTitle";

import ccbi from "@assets/logos/ccbi.png";
import cellboy from "@assets/logos/cellboy.png";
import md_wholesale from "@assets/logos/md_wholesale.png";
import megawide from "@assets/logos/megawide.png";
import hansa from "@assets/logos/hansa.png";

const LogoMarqueeSection = () => {
  // Sample client/partner logos (you can replace with actual logos)
  const logos = [
    { name: "CCBI", image: ccbi },
    { name: "CellBoy", image: cellboy },
    { name: "MD Wholesale", image: md_wholesale },
    { name: "Megawide", image: megawide },
    { name: "Hansa Creation USA", image: hansa },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* <SectionTitle subtitle="TRUSTED BY ORGANIZATIONS" title="Proud to Serve Leading Organizations" centered /> */}

        <div className="relative mt-16">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -50 + "%"],
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
                  className="flex items-center justify-center flex-shrink-0 w-48 h-24 rounded-lg hover:border-primary transition-all duration-300"
                >
                  <img src={logo.image} alt="" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Optional: Second row with reverse direction */}
          <div className="flex overflow-hidden mt-8">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [-50 + "%", 0],
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
                  className="flex items-center justify-center flex-shrink-0 w-48 h-24 rounded-lg hover:border-primary transition-all duration-300"
                >
                  <img src={logo.image} alt="" />
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
