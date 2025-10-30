"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content:
        "SpecUp IT Solutions delivered an exceptional mobile app that exceeded our expectations. Their team's expertise and dedication were evident throughout the project.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, E-Shop Global",
      content:
        "Working with SpecUp IT was a game-changer for our business. They built a robust e-commerce platform that scaled perfectly with our growth.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, HealthCare Plus",
      content:
        "The custom software solution they developed streamlined our operations significantly. Professional, responsive, and highly skilled team.",
      rating: 5,
    },
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
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
