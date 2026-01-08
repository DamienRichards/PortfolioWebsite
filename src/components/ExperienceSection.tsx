import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Vacation Work Program",
    company: "Rain Chartered Accountants",
    period: "2025",
    description: [
      "Applied technical knowledge to real-life data sets alongside CAs and IT professionals",
      "Worked effectively within diverse professional teams to achieve project goals",
    ],
  },
  {
    title: "Private Tutor",
    company: "Self-Employed",
    period: "2024 – Present",
    description: [
      "Tutored students in various subjects, improving their understanding and grades",
      "Proactively identified student weak points and created targeted study strategies",
    ],
  },
  {
    title: "Bartender",
    company: "Ramblers Club Venue",
    period: "2024 – Present",
    description: [
      "Handled cash transactions and venue logistics under significant time pressure",
      "Developed strong conflict resolution and leadership capabilities in a service environment",
    ],
  },
];

const education = [
  {
    degree: "BSc Actuarial Science",
    institution: "University of the Free State",
    period: "2024 – Present",
    details: "Third Year Student",
  },
  {
    degree: "Grade 12 (Matric)",
    institution: "Jim Fouche High School",
    period: "2019 – 2023",
    details: "Completed Secondary Education",
  },
  {
    degree: "Level G Mathematics",
    institution: "Tricky Mathematics",
    period: "2019 – 2022",
    details: "Advanced Mathematics Program",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Experience & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary shadow-glow" />

                    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors shadow-card">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-display font-semibold mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <Calendar className="text-primary" size={28} />
              Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-primary shadow-glow" />

                    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors shadow-card">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-display font-semibold mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
