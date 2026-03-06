import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Terminal from "./Terminal";
import profileImage from "@/assets/profile-styled.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/manuelstack", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/manuelstack", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/manuelstack", label: "Twitter" },
  { icon: Mail, href: "mailto:emmanueloni211@gmail.com", label: "Email" },
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated text reveal
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block mr-[0.3em]"
          style={{ perspective: 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Glitch text effect
const GlitchText = ({ children }: { children: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className={isGlitching ? "animate-pulse" : ""}>{children}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-accent/50 animate-pulse" style={{ clipPath: "inset(0 0 50% 0)", transform: "translateX(-2px)" }}>
            {children}
          </span>
          <span className="absolute top-0 left-0 text-accent/50 animate-pulse" style={{ clipPath: "inset(50% 0 0 0)", transform: "translateX(2px)" }}>
            {children}
          </span>
        </>
      )}
    </span>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      className="min-h-screen flex flex-col justify-center relative noise-bg overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Animated grid background */}
      <motion.div 
        className="absolute inset-0 grid-bg opacity-50"
        animate={{ 
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated glow orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container-narrow relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    "0 0 0 0 hsl(38 90% 55% / 0.4)",
                    "0 0 0 10px hsl(38 90% 55% / 0)",
                    "0 0 0 0 hsl(38 90% 55% / 0.4)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-sm text-muted-foreground">
                available for work
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="headline-xl mb-6"
            >
              <AnimatedText text="I build things" delay={0.5} />
              <br />
              <span className="text-accent">
                <GlitchText>that work.</GlitchText>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="body-lg text-muted-foreground max-w-xl mb-12"
            >
              Fullstack developer obsessed with clean architecture, 
              performance, and shipping products that don't break at 3am.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#work"
                className="relative font-mono text-sm px-6 py-3 bg-accent text-background overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-foreground"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-background transition-colors">view projects</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="relative font-mono text-sm px-6 py-3 border border-border text-foreground overflow-hidden group"
                whileHover={{ scale: 1.05, borderColor: "hsl(38 90% 55%)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: "50%" }}
                />
                <span className="relative z-10 group-hover:text-accent transition-colors">get in touch</span>
              </motion.a>
            </motion.div>
            
            {/* Terminal */}
            <Terminal />
          </div>
          
          {/* Profile Image with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative flex-shrink-0"
            style={{ x: springX, y: springY }}
          >
            <div 
              className="relative w-64 h-64 lg:w-80 lg:h-80 group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-[-20px] border-2 border-dashed border-accent/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing glow behind image */}
              <motion.div 
                className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Border frames with continuous animation */}
              <motion.div 
                className="absolute inset-0 border border-accent/50 rounded-lg"
                animate={{ rotate: [3, 6, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute inset-0 border border-border rounded-lg"
                animate={{ rotate: [-3, -6, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image with 3D tilt effect */}
              <motion.img
                src={profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-lg"
                style={{
                  filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Hover overlay with social links */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-background/70 rounded-lg flex flex-col items-center justify-center gap-4"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="font-mono text-sm text-accent"
                    >
                      let's connect
                    </motion.span>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="flex gap-4"
                    >
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: 0.2 + index * 0.08,
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                          }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-300"
                          aria-label={social.label}
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </motion.div>
                    
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      @manuelstack
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated corner accents */}
              {[
                { pos: "-top-2 -left-2", border: "border-l-2 border-t-2", hover: "-top-4 -left-4" },
                { pos: "-top-2 -right-2", border: "border-r-2 border-t-2", hover: "-top-4 -right-4" },
                { pos: "-bottom-2 -left-2", border: "border-l-2 border-b-2", hover: "-bottom-4 -left-4" },
                { pos: "-bottom-2 -right-2", border: "border-r-2 border-b-2", hover: "-bottom-4 -right-4" },
              ].map((corner, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${corner.pos} w-4 h-4 ${corner.border} border-accent`}
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-xs text-muted-foreground"
        >
          scroll
        </motion.div>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;