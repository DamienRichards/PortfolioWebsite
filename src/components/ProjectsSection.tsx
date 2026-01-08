import { motion } from "framer-motion";
import { ExternalLink, Github, FolderCode } from "lucide-react";

const projects = [
  {
    title: "Economic Scenario Generator",
    description:
      "An Economic Scenario Generator (ESG) simulates future paths of key economic variables under uncertainty using stochastic processes.",
    tags: ["Python", "Data Visualization", "Pandas"],
    github: "https://github.com/DamienRichards/CodingPortfolio/tree/main/EconomicScenarioGenerator",
    featured: true,
  },
  {
    title: "Pricing Options",
    description:
      "A quantitative finance repository featuring implementations of industry-standard option pricing models, including Black-Scholes, Binomial Trees, and Monte Carlo simulations for derivative valuation",
    tags: ["Python", "Statistics", "NumPy"],
    github: "https://github.com/DamienRichards/CodingPortfolio/tree/main/pricing_options",
    demo: "#",
    featured: true,
  },
  
  {
    title: "Deep Hedging Engine",
    description:
      "Developed a deep reinforcement learning framework to automate and optimize dynamic hedging strategies for derivatives, minimizing portfolio risk through neural network-driven decision making.",
    tags: ["Python", "PyTorch", "Matplotlib"],
    github: "https://github.com/DamienRichards/CodingPortfolio/tree/main/DeepHedgingEngine",
    demo: "#",
    featured: true,
  },
  {
    title: "Risk Return Simulator",
    description:
      "A Python-based Monte Carlo simulator that models long-term portfolio returns using Geometric Brownian Motion and the Vasicek model, calculating key actuarial risk metrics like VaR, CVaR, and Sharpe ratios.",
    tags: ["Python", "Finance", "Risk Management"],
    github: "https://github.com/DamienRichards/CodingPortfolio/tree/main/Risk_Return_Simulator",
    demo: "#",
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Coding Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in data analysis, 
            statistical programming, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Featured
                </span>
              )}

              <div className="mb-4">
                <FolderCode className="text-primary" size={40} />
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                                  
                </a>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/DamienRichards/CodingPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
