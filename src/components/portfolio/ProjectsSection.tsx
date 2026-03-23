import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Users, ArrowUpRight, Zap, FlaskConical, ExternalLink } from "lucide-react";

const GITHUB_URL = "https://github.com/Ihagatiana"; // update with your real GitHub username

const techBadgeClass: Record<string, string> = {
  TypeScript:       "text-blue-400   border-blue-400/30   bg-blue-400/10",
  NestJS:           "text-red-400    border-red-400/30    bg-red-400/10",
  "Next.js":        "text-slate-300  border-slate-400/30  bg-slate-400/10",
  PostgreSQL:       "text-sky-400    border-sky-400/30    bg-sky-400/10",
  Tailwind:         "text-cyan-400   border-cyan-400/30   bg-cyan-400/10",
  "Node.js":        "text-green-400  border-green-400/30  bg-green-400/10",
  Angular:          "text-red-500    border-red-500/30    bg-red-500/10",
  PrimeNG:          "text-blue-500   border-blue-500/30   bg-blue-500/10",
  RxJS:             "text-pink-400   border-pink-400/30   bg-pink-400/10",
  AngularJS:        "text-orange-400 border-orange-400/30 bg-orange-400/10",
  JavaScript:       "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Playwright:       "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Jest:             "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "GitHub Actions": "text-violet-400 border-violet-400/30 bg-violet-400/10",
  "CI/CD":          "text-violet-400 border-violet-400/30 bg-violet-400/10",
  Redis:            "text-red-400    border-red-400/30    bg-red-400/10",
  Docker:           "text-sky-400    border-sky-400/30    bg-sky-400/10",
  OpenAI:           "text-teal-400   border-teal-400/30   bg-teal-400/10",
};

function TechBadge({ name }: { name: string }) {
  const cls = techBadgeClass[name] ?? "text-primary border-primary/30 bg-primary/10";
  return (
    <span className={`font-mono text-[11px] px-2.5 py-1 rounded-full border ${cls}`}>
      {name}
    </span>
  );
}

/* ── Architecture diagrams ── */

function ArchDiagramSME() {
  return (
    <div className="p-4 rounded-xl border border-border bg-background/50 font-mono text-xs select-none">
      <p className="text-[10px] text-primary uppercase tracking-widest mb-4 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        Architecture — NestJS / Next.js Monorepo
      </p>
      <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 px-4 py-3 text-center">
        <p className="text-blue-400 font-semibold">Next.js Frontend</p>
        <div className="flex flex-wrap gap-1.5 justify-center mt-2">
          {["SSR / SSG", "React Query", "Tailwind CSS", "SEO"].map(m => (
            <span key={m} className="px-2 py-0.5 rounded-full bg-blue-400/10 text-blue-300 text-[10px] border border-blue-400/20">{m}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-1.5 text-muted-foreground text-[10px] items-center gap-2">
        <span className="h-px w-10 bg-border" />REST / HTTP<span className="h-px w-10 bg-border" />
      </div>
      <div className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-center">
        <p className="text-primary font-semibold">NestJS API</p>
        <div className="flex flex-wrap gap-1.5 justify-center mt-2">
          {["JWT Auth", "Guards", "Decorators", "Multi-tenant", "TypeORM", "CQRS"].map(m => (
            <span key={m} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] border border-primary/20">{m}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-1.5 text-muted-foreground text-[10px] items-center gap-2">
        <span className="h-px w-10 bg-border" />TypeORM<span className="h-px w-10 bg-border" />
      </div>
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 px-4 py-3 text-center">
        <p className="text-green-400 font-semibold">PostgreSQL</p>
        <div className="flex flex-wrap gap-1.5 justify-center mt-2">
          {["Multi-tenant", "Migrations", "Relations", "Indexes"].map(m => (
            <span key={m} className="px-2 py-0.5 rounded-full bg-green-400/10 text-green-300 text-[10px] border border-green-400/20">{m}</span>
          ))}
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground mt-3 text-center">
        TypeScript end-to-end · 15-person team · 2 years in production
      </p>
    </div>
  );
}

function ArchDiagramAutomation() {
  return (
    <div className="p-4 rounded-xl border border-border bg-background/50 font-mono text-xs select-none">
      <p className="text-[10px] text-primary uppercase tracking-widest mb-4 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        Pipeline CI/CD — Test Automation
      </p>

      {/* Trigger */}
      <div className="rounded-lg border border-violet-500/30 bg-violet-500/5 px-3 py-2 text-center">
        <p className="text-violet-400 font-semibold text-[11px]">git push → GitHub Actions</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">Trigger on PR / main branch</p>
      </div>

      <div className="flex justify-center py-1.5 text-muted-foreground text-[10px] items-center gap-2">
        <span className="h-px w-10 bg-border" />triggers<span className="h-px w-10 bg-border" />
      </div>

      {/* Parallel test jobs */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-orange-400/30 bg-orange-400/5 px-3 py-2.5 text-center">
          <p className="text-orange-400 font-semibold text-[11px]">Jest</p>
          <div className="mt-1 space-y-0.5">
            <p className="text-[10px] text-muted-foreground">Unit tests</p>
            <p className="text-[10px] text-muted-foreground">Integration tests</p>
            <p className="text-[10px] text-muted-foreground">NestJS e2e tests</p>
          </div>
        </div>
        <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-3 py-2.5 text-center">
          <p className="text-emerald-400 font-semibold text-[11px]">Playwright</p>
          <div className="mt-1 space-y-0.5">
            <p className="text-[10px] text-muted-foreground">E2E scenarios</p>
            <p className="text-[10px] text-muted-foreground">Visual regression</p>
            <p className="text-[10px] text-muted-foreground">Cross-browser</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-1.5 text-muted-foreground text-[10px] items-center gap-2">
        <span className="h-px w-10 bg-border" />pass / fail<span className="h-px w-10 bg-border" />
      </div>

      {/* Result */}
      <div className="rounded-lg border border-green-500/30 bg-green-500/5 px-3 py-2 text-center">
        <p className="text-green-400 font-semibold text-[11px]">HTML Report + Coverage</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">Artifacts · Annotations · PR status check</p>
      </div>
    </div>
  );
}

function ComingSoonPanel({ t }: { t: (fr: string, en: string) => string }) {
  return (
    <div className="h-full min-h-[260px] rounded-xl border border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
          <Zap className="w-7 h-7 text-primary" />
        </div>
        <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-mono font-bold">
          WIP
        </span>
      </div>
      <div>
        <p className="text-sm font-bold text-foreground mb-1">
          {t("En cours de construction", "In progress")}
        </p>
        <p className="text-xs text-muted-foreground max-w-[220px] leading-relaxed">
          {t(
            "Démo live en cours de déploiement. Stack : NestJS · Angular · PostgreSQL · Docker",
            "Live demo being deployed. Stack: NestJS · Angular · PostgreSQL · Docker"
          )}
        </p>
      </div>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
      >
        <Github className="w-3 h-3" />
        {t("Suivre l'avancement", "Follow the progress")}
        <ArrowUpRight className="w-3 h-3" />
      </a>
    </div>
  );
}

/* ── Data ── */

interface Project {
  id: string;
  tabFr: string;       // short label for the tab button
  tabEn: string;
  titleFr: string;     // impactful headline shown in the panel
  titleEn: string;
  tagFr?: string;
  tagEn?: string;
  descFr: string;
  descEn: string;
  tech: string[];
  highlights: string[];
  diagram?: "sme" | "automation";
  comingSoon?: boolean;
  liveUrl?: string;
  teamSize?: string;
}

const projects: Project[] = [
  {
    id: "sme-blp",
    tabFr: "Plateforme SaaS B2B",
    tabEn: "B2B SaaS Platform",
    titleFr: "De zéro à la production — plateforme SaaS B2B en 2 ans",
    titleEn: "Zero to production — B2B SaaS platform in 2 years",
    tagFr: "SaaS · Production",
    tagEn: "SaaS · Production",
    descFr: "Des PME sans présence numérique ne pouvaient pas accéder aux réseaux d'affaires internationaux. J'ai conçu et livré une plateforme SaaS fullstack de zéro — monorepo NestJS/Next.js multi-tenant — qui connecte aujourd'hui des centaines d'entreprises, 2 ans en production dans une équipe de 15.",
    descEn: "SMEs with no digital presence couldn't access international business networks. I designed and shipped a full SaaS platform from scratch — NestJS/Next.js multi-tenant monorepo — now connecting hundreds of businesses, 2 years in production within a 15-person team.",
    tech: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Tailwind", "Node.js"],
    highlights: [
      "Problème : zéro infrastructure numérique pour les PME locales",
      "Solution : monorepo NestJS/Next.js, auth JWT, multi-tenant PostgreSQL",
      "Résultat : des centaines d'entreprises connectées, 2 ans en prod",
      "Équipe de 15 — architecture TypeScript end-to-end",
    ],
    diagram: "sme",
    teamSize: "15",
  },
  {
    id: "test-automation",
    tabFr: "Tests Automatisés",
    tabEn: "Test Automation",
    titleFr: "Zéro régression manuelle — pipeline CI/CD Jest + Playwright",
    titleEn: "Zero manual regression — CI/CD pipeline with Jest + Playwright",
    tagFr: "Automation · CI/CD",
    tagEn: "Automation · CI/CD",
    descFr: "Les régressions manuelles ralentissaient les livraisons. J'ai mis en place un pipeline CI/CD complet : Jest (unit + intégration NestJS) et Playwright (E2E cross-browser), déclenché automatiquement sur chaque PR via GitHub Actions — chaque merge est validé avant d'atteindre la production.",
    descEn: "Manual regression testing was slowing down every release. I built a full CI/CD pipeline: Jest (unit + NestJS integration) and Playwright (cross-browser E2E), auto-triggered on every PR via GitHub Actions — every merge is validated before it reaches production.",
    tech: ["TypeScript", "Playwright", "Jest", "NestJS", "GitHub Actions", "CI/CD"],
    highlights: [
      "Problème : régressions manuelles coûteuses à chaque release",
      "Solution : Jest unit/intégration + Playwright E2E en parallèle",
      "Résultat : chaque PR validée automatiquement avant merge",
      "Coverage report + HTML artifacts générés en CI",
    ],
    diagram: "automation",
  },
  {
    id: "mini-saas",
    tabFr: "Mini SaaS",
    tabEn: "Mini SaaS",
    titleFr: "Automatiser les workflows métier répétitifs — SaaS en cours",
    titleEn: "Automating repetitive business workflows — SaaS in progress",
    tagFr: "En construction 🔨",
    tagEn: "In progress 🔨",
    descFr: "Les équipes perdent des heures sur des tâches manuelles et répétitives. Je construis un outil SaaS qui automatise ces workflows — tableau de bord Angular, API NestJS event-driven, jobs asynchrones Redis. Démo live bientôt disponible.",
    descEn: "Teams waste hours on repetitive manual tasks. I'm building a SaaS tool that automates these workflows — Angular dashboard, event-driven NestJS API, Redis async jobs. Live demo coming soon.",
    tech: ["TypeScript", "Angular", "NestJS", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Problème : workflows répétitifs chronophages sans automatisation",
      "Solution : Angular Signals + NestJS event-driven + Redis jobs",
      "Résultat : démo live en cours de déploiement",
      "Docker Compose — dev + prod ready",
    ],
    comingSoon: true,
  },
  {
    id: "angular-saas",
    tabFr: "SaaS Enterprise",
    tabEn: "Enterprise SaaS",
    titleFr: "Temps de chargement divisé par 2 — SaaS enterprise 10k+ users",
    titleEn: "Load time halved — enterprise SaaS serving 10k+ users",
    tagFr: "Performance · UX",
    tagEn: "Performance · UX",
    descFr: "Un SaaS enterprise Angular souffrait de performances dégradées bloquant l'onboarding de nouveaux clients. J'ai refactorisé l'architecture : lazy loading, NgRx optimisé, PrimeNG theming cohérent — temps de chargement réduit de ~40%, Lighthouse passé de 45 à 78.",
    descEn: "An enterprise Angular SaaS had poor performance blocking new client onboarding. I refactored the architecture: lazy loading, optimized NgRx, consistent PrimeNG theming — load time cut ~40%, Lighthouse score from 45 to 78.",
    tech: ["TypeScript", "Angular", "PrimeNG", "RxJS"],
    highlights: [
      "Problème : performances dégradées bloquant l'onboarding enterprise",
      "Solution : lazy loading, NgRx tuning, code splitting, PrimeNG theming",
      "Résultat : −40% de temps de chargement, Lighthouse 45 → 78",
      "Impact : meilleure expérience pour +10 000 utilisateurs",
    ],
  },
];

/* ── Component ── */

const ProjectsSection = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState(0);
  const proj = projects[selected];

  const RightPanel = () => {
    if (proj.comingSoon) return <ComingSoonPanel t={t} />;
    if (proj.diagram === "sme") return <ArchDiagramSME />;
    if (proj.diagram === "automation") return <ArchDiagramAutomation />;
    return (
      <div className="h-full min-h-[200px] rounded-xl border border-border bg-card/50 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Github className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">
            {t("Code source", "Source Code")}
          </p>
          <p className="text-xs text-muted-foreground mb-3">
            {t("Projet client — code confidentiel", "Client project — code is confidential")}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
          >
            {t("Voir mon profil GitHub", "View my GitHub profile")}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("Projets", "Projects")}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {t("SaaS · Automation · Enterprise", "SaaS · Automation · Enterprise")}
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/40 text-primary text-sm font-mono hover:bg-primary/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            {t("Voir GitHub", "View GitHub")}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Tab list */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {projects.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setSelected(i)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className={`group px-4 py-2 rounded-lg text-sm font-mono transition-colors duration-200 ${
                selected === i
                  ? "bg-primary/15 text-primary border border-primary/40 shadow-[0_0_16px_-4px_hsl(var(--primary)/0.3)]"
                  : "border border-border text-muted-foreground hover:border-primary/20 hover:text-foreground"
              }`}
            >
              {t(p.tabFr, p.tabEn)}
              {p.comingSoon && (
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  WIP
                </span>
              )}
              {p.diagram === "automation" && (
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <FlaskConical className="w-2.5 h-2.5 inline" />
                </span>
              )}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <h3 className="text-xl font-bold">{t(proj.titleFr, proj.titleEn)}</h3>
                {proj.tagFr && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t(proj.tagFr, proj.tagEn!)}
                  </span>
                )}
                {proj.teamSize && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border">
                    <Users className="w-3 h-3" />{proj.teamSize} {t("pers.", "devs")}
                  </span>
                )}
              </div>

              <p className="text-sm text-secondary-foreground leading-relaxed mb-5">
                {t(proj.descFr, proj.descEn)}
              </p>

              <ul className="space-y-2.5 mb-6">
                {proj.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.07 }}
                    className="flex items-start gap-2.5 text-sm text-secondary-foreground"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-mono text-xs">{h}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.15, delay: i * 0.05 }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.12 } }}
                  >
                    <TechBadge name={tech} />
                  </motion.span>
                ))}
              </div>

              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("Voir la démo live", "View live demo")}
                </a>
              )}
            </div>

            {/* Right */}
            <motion.div
              key={`right-${proj.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <RightPanel />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
