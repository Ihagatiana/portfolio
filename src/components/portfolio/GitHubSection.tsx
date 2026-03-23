import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, GitCommitHorizontal, Star } from "lucide-react";

// ✏️  Replace with your real GitHub username
const GITHUB_USERNAME = "Ihagatiana";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

// github-readme-stats theme colors matching the portfolio (teal primary on dark bg)
const STATS_PARAMS = new URLSearchParams({
  username: GITHUB_USERNAME,
  show_icons: "true",
  hide_border: "true",
  bg_color: "0c0f18",
  title_color: "1acec0",
  icon_color: "1acec0",
  text_color: "9ca3af",
  ring_color: "1acec0",
  count_private: "true",
}).toString();

const LANGS_PARAMS = new URLSearchParams({
  username: GITHUB_USERNAME,
  layout: "compact",
  hide_border: "true",
  bg_color: "0c0f18",
  title_color: "1acec0",
  text_color: "9ca3af",
  langs_count: "6",
}).toString();

const STREAK_PARAMS = new URLSearchParams({
  user: GITHUB_USERNAME,
  hide_border: "true",
  background: "0c0f18",
  ring: "1acec0",
  fire: "f59e0b",
  currStreakLabel: "1acec0",
  sideLabels: "9ca3af",
  dates: "6b7280",
}).toString();

const highlights = [
  { icon: GitCommitHorizontal, labelFr: "Commits réguliers", labelEn: "Regular commits" },
  { icon: Star,               labelFr: "TypeScript en priorité", labelEn: "TypeScript-first" },
  { icon: Github,             labelFr: "Open source & privé",   labelEn: "Open source & private" },
];

const GitHubSection = () => {
  const { t } = useLang();

  return (
    <section id="github" className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("Activité GitHub", "GitHub Activity")}
            </h2>
            <p className="text-muted-foreground text-sm mt-1 font-mono">
              @{GITHUB_USERNAME}
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/40 text-primary text-sm font-mono hover:bg-primary/20 transition-colors"
          >
            <Github className="w-4 h-4" />
            github.com/{GITHUB_USERNAME}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border overflow-hidden bg-[#0c0f18]"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?${STATS_PARAMS}`}
              alt="GitHub Stats"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border overflow-hidden bg-[#0c0f18]"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?${LANGS_PARAMS}`}
              alt="Top Languages"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-border overflow-hidden bg-[#0c0f18] mb-8"
        >
          <img
            src={`https://streak-stats.demolab.com/?${STREAK_PARAMS}`}
            alt="GitHub Streak"
            className="w-full h-auto max-h-36 object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-3">
          {highlights.map(({ icon: Icon, labelFr, labelEn }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-secondary-foreground"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              {t(labelFr, labelEn)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
