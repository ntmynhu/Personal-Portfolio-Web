import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "minni05@gmail.com",
      href: "mailto:minni05@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourprofile",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@yourhandle",
      href: "https://twitter.com",
    },
  ];

  return (
    <section className="min-h-screen bg-[#1a1d23] py-20 px-6 flex items-center">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-[#ff6694] mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a game idea or want to collaborate? I'm always open to
            discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#14171c] p-6 rounded-xl border-2 border-gray-800 hover:border-[#ff6694] transition-all text-center group"
            >
              <div className="bg-[#ff6694]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ff6694]/20 transition-colors">
                <link.icon className="w-8 h-8 text-[#ff6694]" />
              </div>
              <h3 className="text-white text-lg mb-2">{link.label}</h3>
              <p className="text-gray-400 text-sm break-all">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-[#14171c] border-2 border-gray-800 rounded-xl p-12 max-w-3xl mx-auto">
            <h3 className="text-white text-3xl mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-400 mb-8">
              Let's discuss how we can create something amazing together.
            </p>
            <a
              href="mailto:minni05@gmail.com"
              className="inline-block bg-[#ff6694] hover:bg-[#ff8ab0] text-white px-8 py-4 rounded-full transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>© 2026 Game Developer Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}