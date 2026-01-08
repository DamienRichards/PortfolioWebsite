import { motion } from "framer-motion";
import { GraduationCap, Code, BookOpen, Languages, Award } from "lucide-react"; // Added Award icon

const skills = [
  { name: "Python", level: 85 },
  { name: "R Programming", level: 80 },
  { name: "VBA", level: 75 },
  { name: "SQL", level: 75 },
  { name: "Data Analysis", level: 85 },
  { name: "Statistical Modeling", level: 80 },
  { name: "Mathematics", level: 90 },
];

const modules = [
  "Calculus I, II, III",
  "Differential Equations",
  "Advanced Mathematics",
  "Probability Theory",
  "Inference I & II",
  "Statistical Programming (R)",
  "Visual Basic for Applications (VBA)",
  "Sample Distribution Theory",
  "Microeconomics",
  "Macroeconomics",
];

// Add your specific exemptions here
const exemptions = [
  "*A111 (CS1)",
  "A112 (CM1)",
  "A113 (CB1)",
  "A211 (CB2)",
  "*A212 (CS2)",
  "*A214 (CM2)",
  "*N111 (ST1)",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">Get To Know</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info Cards & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <GraduationCap className="text-primary mb-4" size={32} />
                <h3 className="font-display font-semibold mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">
                  BSc Actuarial Science<br />
                  University of the Free State
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Code className="text-primary mb-4" size={32} />
                <h3 className="font-display font-semibold mb-1">Programming</h3>
                <p className="text-sm text-muted-foreground">
                  Python, R, VBA<br />
                  Data Visualization
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <BookOpen className="text-primary mb-4" size={32} />
                <h3 className="font-display font-semibold mb-1">Certifications</h3>
                <p className="text-sm text-muted-foreground">
                  Harvard CS50<br />
                  LinkedIn Learning
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Languages className="text-primary mb-4" size={32} />
                <h3 className="font-display font-semibold mb-1">Languages</h3>
                <p className="text-sm text-muted-foreground">
                  English<br />
                  Afrikaans
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="p-6 bg-secondary rounded-xl border border-border">
              <h3 className="font-display font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Modules, Exemptions & Courses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* New Exemptions Section */}
            <div className="p-6 bg-secondary rounded-xl border border-border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={24} />
                <h3 className="font-display font-semibold">Actuarial Exemptions ( * Completing in current year )</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {exemptions.map((exemption) => (
                  <span
                    key={exemption}
                    className="px-3 py-1.5 text-sm font-medium bg-primary/10 rounded-lg border border-primary/20 text-primary"
                  >
                    {exemption}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-secondary rounded-xl border border-border">
              <h3 className="font-display font-semibold mb-4">Key Modules Completed</h3>
              <div className="flex flex-wrap gap-2">
                {modules.map((module) => (
                  <span
                    key={module}
                    className="px-3 py-1.5 text-sm bg-background rounded-lg border border-border text-muted-foreground"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-secondary rounded-xl border border-border">
              <h3 className="font-display font-semibold mb-4">Online Courses & Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Harvard CS50: Introduction to Programming with Python</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: Python 3 Standard Library</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: Python for Data Visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: Statistics Foundations 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: Statistics Foundations 2</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: Financial Portfolio Management Fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">LinkedIn: SQL Essential Training</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;