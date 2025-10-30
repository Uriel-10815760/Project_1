"use client";

import { motion } from "framer-motion";
import { FiCode, FiSmartphone, FiMonitor, FiDatabase, FiGlobe, FiSettings } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiGlobe size={40} />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
    },
    {
      icon: <FiSmartphone size={40} />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
    },
    {
      icon: <FiDatabase size={40} />,
      title: "System Development",
      description:
        "Enterprise-grade systems and backend solutions designed to scale with your business needs.",
    },
    {
      icon: <FiMonitor size={40} />,
      title: "Website Design",
      description:
        "Beautiful, responsive websites that capture your brand identity and convert visitors into customers.",
    },
    {
      icon: <FiCode size={40} />,
      title: "Custom Software",
      description:
        "Tailored software solutions that address your unique business challenges and streamline operations.",
    },
    {
      icon: <FiSettings size={40} />,
      title: "Maintenance & Support",
      description:
        "Ongoing support and maintenance to keep your applications running smoothly and securely.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive software development services to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
