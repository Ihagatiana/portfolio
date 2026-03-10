import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

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
            <span className="text-gradient">Ramilijaona</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            {t("Développeur Fullstack", "Fullstack Developer")}
          </h2>

          <p className="text-secondary-foreground leading-relaxed max-w-xl mb-10 text-base">
            {t(
              "Développeur Full‑Stack formé en Master IA & Big Data. Je construis des interfaces web réactives et travaille sur l'intégration d'APIs pour des applications complexes à l'échelle internationale.",
              "Full-Stack Developer with a Master's in AI & Big Data. I build reactive web interfaces and work on API integration for complex international-scale applications."
            )}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {t("Voir mes expériences", "View my work")}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              {t("Me contacter", "Contact me")}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="mailto:rihagatiana0@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              rihagatiana0@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Antananarivo, Madagascar
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              034 33 534 07
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
