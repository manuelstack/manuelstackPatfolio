import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container-narrow py-5 flex items-center justify-between">
        <a 
          href="#" 
          className="font-mono text-sm text-accent hover:text-foreground transition-colors duration-300"
        >
          ~/dev
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: "work", href: "#work" },
            { label: "about", href: "#about" },
            { label: "contact", href: "#contact" },
          ].map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <span className="text-accent/50">0{index + 1}.</span> {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-mono text-xs px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 md:hidden"
        >
          contact
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
