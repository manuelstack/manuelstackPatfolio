import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import gocartProject from "@/assets/gocart-project.png";
import collegevendorsProject from "@/assets/collegevendors-project.png";
import manuelgenProject from "@/assets/manuelgen-project.png";
import securewatchProject from "@/assets/securewatch-project.jpg";
import apiforgeProject from "@/assets/apiforge-project.jpg";
import deployflowProject from "@/assets/deployflow-project.jpg";
import codeguardProject from "@/assets/codeguard-project.jpg";
import streamvaultProject from "@/assets/streamvault-project.jpg";
import fitpulseProject from "@/assets/fitpulse-project.jpg";
import devdeskProject from "@/assets/devdesk-project.jpg";

const projects = [
  {
    title: "SecureWatch - Threat Detection Platform",
    description:
      "Enterprise-grade real-time security monitoring and threat detection system. Features network traffic analysis, anomaly detection using Python ML models, automated incident response workflows, and a comprehensive SOC dashboard. Handles 10M+ events/day with sub-second alerting.",
    tech: ["Next.js", "Python", "Go", "PostgreSQL", "Redis", "Docker", "Kafka"],
    image: securewatchProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "APIForge - API Gateway & Management",
    description:
      "High-performance API gateway built with Go, supporting rate limiting, JWT authentication, request transformation, and real-time analytics. Manages 50K+ req/sec with 99.99% uptime. Includes developer portal with auto-generated docs and SDK generation.",
    tech: ["Go", "Next.js", "gRPC", "PostgreSQL", "Redis", "Prometheus", "Kubernetes"],
    image: apiforgeProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "FitPulse - Cross-Platform Fitness App",
    description:
      "React Native mobile app (iOS & Android) for fitness tracking with real-time workout monitoring, nutrition logging, social challenges, and Apple Health/Google Fit integration. 50K+ downloads with 4.8★ rating. Features offline-first architecture and push notifications.",
    tech: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase", "Redux"],
    image: fitpulseProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "DevDesk - Desktop Dev Environment",
    description:
      "Electron-based desktop IDE and project management tool with integrated terminal, Git workflow, AI code suggestions, and multi-language support. Built for developer productivity with custom plugin system, workspace management, and real-time collaboration via WebSockets.",
    tech: ["Electron", "React", "TypeScript", "Node.js", "SQLite", "WebSocket"],
    image: devdeskProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "DeployFlow - CI/CD Pipeline Orchestrator",
    description:
      "End-to-end deployment automation platform with container orchestration, blue-green deployments, rollback capabilities, and multi-cloud support. Built microservices in Go with a Next.js dashboard. Reduced deployment time by 70% for engineering teams.",
    tech: ["Go", "Next.js", "Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
    image: deployflowProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "CodeGuard - AI Security Code Review",
    description:
      "AI-powered static analysis tool that scans codebases for vulnerabilities (OWASP Top 10, CWE), secrets exposure, and dependency risks. Python-based ML engine with Next.js dashboard. Integrated into CI/CD pipelines via GitHub App, scanning 1M+ lines of code daily.",
    tech: ["Python", "Next.js", "TensorFlow", "PostgreSQL", "Docker", "GitHub API"],
    image: codeguardProject,
    githubUrl: "https://github.com/manuelstack",
  },
  {
    title: "StreamVault - Real-Time Data Pipeline",
    description:
      "Distributed event streaming and data processing platform handling real-time analytics for fintech applications. Built with Go for high-throughput ingestion (100K events/sec) and Python for ETL transformations. Features live dashboards and alerting.",
    tech: ["Go", "Python", "Kafka", "Next.js", "ClickHouse", "Redis", "Docker"],
    image: streamvaultProject,
    githubUrl: "https://github.com/manuelstack",
  },
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
