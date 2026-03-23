import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Github, Mail, Briefcase, ArrowRight, Download } from "lucide-react";

const GITHUB_URL = "https://github.com/Ihagatiana";
const EMAIL = "rihagatiana0@gmail.com";
const WHATSAPP = "https://wa.me/261343353407";

const CTASection = () => {
  const { t } = useLang();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {t("Disponible pour de nouvelles opportunités", "Available for new opportunities")}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          {t("Travaillons", "Let's build")}
          <br />
          <span className="text-gradient">{t("ensemble", "something great")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed"
        >
          {t(
            "Développeur Fullstack TypeScript — Angular, NestJS, Next.js. Disponible pour CDI, mission freelance ou collaboration sur vos projets SaaS et outils métier.",
            "Fullstack TypeScript developer — Angular, NestJS, Next.js. Open to full-time roles, freelance missions, or collaboration on your SaaS and business tools."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Primary — Hire Me */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:opacity-90 transition-all duration-200 shadow-[0_0_30px_-6px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_40px_-4px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5"
          >
            <Briefcase className="w-5 h-5" />
            {t("Me recruter", "Hire me")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary — Contact */}
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-primary/50 text-primary font-bold text-base hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            {t("Me contacter", "Contact me")}
          </a>

          {/* Tertiary — GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-border text-muted-foreground font-semibold text-base hover:border-primary/40 hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        {/* Secondary actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-mono"
          >
            <Mail className="w-3.5 h-3.5" />
            rihagatiana0@gmail.com
          </a>
          <span className="hidden sm:inline text-border">·</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors font-mono"
          >
            <Github className="w-3.5 h-3.5" />
            github.com/Ihagatiana
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
