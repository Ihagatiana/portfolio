import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Target, TrendingUp, Lightbulb } from "lucide-react";

interface Experience {
  titleFr: string;
  titleEn: string;
  period: string;
  company: string;
  projectFr: string;
  projectEn: string;
  problemFr: string;
  problemEn: string;
  impactFr: string;
  impactEn: string;
  challengeFr: string;
  challengeEn: string;
  tasksFr: string[];
  tasksEn: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    titleFr: "Développeur AngularJS",
    titleEn: "AngularJS Developer",
    period: "Avr. 2025 — présent",
    company: "Ingenosya Madagascar",
    projectFr: "Prestation internationale — app AngularJS legacy",
    projectEn: "International consulting — legacy AngularJS app",
    problemFr: "Application AngularJS legacy à stabiliser et enrichir, délais serrés, zéro tolérance aux régressions côté client.",
    problemEn: "Legacy AngularJS app to stabilize and extend — tight deadlines, zero regression tolerance from the client.",
    impactFr: "Bibliothèque de composants réutilisables livrée → temps de dev des nouvelles features réduit de ~30 %.",
    impactEn: "Reusable component library shipped → new feature dev time cut ~30%.",
    challengeFr: "Maintenir des standards modernes (tests, lisibilité) dans une codebase legacy et coordonner avec des équipes back-end multi-fuseaux.",
    challengeEn: "Upholding modern standards inside a legacy codebase while coordinating with back-end teams across time zones.",
    tasksFr: [
      "Stabilisé et enrichi la codebase AngularJS sous contraintes de délais serrés",
      "Conçu une lib de composants réutilisables — qualité moderne dans un contexte legacy",
      "Coordonné l'intégration des APIs REST avec des équipes back-end multi-fuseaux",
    ],
    tasksEn: [
      "Stabilized and extended the legacy AngularJS codebase under tight international deadlines",
      "Designed a reusable component library — modern standards within a legacy context",
      "Coordinated REST API integration with back-end teams across time zones",
    ],
    tech: ["JavaScript", "AngularJS"],
  },
  {
    titleFr: "Développeur Angular",
    titleEn: "Angular Developer",
    period: "Avr. 2024 — Mar. 2025",
    company: "Ingenosya Madagascar",
    projectFr: "SaaS enterprise — client international",
    projectEn: "Enterprise SaaS — international client",
    problemFr: "SaaS enterprise aux performances dégradées et UX vieillissante, bloquant l'onboarding de nouveaux clients.",
    problemEn: "Enterprise SaaS with poor performance and outdated UX — blocking onboarding of new clients.",
    impactFr: "Temps de chargement réduit de ~40 % via lazy loading + NgRx — meilleure expérience pour +10 000 utilisateurs.",
    impactEn: "Load time cut ~40% via lazy loading + NgRx optimization — better experience for 10,000+ users.",
    challengeFr: "Intégrer PrimeNG en profondeur tout en maintenant la cohérence du design system sur l'ensemble de l'app.",
    challengeEn: "Deep PrimeNG integration while maintaining design system consistency across the whole application.",
    tasksFr: [
      "Optimisé les performances Angular : lazy loading, tuning NgRx, code splitting",
      "Intégré PrimeNG en profondeur — theming cohérent sur tout le design system",
      "Livré des interfaces réactives et accessibles avec les designers UX",
    ],
    tasksEn: [
      "Optimized Angular performance: lazy loading, NgRx tuning, code splitting",
      "Deep PrimeNG integration — consistent theming across the full design system",
      "Delivered reactive, accessible UIs in close coordination with UX designers",
    ],
    tech: ["TypeScript", "Angular", "PrimeNG", "RxJS"],
  },
  {
    titleFr: "Développeur Fullstack JS",
    titleEn: "Fullstack JS Developer",
    period: "2022 — Juil. 2024",
    company: "Ingenosya Madagascar",
    projectFr: "Plateforme SaaS — Mise en relation B2B",
    projectEn: "SaaS Platform — B2B Business Networking",
    problemFr: "Les PME malgaches n'avaient aucun outil numérique pour se connecter aux réseaux d'affaires internationaux.",
    problemEn: "Malagasy SMEs had no digital tool to connect with international business networks — a critical market gap.",
    impactFr: "Plateforme SaaS livrée de 0 à la prod, des centaines d'entreprises connectées, 2 ans en production, équipe de 15.",
    impactEn: "SaaS platform shipped from 0 to production — hundreds of businesses connected, 2 years live, 15-person team.",
    challengeFr: "Concevoir un monorepo NestJS/Next.js multi-tenant avec PostgreSQL et maintenir la qualité du code sur 2 ans.",
    challengeEn: "Architecting a NestJS/Next.js multi-tenant monorepo with PostgreSQL while sustaining code quality over 2 years.",
    tasksFr: [
      "Architecturé un monorepo NestJS/Next.js multi-tenant avec PostgreSQL et TypeORM",
      "Conçu les APIs REST — auth JWT, guards, CQRS, données multi-tenant",
      "Construit le front Next.js : SSR/SSG, React Query, Tailwind, SEO",
    ],
    tasksEn: [
      "Architected a NestJS/Next.js multi-tenant monorepo with PostgreSQL + TypeORM",
      "Designed REST APIs — JWT auth, guards, CQRS, multi-tenant data layer",
      "Built the Next.js frontend: SSR/SSG, React Query, Tailwind, SEO",
    ],
    tech: ["TypeScript", "Next.js", "NestJS", "Node.js", "Tailwind", "PostgreSQL"],
  },
  {
    titleFr: "Développeur Angular",
    titleEn: "Angular Developer",
    period: "Avr. 2022 — Nov. 2022",
    company: "Ingenosya Madagascar",
    projectFr: "Portail web — Université locale",
    projectEn: "Web portal — Local university",
    problemFr: "Une université locale gérait inscriptions et communications entièrement à la main, sans aucune infrastructure numérique.",
    problemEn: "A local university managed enrollments and communications entirely manually — no digital infrastructure at all.",
    impactFr: "Charge administrative réduite de ~50 % — front office + back office livrés en solo en moins de 6 mois.",
    impactEn: "Admin workload reduced ~50% — front office + back office delivered solo in under 6 months.",
    challengeFr: "Concevoir seul deux interfaces complexes (portail étudiant + back-office) avec des workflows d'inscription multi-étapes.",
    challengeEn: "Solo design of two distinct interfaces (student portal + admin back-office) with complex multi-step enrollment workflows.",
    tasksFr: [
      "Conçu et développé seul deux SPAs : portail étudiant + back-office admin",
      "Implémenté des workflows d'inscription multi-étapes complexes",
      "Livré en production et assuré la maintenance évolutive",
    ],
    tasksEn: [
      "Solo design and development of two distinct SPAs: student portal + admin back-office",
      "Implemented complex multi-step enrollment workflows",
      "Delivered to production and maintained ongoing client iterations",
    ],
    tech: ["TypeScript", "Angular"],
  },
  {
    titleFr: "Développeur Odoo",
    titleEn: "Odoo Developer",
    period: "Avr. 2021 — Mar. 2022",
    company: "Ingenosya Madagascar",
    projectFr: "Extensions ERP — Entreprises malgaches",
    projectEn: "ERP extensions — Malagasy companies",
    problemFr: "Plusieurs entreprises utilisaient Odoo sans modules critiques (GED, flotte, production) — tout géré sur papier ou Excel.",
    problemEn: "Several companies used Odoo without critical modules (document management, fleet, production) — all on paper or Excel.",
    impactFr: "4 modules ERP custom en production — workflows documentaires et gestion de flotte automatisés pour plusieurs clients.",
    impactEn: "4 custom ERP modules shipped to production — automated document workflows and fleet management for multiple clients.",
    challengeFr: "Maîtriser l'ORM Python d'Odoo et ses patterns spécifiques pour des workflows d'approbation complexes inter-modules.",
    challengeEn: "Mastering Odoo's Python ORM to design complex cross-module approval workflows and robust integrations.",
    tasksFr: [
      "Développé 4 modules Odoo custom : GED, flotte, infrastructure, suivi de production",
      "Conçu des workflows d'approbation complexes via l'ORM Python d'Odoo",
      "Intégré et testé des modules inter-dépendants en production",
    ],
    tasksEn: [
      "Built 4 custom Odoo modules: document management, fleet, infrastructure, production tracking",
      "Designed complex approval workflows using Odoo's Python ORM",
      "Integrated and tested cross-dependent modules in production",
    ],
    tech: ["Python", "JavaScript", "Odoo 13"],
  },
];

/* ── Shared card config ── */
const cards = [
  {
    key: "problem" as const,
    icon: Target,
    labelFr: "Contexte",
    labelEn: "Context",
    color: {
      border: "border-amber-500/20",
      bg:     "bg-amber-500/5",
      icon:   "text-amber-400",
      label:  "text-amber-400",
    },
  },
  {
    key: "impact" as const,
    icon: TrendingUp,
    labelFr: "Impact",
    labelEn: "Impact",
    color: {
      border: "border-green-500/20",
      bg:     "bg-green-500/5",
      icon:   "text-green-400",
      label:  "text-green-400",
    },
  },
  {
    key: "challenge" as const,
    icon: Lightbulb,
    labelFr: "Défi technique",
    labelEn: "Key challenge",
    color: {
      border: "border-primary/20",
      bg:     "bg-primary/5",
      icon:   "text-primary",
      label:  "text-primary",
    },
  },
] as const;

type CardKey = (typeof cards)[number]["key"];

function getCardText(exp: Experience, key: CardKey, lang: string) {
  if (key === "problem")   return lang === "fr" ? exp.problemFr   : exp.problemEn;
  if (key === "impact")    return lang === "fr" ? exp.impactFr    : exp.impactEn;
  return                          lang === "fr" ? exp.challengeFr : exp.challengeEn;
}

/* ── Component ── */

const ExperienceSection = () => {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];
  const tasks = lang === "fr" ? exp.tasksFr : exp.tasksEn;

  return (
    <section id="experience" className="py-16 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          {t("Expériences Professionnelles", "Professional Experience")}
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-[240px_1fr] gap-4 md:gap-10">

          {/* Left: tab list */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:border-l md:border-border shrink-0">
            {experiences.map((e, i) => (
              <motion.button
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className={`text-left shrink-0 md:shrink px-4 py-3 md:-ml-px md:border-l-2 transition-colors duration-200 rounded-lg md:rounded-none ${
                  selected === i
                    ? "md:border-primary bg-primary/10 text-foreground"
                    : "md:border-transparent text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[11px] text-primary block">{e.period}</span>
                <span className="text-sm font-semibold block mt-0.5 leading-snug">{t(e.titleFr, e.titleEn)}</span>
                <span className="text-xs text-muted-foreground hidden md:block mt-0.5">{e.company}</span>
              </motion.button>
            ))}
          </div>

          {/* Right: detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-w-0"
            >
              {/* Header */}
              <p className="font-mono text-xs text-primary/60 mb-1.5">
                {t(exp.projectFr, exp.projectEn)}
              </p>
              <h3 className="text-2xl font-bold text-foreground leading-tight">
                {t(exp.titleFr, exp.titleEn)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-7">
                {exp.company}
                <span className="mx-2 opacity-30">·</span>
                <span className="font-mono text-primary text-xs">{exp.period}</span>
              </p>

              {/* 3 context cards — uniform structure, semantic colors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
                {cards.map(({ key, icon: Icon, labelFr, labelEn, color }, idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.08 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className={`rounded-xl border ${color.border} ${color.bg} p-4 flex flex-col gap-2.5 cursor-default`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${color.icon}`} />
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${color.label}`}>
                        {t(labelFr, labelEn)}
                      </span>
                    </div>
                    <p className="text-xs text-secondary-foreground leading-relaxed">
                      {getCardText(exp, key, lang)}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Task bullets — compact, secondary */}
              <ul className="space-y-1.5 mb-6">
                {tasks.map((task, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary border border-border text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
