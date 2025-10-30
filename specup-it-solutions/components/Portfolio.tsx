"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "Full-featured online shopping platform with payment integration and admin dashboard",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Comprehensive patient management system for hospitals and clinics",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Application",
      description: "Secure and user-friendly banking application for iOS and Android",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Real Estate Portal",
      category: "Web Platform",
      description: "Property listing and management platform with advanced search features",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Inventory Management",
      category: "Business Software",
      description: "Cloud-based inventory tracking and management solution",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Social Media Dashboard",
      category: "Web Application",
      description: "Analytics and management tool for multiple social media platforms",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  View Project <FiExternalLink size={16} />
                </button>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                  <FiExternalLink className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
