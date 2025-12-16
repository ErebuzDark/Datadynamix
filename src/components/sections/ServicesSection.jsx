import { motion } from 'framer-motion';
import { CloudOutlined, TeamOutlined, SafetyOutlined, CheckCircleOutlined, RocketOutlined } from '@ant-design/icons';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';

import ecommerce_enablement from "@assets/images/bg_ecommerce_enablement.jpg";
import school_management from "@assets/images/bg_school_management.webp";
import secure_document from "@assets/images/bg_secure_doc_verification.avif";
import medical_clinic from "@assets/images/bg_medical_clinic.webp";
import web_mobile from "@assets/images/bg_web_mobile.jpg";

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const ServicesSection = () => {
  const services = [
    {
      title: "Ecommerce Enablement and Business Systems",
      description: "Cloud based platforms that support inventory management, order processing, customer management, and integrated payment workflows for wholesale and retail operations.",
      image: ecommerce_enablement
    },
    {
      title: "School Management Systems",
      description: "Comprehensive digital systems for educational institutions, including enrollment, student records, billing, reporting, and administrative workflows.",
      image: school_management
    },
    {
      title: "Secure Document Verification Systems",
      description: "Online platforms for issuing and verifying documents with secure records, audit trails, and validation tools for institutional and public sector use.",
      image: secure_document
    },
    {
      title: "Medical and Clinic Management Systems",
      description: "Custom software solutions for healthcare providers, including patient records, appointment scheduling, billing support, and operational management.",
      image: medical_clinic
    },
    {
      title: "Custom Web and Mobile Application Development",
      description: "Tailored web and mobile applications designed around your business processes, built for scalability, security, and long term maintainability.",
      image: web_mobile
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          subtitle="WHAT WE DO"
          title="Our Software Solutions"
          centered
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard  rd key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;