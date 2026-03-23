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
  titleFr: string;
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
    titleFr: "Plateforme SaaS B2B",
    titleEn: "B2B SaaS Platform",
    tagFr: "SaaS Production",
    tagEn: "SaaS Production",
    descFr: "Plateforme SaaS fullstack livrée de zéro à la production pour connecter les PME malgaches aux réseaux internationaux. Monorepo NestJS/Next.js multi-tenant, 2 ans en prod, équipe de 15.",
    descEn: "Full SaaS platform shipped from zero to production, connecting Malagasy SMEs to international networks. NestJS/Next.js monorepo, multi-tenant, 2 years in prod, 15-person team.",
    tech: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Tailwind", "Node.js"],
    highlights: [
      "Monorepo NestJS + Next.js — TypeScript end-to-end",
      "Auth JWT · Guards · Decorators · CQRS",
      "PostgreSQL multi-tenant + TypeORM migrations",
      "React Query · SSR/SSG · SEO optimisé",
    ],
    diagram: "sme",
    teamSize: "15",
  },
  {
    id: "test-automation",
    titleFr: "Framework de Tests Automatisés",
    titleEn: "Automated Test Framework",
    tagFr: "Automation · CI/CD",
    tagEn: "Automation · CI/CD",
    descFr: "Pipeline de tests complet : tests unitaires Jest, tests d'intégration NestJS et E2E Playwright, exécutés automatiquement via GitHub Actions à chaque pull request. Rapports HTML + coverage.",
    descEn: "Complete test pipeline: Jest unit tests, NestJS integration tests, and Playwright E2E — auto-triggered via GitHub Actions on every pull request. HTML reports + coverage.",
    tech: ["TypeScript", "Playwright", "Jest", "NestJS", "GitHub Actions", "CI/CD"],
    highlights: [
      "Jest unit + NestJS integration tests",
      "Playwright E2E — cross-browser + visual regression",
      "GitHub Actions — PR status checks automatiques",
      "Coverage report + HTML artifacts en CI",
    ],
    diagram: "automation",
  },
  {
    id: "mini-saas",
    titleFr: "Mini SaaS — Business Tool",
    titleEn: "Mini SaaS — Business Tool",
    tagFr: "En construction 🔨",
    tagEn: "In progress 🔨",
    descFr: "Application SaaS fullstack en cours de développement : gestion de tâches et automatisation de workflows métier, avec tableau de bord Angular et API NestJS. Démo live bientôt disponible.",
    descEn: "Full-stack SaaS app in active development: task and business workflow automation, Angular dashboard + NestJS API. Live demo coming soon.",
    tech: ["TypeScript", "Angular", "NestJS", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Angular standalone components + Signals",
      "NestJS event-driven architecture",
      "Redis pour jobs asynchrones",
      "Docker Compose — dev + prod ready",
    ],
    comingSoon: true,
  },
  {
    id: "angular-saas",
    titleFr: "SaaS Enterprise — Client International",
    titleEn: "Enterprise SaaS — International Client",
    tagFr: "Performance · UX",
    tagEn: "Performance · UX",
    descFr: "Optimisation des performances et refonte UX d'un SaaS enterprise Angular/PrimeNG. Temps de chargement réduit de ~40% pour +10 000 utilisateurs.",
    descEn: "Performance optimization and UX overhaul of an Angular/PrimeNG enterprise SaaS. Load time reduced ~40% for 10,000+ users.",
    tech: ["TypeScript", "Angular", "PrimeNG", "RxJS"],
    highlights: [
      "Lazy loading + code splitting modules",
      "NgRx state management optimization",
      "PrimeNG deep integration & theming",
      "Lighthouse: 45 → 78",
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
            <button
              key={p.id}
              onClick={() => setSelected(i)}
              className={`group px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                selected === i
                  ? "bg-primary/15 text-primary border border-primary/40"
                  : "border border-border text-muted-foreground hover:border-primary/20 hover:text-foreground"
              }`}
            >
              {t(p.titleFr, p.titleEn)}
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
            </button>
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
                  <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-mono text-xs">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map(tech => <TechBadge key={tech} name={tech} />)}
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
