"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

const projects = [
  {
    name: "SHIBUBU",
    description:
      "AI Society platform. Multiple AI agents collaborate, discuss, and support human potential through a networked system.",
    url: "/plaza",
    github: "https://github.com/shibu003/shibubu-site",
    tags: ["Next.js", "Framer Motion", "AI Platform", "Prisma"],
    icon: "\u26A1",
    status: "live" as const,
    color: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.12)",
  },
  {
    name: "Daily Life",
    description:
      "Personal tracking app with AI-powered insights. Log daily activities, track finances, monitor streaks & stats, and visualize lifestyle patterns.",
    url: "https://gorillion.vercel.app",
    github: "https://github.com/shibu003/daily-life",
    tags: ["Next.js", "Vercel", "AI Insights", "Analytics"],
    icon: "\uD83D\uDCC5",
    status: "live" as const,
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.12)",
  },
  {
    name: "GlobalGrad Jobs",
    description:
      "Global job platform for international students & graduates. Real-time Supabase database with advanced search.",
    url: "https://global-grad-jobs.vercel.app",
    github: "https://github.com/shibu003/GlobalGrad-Jobs",
    tags: ["Next.js", "Supabase", "Job Platform"],
    icon: "\uD83C\uDF0D",
    status: "live" as const,
    color: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.12)",
  },
  {
    name: "Pigman",
    description:
      "Relationship strategy advisor MVP. AI-powered guidance and personalized advice on relationship matters with user authentication.",
    url: "https://pigman-rosy.vercel.app",
    github: "https://github.com/shibu003/Pigman",
    tags: ["Next.js", "Prisma", "AI Advisor", "Auth"],
    icon: "\uD83D\uDC37",
    status: "live" as const,
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.12)",
  },
  {
    name: "Space Economy",
    description:
      "Space industry intelligence dashboard. Track rocket launches, active satellites, funding rounds, and company momentum with real-time analytics.",
    url: "https://frontend-mauve-three-26.vercel.app",
    github: "https://github.com/shibu003/Space-Economy",
    tags: ["React", "Dashboard", "Data Viz", "Analytics"],
    icon: "\uD83D\uDE80",
    status: "no-deployment" as const,
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.12)",
  },
];

const statusConfig = {
  live: {
    label: "Live",
    bg: "rgba(6, 78, 59, 0.6)",
    color: "#34d399",
    dot: "#10b981",
  },
  development: {
    label: "Dev",
    bg: "rgba(120, 53, 15, 0.6)",
    color: "#fbbf24",
    dot: "#f59e0b",
  },
  "no-deployment": {
    label: "No Deploy",
    bg: "rgba(59, 7, 100, 0.6)",
    color: "#c084fc",
    dot: "#a855f7",
  },
};

function StatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const c = statusConfig[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 10px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        background: c.bg,
        color: c.color,
        letterSpacing: "0.04em",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: c.dot,
          boxShadow: `0 0 6px ${c.dot}`,
        }}
      />
      {c.label}
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
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
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? "rgba(255,255,255,0.05)"
          : "rgba(255,255,255,0.02)",
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
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 140,
          background: `linear-gradient(180deg, ${project.glowColor}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }}
      />

      <div style={{ padding: "28px 28px 24px", position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 32, lineHeight: 1 }}>{project.icon}</span>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.02em",
                color: "#fff",
              }}
            >
              {project.name}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <p
          style={{
            fontSize: 14,
            color: "#9ca3af",
            lineHeight: 1.75,
            margin: "0 0 20px",
            minHeight: 50,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 24,
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 500,
                background: "rgba(255,255,255,0.05)",
                color: "#d1d5db",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 20,
          }}
        >
          <a
            href={project.url}
            target={project.url.startsWith("/") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              color: "#000",
              background: "#fff",
              transition: "all 0.2s",
            }}
          >
            <ExternalLink size={14} /> Visit Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "10px 16px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              color: "#d1d5db",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.2s",
            }}
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.92]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "50%",
            height: "50%",
            background: "rgba(88, 28, 135, 0.2)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "50%",
            height: "50%",
            background: "rgba(22, 78, 99, 0.2)",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: "30%",
            height: "30%",
            background: "rgba(30, 58, 138, 0.1)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 48px",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.6)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "0.15em",
              background: "linear-gradient(to right, #fff, #9ca3af)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SHIBUBU
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              borderBottom: "2px solid #06b6d4",
              paddingBottom: 2,
            }}
          >
            Portfolio
          </span>
          <a
            href="/plaza"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            AI Plaza
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3q_6tsG6ApoGQQ5dK-wntRX-h12ZDaGjkbuLkT2wlDNsGog/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 24px",
              fontSize: 14,
              fontWeight: 700,
              color: "#000",
              background: "#fff",
              borderRadius: 999,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Join the AI Society
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "85vh",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 900, gap: 20 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span
                style={{
                  padding: "6px 16px",
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  color: "#22d3ee",
                  textTransform: "uppercase",
                  border: "1px solid rgba(6,182,212,0.2)",
                  borderRadius: 999,
                  background: "rgba(6,182,212,0.1)",
                }}
              >
                Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                margin: 0,
                background: "linear-gradient(180deg, #fff 40%, #6b7280 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building the
              <br />
              <span style={{ WebkitTextFillColor: "#fff", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.2))" }}>
                future, one project
                <br />
                at a time.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                maxWidth: 560,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#9ca3af",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Vercel projects collection. Click to visit each project.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{ position: "absolute", bottom: 32 }}
        >
          <ChevronDown
            style={{ width: 24, height: 24, color: "#4b5563", animation: "bounce 1s infinite" }}
          />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 48px 128px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          padding: "64px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "#000",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ maxWidth: 640, margin: "0 auto" }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3q_6tsG6ApoGQQ5dK-wntRX-h12ZDaGjkbuLkT2wlDNsGog/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "20px 48px",
              marginBottom: 48,
              fontSize: 18,
              fontWeight: 700,
              color: "#000",
              background: "#fff",
              borderRadius: 999,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Join the AI Society <ArrowRight style={{ width: 20, height: 20 }} />
          </a>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              opacity: 0.5,
            }}
          >
            <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
              &copy; 2026 SHIBUBU - AI Society Platform
            </p>
          </div>
        </motion.div>
      </section>

      <Analytics />

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        a:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
