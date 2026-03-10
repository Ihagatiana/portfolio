import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { t } = useLang();

  const education = [
    {
      degreeFr: "Master en Intelligence Artificielle et Big Data",
      degreeEn: "Master's in Artificial Intelligence & Big Data",
      school: "ESTIA — Bidart, France",
      period: t("Depuis décembre 2024", "Since December 2024"),
    },
    {
      degreeFr: "Licence en développement informatique",
      degreeEn: "Bachelor's in Computer Science",
      school: "IT University — Antananarivo, Madagascar",
      period: "2018 — 2021",
    },
  ];

  return (
    <section id="education" className="py-16 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          {t("Formation", "Education")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t(edu.degreeFr, edu.degreeEn)}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">{edu.school}</p>
              <p className="text-xs font-mono text-primary">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
