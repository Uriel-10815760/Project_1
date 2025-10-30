"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiZap, FiShield, FiUsers } from "react-icons/fi";

const About = () => {
  const features = [
    {
      icon: <FiZap size={32} />,
      title: "Fast Delivery",
      description: "Agile development process ensuring quick turnaround times",
    },
    {
      icon: <FiShield size={32} />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and robust architecture",
    },
    {
      icon: <FiUsers size={32} />,
      title: "Expert Team",
      description: "Skilled developers with years of industry experience",
    },
    {
      icon: <FiCheckCircle size={32} />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                SpecUp IT?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At SpecUp IT Solutions, we are passionate about transforming
              innovative ideas into powerful digital solutions. With a team of
              experienced developers and designers, we deliver cutting-edge
              software that drives business growth and exceeds expectations.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our commitment to excellence, attention to detail, and
              customer-centric approach make us the ideal partner for your next
              project. We don't just build software; we build lasting
              relationships.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <FiCheckCircle className="text-green-400" />
                <span>On-time Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FiCheckCircle className="text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FiCheckCircle className="text-green-400" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
