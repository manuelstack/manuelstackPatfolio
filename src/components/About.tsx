import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="section-spacing relative">
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="font-mono text-xs text-accent mb-4">// about_me</p>
            <h2 className="headline-lg">
              Not your typical
              <br />
              <span className="text-accent">dev bio.</span>
            </h2>
          </motion.div>
          
          {/* Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                Hi, I'm <span className="text-foreground font-medium">Ayomide Oni Emmanuel</span>, 
                known as <span className="text-accent font-medium">Manuel Stack</span>. 
                Solution-oriented problem solver with 2 years of experience building and maintaining 
                software applications. Highly skilled in communication, collaboration, and technical documentation.
              </p>
              <p>
                Currently pursuing a Bachelor of Arts in Creative Arts at Tai Solarin University 
                of Education (TASUED), graduating in 2026. Based in Lagos, Nigeria.
              </p>
              <p className="text-foreground">
                I build full-stack applications with JavaScript, React, and modern web technologies 
                — focusing on clean architecture, usability, and scalability.
              </p>
              
              <Button
                asChild
                className="mt-4 gap-2"
              >
                <a href="/resume.png" download="Ayomide_Oni_Emmanuel_Resume.png">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 pt-12 border-t border-border"
            >
              <p className="font-mono text-xs text-accent mb-8">// work_experience</p>
              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-foreground font-medium">Software Developer (Full-Stack)</span>
                      <span className="text-muted-foreground"> @ Freelance / Remote</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">Feb 2024 - Present</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Built and maintained full-stack applications using JavaScript</li>
                    <li>• Implemented user authentication and authorization systems</li>
                    <li>• Developed and consumed REST APIs for frontend-backend communication</li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-foreground font-medium">Software Developer (Intern / Trainee)</span>
                    </div>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Assisted in developing full-stack features for learning and real-world projects</li>
                    <li>• Debugged issues and improved application performance</li>
                    <li>• Gained hands-on experience with databases and authentication workflows</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-12 pt-12 border-t border-border"
            >
              <p className="font-mono text-xs text-accent mb-8">// certifications</p>
              <div className="space-y-4">
                {[
                  { cert: "Meta Front-End Developer Certificate", issuer: "Coursera" },
                  { cert: "Full-Stack Web Development", issuer: "Angela Yu (Udemy)" },
                  { cert: "Software Engineering Scholarship", issuer: "Axia Africa" },
                  { cert: "Software Engineering Virtual Experience", issuer: "J.P. Morgan Chase & Co." },
                ].map((item) => (
                  <div key={item.cert} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-foreground font-medium">{item.cert}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.issuer}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 pt-12 border-t border-border"
            >
              <p className="font-mono text-xs text-accent mb-8">// skills</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
                  { label: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
                  { label: "Frontend", items: ["React", "Responsive UI", "Tailwind CSS"] },
                  { label: "Backend", items: ["REST APIs", "Authentication", "Backend Logic"] },
                  { label: "Databases", items: ["Firebase", "Supabase"] },
                  { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
                  { label: "Concepts", items: ["Security Basics", "System Design"] },
                ].map((category) => (
                  <div key={category.label}>
                    <p className="text-sm font-medium text-foreground mb-3">{category.label}</p>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <li key={item} className="font-mono text-xs text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
