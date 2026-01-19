import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const headlineText = "Got a project?";
  const subText = "Let's ship it.";

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(38 90% 55% / 0.1), transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-narrow relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono text-xs text-accent mb-6"
          >
            // let's_talk
          </motion.p>
          
          <motion.h2
            variants={itemVariants}
            className="headline-xl mb-8 overflow-hidden"
          >
            <span className="block">
              {headlineText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <span className="text-accent block">
              {subText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i + headlineText.length) * 0.03, duration: 0.5 }}
                  className="inline-block"
                  whileHover={{ scale: 1.2, color: "hsl(38 90% 65%)" }}
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="body-lg text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            I'm always interested in hearing about new projects, 
            especially the ones that sound impossible.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            {/* Email Button */}
            <motion.a
              href="mailto:emmanueloni211@gmail.com"
              className="group relative flex items-center gap-3 font-mono text-sm sm:text-lg px-6 py-4 bg-card border border-border rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: "hsl(38 90% 55%)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-accent/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Mail className="w-5 h-5 text-accent relative z-10" />
              <span className="break-all relative z-10">emmanueloni211@gmail.com</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </motion.span>
            </motion.a>
            
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/2347050741676"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 font-mono text-sm sm:text-lg px-6 py-4 bg-card border border-border rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: "hsl(142 70% 45%)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-green-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <MessageCircle className="w-5 h-5 text-green-500 relative z-10" />
              <span className="relative z-10">WhatsApp</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </motion.span>
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-border"
          >
            <ul className="flex flex-wrap justify-center gap-8">
              {[
                { label: "GitHub", href: "https://github.com/manuelstack" },
                { label: "LinkedIn", href: "https://linkedin.com/in/manuelstack" },
                { label: "Twitter", href: "https://twitter.com/manuelstack" },
              ].map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;