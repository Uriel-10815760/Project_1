"use client";

import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Contact"],
    Services: ["Web Development", "Mobile Apps", "Custom Software", "Consulting"],
    Resources: ["Blog", "Case Studies", "Documentation", "Support"],
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "#", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <FiTwitter size={20} />, href: "#", label: "Twitter" },
    { icon: <FiFacebook size={20} />, href: "#", label: "Facebook" },
    { icon: <FiInstagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              SpecUp IT Solutions
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into powerful digital experiences. Your trusted
              partner for innovative software solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 bg-slate-800/50 p-2 rounded-lg hover:bg-slate-800 border border-slate-700 hover:border-purple-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SpecUp IT Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
