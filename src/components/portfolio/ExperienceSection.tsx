import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Experience {
  titleFr: string;
  titleEn: string;
  period: string;
  company: string;
  projectFr: string;
  projectEn: string;
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
    projectFr: "Prestation pour une entreprise étrangère",
    projectEn: "Consulting for a foreign company",
    tasksFr: [
      "Collaborer avec les équipes back-end pour intégrer les APIs RESTful dans les applications AngularJS.",
      "Concevoir et développer des composants réutilisables en AngularJS pour améliorer la maintenabilité du code.",
      "Assurer la qualité des livrables dans un contexte de prestation internationale, en respectant les standards et délais du client.",
    ],
    tasksEn: [
      "Collaborated with back-end teams to integrate RESTful APIs into AngularJS applications.",
      "Designed and developed reusable AngularJS components to improve code maintainability.",
      "Ensured deliverable quality in an international consulting context, adhering to client standards and deadlines.",
    ],
    tech: ["JavaScript", "AngularJS"],
  },
  {
    titleFr: "Développeur Angular",
    titleEn: "Angular Developer",
    period: "Avr. 2024 — Mar. 2025",
    company: "Ingenosya Madagascar",
    projectFr: "Prestation pour une entreprise Belge",
    projectEn: "Consulting for a Belgian company",
    tasksFr: [
      "Collaborer avec les designers UX/UI pour implémenter des interfaces utilisateurs réactives et accessibles.",
      "Optimiser les performances des applications Angular en améliorant le chargement des modules et la gestion de l'état.",
      "Intégrer les bibliothèques et frameworks tiers (PrimeNg).",
    ],
    tasksEn: [
      "Collaborated with UX/UI designers to implement reactive and accessible user interfaces.",
      "Optimized Angular application performance by improving module loading and state management.",
      "Integrated third-party libraries and frameworks (PrimeNg).",
    ],
    tech: ["TypeScript", "Angular", "PrimeNg"],
  },
  {
    titleFr: "Développeur Fullstack JS",
    titleEn: "Fullstack JS Developer",
    period: "2022 — Juil. 2024",
    company: "Ingenosya Madagascar",
    projectFr: "SME BLP — Plateforme Mada Business Linkage",
    projectEn: "SME BLP — Mada Business Linkage Platform",
    tasksFr: [
      "Mettre en place des architectures performantes et évolutives pour des applications web complexes orientées TypeScript.",
      "Concevoir et intégrer des APIs RESTful avec Nest.js pour connecter les services front-end et back-end de la plateforme.",
      "Utiliser Tailwind CSS et Next.js pour créer des interfaces utilisateur modernes, responsives et optimisées pour le SEO.",
      "Implémenter des fonctionnalités avancées en TypeScript pour garantir la qualité et la maintenabilité du code fullstack.",
      "Travailler au sein d'une équipe pluridisciplinaire de 15 personnes incluant chefs de projet, développeurs et ingénieurs qualité.",
    ],
    tasksEn: [
      "Built performant, scalable TypeScript architectures for complex web applications.",
      "Designed and integrated RESTful APIs with Nest.js to connect the platform's front-end and back-end services.",
      "Used Tailwind CSS and Next.js to build modern, responsive, and SEO-optimized user interfaces.",
      "Implemented advanced TypeScript features to ensure code quality and maintainability across the fullstack.",
      "Worked within a 15-person cross-functional team including project managers, developers, and QA engineers.",
    ],
    tech: ["TypeScript", "Next.js", "Nest.js", "Node.js", "Tailwind", "PostgreSQL"],
  },
  {
    titleFr: "Développeur Angular",
    titleEn: "Angular Developer",
    period: "Avr. 2022 — Nov. 2022",
    company: "Ingenosya Madagascar",
    projectFr: "Site Web d'une Université Locale",
    projectEn: "Local University Website",
    tasksFr: [
      "Conception et développement complet du front-end : Front Office (étudiants) et Back Office (administration).",
      "Intégration des fonctionnalités clés : actualités, événements, programmes de formations et module d'inscription des étudiants.",
      "Livraison, mise en production et maintenance évolutive selon les demandes du client.",
    ],
    tasksEn: [
      "Fully designed and developed the front-end: Front Office (students) and Back Office (administration).",
      "Integrated key features: news, events, training programs, and a student enrollment module.",
      "Delivered, deployed, and provided ongoing maintenance based on client requests.",
    ],
    tech: ["TypeScript", "Angular"],
  },
  {
    titleFr: "Développeur Odoo",
    titleEn: "Odoo Developer",
    period: "Avr. 2021 — Mar. 2022",
    company: "Ingenosya Madagascar",
    projectFr: "Extensions ERP Odoo — Entreprises malgaches",
    projectEn: "Odoo ERP Extensions — Malagasy companies",
    tasksFr: [
      "Développement d'un module de gestion électronique de documents (GED) : classement, archivage et workflows d'approbation.",
      "Implémentation d'un module de suivi de flotte automobile et d'engins lourds avec gestion de la maintenance.",
      "Développement d'un module de gestion des infrastructures physiques et des équipements.",
      "Intégration d'un module de gestion de production avec suivi des ordres de fabrication.",
    ],
    tasksEn: [
      "Developed an electronic document management (EDM) module: filing, archiving, and approval workflows.",
      "Implemented a vehicle and heavy equipment fleet tracking module with maintenance management.",
      "Developed a physical infrastructure and equipment management module.",
      "Integrated a production management module with manufacturing order tracking.",
    ],
    tech: ["Python", "JavaScript", "Odoo 13"],
  },
];

const ExperienceSection = () => {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];

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

        <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] gap-4 md:gap-10">

          {/* Left: tab list */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 md:border-l md:border-border">
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`text-left shrink-0 md:shrink px-4 py-3 md:-ml-px md:border-l-2 transition-all duration-200 rounded-lg md:rounded-none ${
                  selected === i
                    ? "md:border-primary bg-primary/10 text-foreground"
                    : "md:border-transparent text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                <span className="font-mono text-xs text-primary block">{e.period}</span>
                <span className="text-sm font-semibold block mt-0.5">{t(e.titleFr, e.titleEn)}</span>
                <span className="text-xs text-muted-foreground hidden md:block">{e.company}</span>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <p className="text-xs font-mono text-primary/70 italic mb-3">
                {t(exp.projectFr, exp.projectEn)}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                {t(exp.titleFr, exp.titleEn)}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {exp.company}
                <span className="mx-2 text-border">·</span>
                <span className="font-mono text-primary text-xs">{exp.period}</span>
              </p>
              <ul className="space-y-3 mb-8 max-w-2xl">
                {(lang === "fr" ? exp.tasksFr : exp.tasksEn).map((task: string, j: number) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-secondary-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-primary"
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
