import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t border-border"
    >
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} — built by <span className="text-accent">manuelstack</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">●</span> All systems operational
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
