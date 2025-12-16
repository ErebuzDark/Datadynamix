import { motion } from "framer-motion";
import { ShoppingCartOutlined, BookOutlined, MedicineBoxOutlined, BankOutlined, TeamOutlined } from "@ant-design/icons";
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

const IndustryCard = ({ icon, title, color }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
    className="relative group flex-1"
  >
    <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-primary overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
      <div
        className={`relative w-16 h-16 mb-4 rounded-xl flex items-center justify-center ${color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
      >
        <span className="text-3xl text-white">{icon}</span>
      </div>
      <h3 className="relative text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  </motion.div>
);

const IndustriesSection = () => {
  const industries = [
    {
      icon: <ShoppingCartOutlined />,
      title: "Wholesale and Retail Businesses",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: <BookOutlined />,
      title: "Educational Institutions",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: <MedicineBoxOutlined />,
      title: "Healthcare Providers and Clinics",
      color: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
      icon: <BankOutlined />,
      title: "Government Agencies and Public Sector",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      icon: <TeamOutlined />,
      title: "Professional and Service Organizations",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 px-6 bg-white to-primary/5 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle subtitle="INDUSTRIES WE SERVE" title="Trusted Across Multiple Sectors" centered />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </motion.div>

        {/* Bottom CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No matter your industry, we build tailored solutions that streamline operations and drive growth with
            enterprise-grade security.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
