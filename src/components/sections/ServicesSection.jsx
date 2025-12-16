import { motion } from 'framer-motion';
import { CloudOutlined, TeamOutlined, SafetyOutlined, CheckCircleOutlined, RocketOutlined } from '@ant-design/icons';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../ui/ServiceCard';

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
      icon: <CloudOutlined />,
      title: "Ecommerce Enablement and Business Systems",
      description: "Cloud based platforms that support inventory management, order processing, customer management, and integrated payment workflows for wholesale and retail operations."
    },
    {
      icon: <TeamOutlined />,
      title: "School Management Systems",
      description: "Comprehensive digital systems for educational institutions, including enrollment, student records, billing, reporting, and administrative workflows."
    },
    {
      icon: <SafetyOutlined />,
      title: "Secure Document Verification Systems",
      description: "Online platforms for issuing and verifying documents with secure records, audit trails, and validation tools for institutional and public sector use."
    },
    {
      icon: <CheckCircleOutlined />,
      title: "Medical and Clinic Management Systems",
      description: "Custom software solutions for healthcare providers, including patient records, appointment scheduling, billing support, and operational management."
    },
    {
      icon: <RocketOutlined />,
      title: "Custom Web and Mobile Application Development",
      description: "Tailored web and mobile applications designed around your business processes, built for scalability, security, and long term maintainability."
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-muted">
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
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;