"use client";

import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiAmazon, SiFlutter } from "react-icons/si";

const Technologies = () => {
  const technologies = [
    { icon: <SiReact size={48} />, name: "React" },
    { icon: <SiNextdotjs size={48} />, name: "Next.js" },
    { icon: <SiNodedotjs size={48} />, name: "Node.js" },
    { icon: <SiPython size={48} />, name: "Python" },
    { icon: <SiTypescript size={48} />, name: "TypeScript" },
    { icon: <SiTailwindcss size={48} />, name: "Tailwind" },
    { icon: <SiMongodb size={48} />, name: "MongoDB" },
    { icon: <SiPostgresql size={48} />, name: "PostgreSQL" },
    { icon: <SiDocker size={48} />, name: "Docker" },
    { icon: <SiKubernetes size={48} />, name: "Kubernetes" },
    { icon: <SiAmazon size={48} />, name: "AWS" },
    { icon: <SiFlutter size={48} />, name: "Flutter" },
  ];

  return (
    <section className="py-20 bg-slate-900">
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
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-3">
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
