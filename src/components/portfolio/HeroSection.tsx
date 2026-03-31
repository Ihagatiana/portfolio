import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Briefcase, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const GITHUB_URL = "https://github.com/Ihagatiana"; // update with your real username
const EMAIL = "rihagatiana0@gmail.com";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      {/* Ambient orbs */}
      <div
        className="orb orb-1 w-[500px] h-[500px] top-[-100px] left-[-120px] opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      />
      <div
        className="orb orb-2 w-[400px] h-[400px] top-[20%] right-[-80px] opacity-15"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }}
      />
      <div
        className="orb orb-3 w-[350px] h-[350px] bottom-[10%] left-[30%] opacity-10"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-primary text-sm mb-4 tracking-widest uppercase"
          >
            {t("Bonjour, je suis", "Hi, I'm")}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-foreground">Ihagatiana</span>
            <br />
            <span className="text-gradient-animated">Ramilijaona</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-3">
            {t("Développeur Fullstack", "Fullstack Developer")}
            <span className="text-primary/70 font-mono text-lg"> · Angular / NestJS / TypeScript</span>
          </h2>

          <p className="text-primary font-bold text-xl mb-4 leading-snug">
            {t(
              "Je transforme des idées complexes en produits SaaS qui tournent en production.",
              "I turn complex ideas into SaaS products that ship to production."
            )}
          </p>

          <p className="text-secondary-foreground leading-relaxed max-w-xl mb-6 text-base">
            {t(
              "4+ ans de code en production sur des projets internationaux — Angular & TypeScript front, NestJS back, tests automatisés Playwright/Jest. En Master IA & Big Data à l'ESTIA (France).",
              "4+ years shipping production code on international projects — Angular & TypeScript frontend, NestJS backend, Playwright/Jest test automation. Pursuing a Master's in AI & Big Data at ESTIA (France)."
            )}
          </p>

          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t("Ouvert aux opportunités", "Open to opportunities")}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all duration-200 shadow-[0_0_24px_-4px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_32px_-2px_hsl(var(--primary)/0.6)]"
            >
              <Briefcase className="w-4 h-4" />
              {t("Me recruter", "Hire me")}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t("Me contacter", "Contact me")}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground font-semibold text-sm hover:border-primary/40 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="Ihagatiana_Ramilijaona_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary/80 font-semibold text-sm hover:bg-primary/10 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              {t("Télécharger mon CV", "Download my CV")}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              rihagatiana0@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Antananarivo, Madagascar
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              +261 34 33 534 07
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 border-2 border-primary/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
