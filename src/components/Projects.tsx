import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import gocartProject from "@/assets/gocart-project.png";
import collegevendorsProject from "@/assets/collegevendors-project.png";
import manuelgenProject from "@/assets/manuelgen-project.png";

const projects = [
  {
    title: "GoCart - Multi-Vendor E-commerce",
    description:
      "Full-stack multi-vendor e-commerce platform allowing multiple vendors to register, manage products, and sell on a single platform. Features customer storefront, vendor dashboards with sales analytics, and comprehensive admin panel for overseeing vendors, products, and commissions.",
    tech: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Lucide React"],
    image: gocartProject,
    liveUrl: "https://ecommersgocart-n1z1.vercel.app/",
    githubUrl: "https://github.com/manuelstack/ecommersgocart.git",
  },
  {
    title: "CollegeVendors - Campus Vendor Directory",
    description:
      "WhatsApp-integrated platform helping students discover and connect with local vendors around campus. Used by 100+ students to find food, fashion, and services. Features vendor search, categories, and direct WhatsApp contact integration.",
    tech: ["React", "Tailwind CSS"],
    image: collegevendorsProject,
    liveUrl: "https://vendor-sbzg.vercel.app/",
  },
  {
    title: "ManuelGen - AI Project Generator",
    description:
      "AI-powered tool that generates full-stack project starter codebases in seconds. Describe your project idea and get complete frontend, backend, database schemas, and configuration files automatically generated.",
    tech: ["React"],
    image: manuelgenProject,
    liveUrl: "https://project-genie-hazel.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="work" className="section-spacing relative">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-mono text-xs text-accent mb-4">// selected_work</p>
          <h2 className="headline-lg">
            Things I've built
          </h2>
        </motion.div>
        
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
