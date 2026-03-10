import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  levelFr: string;
  levelEn: string;
  percent: number;
}

const skills: Skill[] = [
  { name: "Angular", levelFr: "Expérimenté", levelEn: "Experienced", percent: 90 },
  { name: "Next.js", levelFr: "Bon niveau", levelEn: "Proficient", percent: 75 },
  { name: "React", levelFr: "Bon niveau", levelEn: "Proficient", percent: 75 },
  { name: "NestJS", levelFr: "Bon niveau", levelEn: "Proficient", percent: 70 },
  { name: "TypeScript", levelFr: "Expérimenté", levelEn: "Experienced", percent: 85 },
  { name: "Java", levelFr: "Novice", levelEn: "Beginner", percent: 30 },
];

const softSkills = [
  { fr: "Communication efficace", en: "Effective Communication" },
  { fr: "Esprit d'équipe", en: "Team Spirit" },
  { fr: "Adaptabilité et curiosité", en: "Adaptability & Curiosity" },
];

const languages = [
  { name: "Français", en: "French", level: "Courant / Fluent" },
  { name: "English", en: "English", level: "Courant / Fluent" },
];

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          {t("Compétences", "Skills")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-foreground">
              {t("Compétences techniques", "Technical Skills")}
            </h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{t(skill.levelFr, skill.levelEn)}</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft skills & languages */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {t("Atouts", "Soft Skills")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm border border-border"
                  >
                    {t(s.fr, s.en)}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {t("Langues", "Languages")}
              </h3>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-foreground">{t(l.name, l.en)}</span>
                    <span className="text-xs text-muted-foreground font-mono">— {l.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {t("Centres d'intérêt", "Interests")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Basketball", t("Jeux vidéos", "Video games"), t("Échecs", "Chess")].map((interest, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
