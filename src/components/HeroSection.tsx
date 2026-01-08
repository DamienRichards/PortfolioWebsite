import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img
                src={profileImage}
                alt="Damien Richards"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-display font-bold text-sm">3rd Year</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-4">
              Damien <span className="text-gradient">Richards</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6">
              Actuarial Science Student & Future Actuary
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Third-year Actuarial Science student at the University of the Free State, 
              driven by a passion for mathematics, problem-solving, and risk management, and investment analysis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-glow transition-all hover:shadow-lg"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("projects")}
                className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
              >
                View Projects
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="mailto:damienrichards2005@gmail.com"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/DamienRichards/CodingPortfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/damien-richards-actuarial-sciences/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => onNavigate("about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={28} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
