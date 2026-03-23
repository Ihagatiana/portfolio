import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPeopleGroup, faMagnifyingGlass, faBasketball, faGamepad, faChess, faEarth } from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  levelFr: string;
  levelEn: string;
  percent: number;
}

const skills: Skill[] = [
  { name: "Angular", levelFr: "Expérimenté", levelEn: "Experienced", percent: 90 },
  { name: "TypeScript", levelFr: "Expérimenté", levelEn: "Experienced", percent: 85 },
  { name: "Next.js", levelFr: "Bon niveau", levelEn: "Proficient", percent: 75 },
  { name: "React", levelFr: "Bon niveau", levelEn: "Proficient", percent: 75 },
  { name: "NestJS", levelFr: "Bon niveau", levelEn: "Proficient", percent: 70 },
  { name: "Java", levelFr: "Novice", levelEn: "Beginner", percent: 30 },
];

// SVG circle: r=15.9 → circumference ≈ 100
const RADIUS = 15.9;
const CIRC = 2 * Math.PI * RADIUS; // ~99.9

const softSkills = [
  { fr: "Communication efficace", en: "Effective Communication", icon: faComments },
  { fr: "Esprit d'équipe", en: "Team Spirit", icon: faPeopleGroup },
  { fr: "Adaptabilité & curiosité", en: "Adaptability & Curiosity", icon: faMagnifyingGlass },
];

const interests = [
  { label: "Basketball", icon: faBasketball },
  { fr: "Jeux vidéos", en: "Video games", icon: faGamepad },
  { fr: "Échecs", en: "Chess", icon: faChess },
];

const languages = [
  { name: "Français", en: "French", level: "Courant", flag: "🇫🇷" },
  { name: "English", en: "English", level: "Fluent", flag: "🇬🇧" },
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical skills — circular ring cards */}
          <div>
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-6">
              {t("Stack technique", "Tech Stack")}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.3)] transition-all duration-300 cursor-default"
                >
                  {/* Circular ring */}
                  <div className="relative w-16 h-16">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      {/* Track */}
                      <circle
                        cx="18" cy="18" r={RADIUS}
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="2.2"
                      />
                      {/* Progress */}
                      <motion.circle
                        cx="18" cy="18" r={RADIUS}
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={CIRC}
                        initial={{ strokeDashoffset: CIRC }}
                        whileInView={{
                          strokeDashoffset: CIRC - (CIRC * skill.percent) / 100,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-primary">
                      {skill.percent}%
                    </span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-foreground text-center">{skill.name}</span>
                  <span className="text-[10px] text-muted-foreground text-center">{t(skill.levelFr, skill.levelEn)}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Soft skills */}
            <div>
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                {t("Atouts", "Soft Skills")}
              </h3>
              <div className="space-y-3">
                {softSkills.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
                  >
                    <FontAwesomeIcon icon={s.icon} className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-secondary-foreground">{t(s.fr, s.en)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                <FontAwesomeIcon icon={faEarth} className="mr-2" />
                {t("Langues", "Languages")}
              </h3>
              <div className="flex gap-3">
                {languages.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-sm"
                  >
                    <span className="text-lg">{l.flag}</span>
                    <div>
                      <p className="font-semibold text-foreground text-xs">{t(l.name, l.en)}</p>
                      <p className="text-[10px] font-mono text-primary">{l.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">
                {t("Centres d'intérêt", "Interests")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm border border-border hover:border-primary/30 transition-colors cursor-default"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-3.5 h-3.5 text-primary" />
                    {"label" in item ? item.label : t(item.fr, item.en)}
                  </motion.span>
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
