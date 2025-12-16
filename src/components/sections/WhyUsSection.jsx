import { motion } from "framer-motion";
import { 
  TrophyOutlined, 
  GlobalOutlined, 
  TeamOutlined, 
  ToolOutlined, 
  SafetyOutlined, 
  CustomerServiceOutlined 
} from "@ant-design/icons";
import { SectionTitle } from "../ui/SectionTitle";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const ReasonCard = ({ icon, title, gradient, index }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
    className="relative group"
  >
    {/* Card */}
    <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-primary/50 overflow-hidden">
      {/* Background Gradient on Hover */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Decorative Corner Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      
      {/* Icon Container */}
      <div className="relative mb-5">
        <div className={`w-16 h-16 ${gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
          <span className="text-3xl text-white">
            {icon}
          </span>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="relative text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </div>
  </motion.div>
);

const WhyUsSection = () => {
  const reasons = [
    {
      icon: <TrophyOutlined />,
      title: "Over 15 years of software development and consulting experience",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    },
    {
      icon: <GlobalOutlined />,
      title: "Proven delivery for clients in the United States and Southeast Asia",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: <TeamOutlined />,
      title: "Growing in house technical and support team",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      icon: <ToolOutlined />,
      title: "Custom built solutions aligned to real operational needs",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: <SafetyOutlined />,
      title: "Secure, scalable, cloud ready architectures",
      gradient: "bg-gradient-to-br from-red-500 to-rose-500"
    },
    {
      icon: <CustomerServiceOutlined />,
      title: "Long term system support and maintenance",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Animated Blob Backgrounds */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[700px] h-[700px] bg-gradient-to-br from-primary/15 to-purple-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {reasons.map((reason, index) => (
            <ReasonCard key={index} index={index} {...reason} />
          ))}
        </motion.div>

        {/* Bottom Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Continents Served</div>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Wave Divider */}
      <div className="custom-shape-divider-bottom-1765855482">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyUsSection;