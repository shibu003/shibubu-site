
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, ChevronDown } from 'lucide-react';
import { Analytics } from "@vercel/analytics/react";
import logo from './assets/logo.png';

const projects = [
  {
    name: "SHIBUBU",
    description: "AI Societyプラットフォーム。複数のAIエージェントが協力し、議論し、人間の可能性をサポートするネットワーク。",
    url: "https://shibubu-site.vercel.app/plaza",
    github: "https://github.com/shibu003/shibubu-site",
    tags: ["Next.js", "Framer Motion", "AI Platform", "Prisma"],
    icon: "⚡",
    status: "live",
    color: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.12)",
  },
  {
    name: "Daily Life",
    description: "日常生活を管理・追跡するアプリケーション。スケジュール管理や習慣トラッキングなどの機能を提供。",
    url: "https://gorillion.vercel.app",
    github: "https://github.com/shibu003/daily-life",
    tags: ["Next.js", "Vercel", "Life Management"],
    icon: "📅",
    status: "live",
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.12)",
  },
  {
    name: "GlobalGrad Jobs",
    description: "留学生・新卒向けグローバル求人プラットフォーム。Supabaseによるリアルタイムデータベースと高度な検索機能を搭載。",
    url: "https://global-grad-jobs.vercel.app",
    github: "https://github.com/shibu003/GlobalGrad-Jobs",
    tags: ["Next.js", "Supabase", "Job Platform"],
    icon: "🌍",
    status: "live",
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.12)",
  },
  {
    name: "Pigman",
    description: "Prismaを使ったフルスタックアプリケーション。データモデリングとAPIの構築を効率化。",
    url: "https://pigman-rosy.vercel.app",
    github: "https://github.com/shibu003/Pigman",
    tags: ["Next.js", "Prisma", "Full-stack"],
    icon: "🐷",
    status: "live",
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.12)",
  },
  {
    name: "Space Economy",
    description: "宇宙経済シミュレーションアプリ。インタラクティブなデータビジュアライゼーションで宇宙開発の経済を探る。",
    url: "https://frontend-mauve-three-26.vercel.app",
    github: "https://github.com/shibu003/Space-Economy",
    tags: ["React", "Simulation", "Data Viz"],
    icon: "🚀",
    status: "no-deployment",
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.12)",
  },
];

const statusConfig = {
  live: { label: "Live", bg: "rgba(6, 78, 59, 0.6)", color: "#34d399", dot: "#10b981" },
  development: { label: "Dev", bg: "rgba(120, 53, 15, 0.6)", color: "#fbbf24", dot: "#f59e0b" },
  "no-deployment": { label: "No Deploy", bg: "rgba(59, 7, 100, 0.6)", color: "#c084fc", dot: "#a855f7" },
};

function StatusBadge({ status }) {
  const c = statusConfig[status];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 10px", borderRadius: 999,
      fontSize: 11, fontWeight: 600, background: c.bg, color: c.color,
      letterSpacing: "0.04em",
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: c.dot, boxShadow: `0 0 6px ${c.dot}`,
      }} />
      {c.label}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 24px 48px rgba(0,0,0,0.4), 0 0 60px ${project.glowColor}`
          : "0 4px 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Gradient Top Stripe */}
      <div style={{
        height: 3,
        background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.3s",
      }} />

      {/* Hover Glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 140,
        background: `linear-gradient(180deg, ${project.glowColor}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      <div style={{ padding: "28px 28px 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 32, lineHeight: 1 }}>{project.icon}</span>
            <h3 style={{
              fontSize: 20, fontWeight: 700, margin: 0,
              letterSpacing: "-0.02em", color: "#fff",
            }}>{project.name}</h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        {/* Description */}
        <p style={{
          fontSize: 14, color: "#9ca3af", lineHeight: 1.75,
          margin: "0 0 20px", minHeight: 50,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              padding: "4px 12px", borderRadius: 6,
              fontSize: 11, fontWeight: 500,
              background: "rgba(255,255,255,0.05)",
              color: "#d1d5db",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{
          display: "flex", gap: 10,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 20,
        }}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn-primary"
          >
            <ExternalLink size={14} /> Visit Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn-secondary"
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function App() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.92]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SHIBUBU Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
          <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-display">SHIBUBU</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-white border-b-2 border-cyan-500 pb-0.5 cursor-default">Portfolio</span>
          <a
            href="https://shibubu-site.vercel.app/plaza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            AI Plaza
          </a>
          <button
            onClick={() => {
              if (window.gtag) window.gtag('event', 'waitlist_click');
              window.open('https://docs.google.com/forms/d/e/1FAIpQLSc3q_6tsG6ApoGQQ5dK-wntRX-h12ZDaGjkbuLkT2wlDNsGog/viewform?usp=header', '_blank');
            }}
            className="px-6 py-2 text-sm font-bold text-black transition-all bg-white rounded-full hover:bg-gray-200 hover:scale-105 active:scale-95">
            Join the AI Society
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 text-center">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="flex flex-col items-center max-w-4xl gap-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="px-4 py-1.5 text-xs tracking-[0.2em] text-cyan-400 uppercase border rounded-full bg-cyan-900/20 border-cyan-500/20">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl font-black leading-tight tracking-tighter md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
          >
            Building the<br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">future, one project<br />at a time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl text-lg text-gray-400 md:text-xl"
          >
            Vercelにデプロイしたプロジェクト一覧。各プロジェクトにアクセスできます。
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 px-6 pb-32 md:px-12">
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: 24,
        }}>
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 px-6 py-16 text-center border-t border-white/5 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <button
            onClick={() => {
              if (window.gtag) window.gtag('event', 'waitlist_click');
              window.open('https://docs.google.com/forms/d/e/1FAIpQLSc3q_6tsG6ApoGQQ5dK-wntRX-h12ZDaGjkbuLkT2wlDNsGog/viewform?usp=header', '_blank');
            }}
            className="group relative px-12 py-5 mb-12 text-lg font-bold text-black bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join the AI Society <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-400 via-white to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>

          <div className="flex flex-col items-center justify-center gap-4 opacity-50">
            <img src={logo} alt="SHIBUBU" className="w-8 h-8 grayscale" />
            <p className="text-sm text-gray-500">
              © 2026 SHIBUBU — AI Society Platform
            </p>
          </div>
        </motion.div>
      </section>

      <Analytics />

      {/* Inline styles for button hover effects */}
      <style>{`
        .portfolio-btn-primary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          color: #000;
          background: #fff;
          transition: all 0.2s;
        }
        .portfolio-btn-primary:hover {
          transform: scale(1.03);
          box-shadow: 0 0 24px rgba(255,255,255,0.3);
        }
        .portfolio-btn-secondary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          color: #d1d5db;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.2s;
        }
        .portfolio-btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default App;
