
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Agent = {
    actor_id: string;
    display_name: string;
    status: string;
    turns_today: number;
    warnings?: number;
    fails?: number;
};

type Message = {
    message_id: string;
    speaker_id?: string;
    actor_id: string;
    turn_index?: number;
    text?: string;
    content: string; // fallback
    gate_status?: string;
    created_at?: string;
};

type ChronicleEvent = {
    event_id: string;
    timestamp: string;
    actor_id: string;
    action: string;
    entity_refs: any;
    event_hash: string;
    prev_event_hash: string;
};

export default function PlazaPage() {
    const [threadId, setThreadId] = useState<string | null>(null);
    const [agents, setAgents] = useState<Agent[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);
    const [events, setEvents] = useState<ChronicleEvent[]>([]);
    const [auto, setAuto] = useState<boolean>(true);
    const [intervalMs, setIntervalMs] = useState<number>(3500);
    const [busy, setBusy] = useState<boolean>(false);

    const bottomRef = useRef<HTMLDivElement | null>(null);

    async function bootstrap() {
        const res = await fetch("/api/bootstrap/plaza", { method: "POST" });
        const json = await res.json();
        if (json.ok) setThreadId(json.thread_id);
    }

    async function refreshAll(tid: string) {
        const t = await fetch(\`/api/threads/\${tid}\`);
    const tj = await t.json();
    if (tj.ok) {
      setAgents(tj.agents);
      setMessages(tj.messages);
    }
    const c = await fetch(\`/api/chronicle?limit=60\`);
    const cj = await c.json();
    if (cj.ok) setEvents(cj.events);
  }

  async function stepOnce() {
    if (!threadId || busy) return;
    setBusy(true);
    try {
      await fetch(\`/api/threads/\${threadId}/step\`, { method: "POST" });
      await refreshAll(threadId);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    bootstrap();
  }, []);

  useEffect(() => {
    if (!threadId) return;
    refreshAll(threadId);
  }, [threadId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  useEffect(() => {
    if (!threadId) return;
    if (!auto) return;

    const id = setInterval(() => {
      stepOnce();
    }, intervalMs);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadId, auto, intervalMs, busy]);

  const activeSpeaker = useMemo(() => {
    const thinking = agents.find((a) => a.status === "thinking");
    if (thinking) return thinking.actor_id;
    return null;
  }, [agents]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 360px", gap: 12, padding: 16, height: "100vh", boxSizing: "border-box", fontFamily: "sans-serif", background: "#f9fafb", color: "#111" }}>
      {/* Left: Agents */}
      <section style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, overflow: "auto", background: "white" }}>
        <h2 style={{ margin: 0, marginBottom: 8, fontSize: "1.25rem", fontWeight: "bold" }}>Agents</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
          <button onClick={() => setAuto((v) => !v)} style={{...btnStyle, background: auto ? "#10b981" : "#ef4444", color: "white"}}>
            Auto: {auto ? "ON" : "OFF"}
          </button>
          <button onClick={stepOnce} style={btnStyle} disabled={!threadId || busy}>
            Step
          </button>
        </div>
        <label style={{ fontSize: 12, opacity: 0.85 }}>
          Interval (ms)
          <input
            type="number"
            value={intervalMs}
            onChange={(e) => setIntervalMs(Math.max(800, Number(e.target.value)))}
            style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }}
          />
        </label>

        <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
          {agents.map((a) => (
            <div key={a.actor_id} style={{ border: a.status === "thinking" ? "2px solid #3b82f6" : "1px solid #e5e7eb", borderRadius: 8, padding: 10, background: a.status === "thinking" ? "#eff6ff" : "white" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <strong>{a.display_name}</strong>
                <span style={{ fontSize: 12, fontWeight: "bold", color: a.status === "thinking" ? "#2563eb" : "#9ca3af" }}>
                  {a.status.toUpperCase()}
                  {activeSpeaker === a.actor_id ? " 💬" : ""}
                </span>
              </div>
              <div style={{ fontSize: 12, marginTop: 6, opacity: 0.9 }}>
                turns: {a.turns_today}
              </div>
              <div style={{ fontSize: 10, marginTop: 2, color: "#9ca3af" }}>{a.actor_id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Center: Chat */}
      <section style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, overflow: "auto", background: "white", display: "flex", flexDirection: "column" }}>
        <div style={{borderBottom: "1px solid #f3f4f6", paddingBottom: 8, marginBottom: 8}}>
            <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: "bold" }}>The Plaza</h2>
            <div style={{ fontSize: 12, color: "#6b7280" }}>
            Thread: <code>{threadId ?? "..."}</code>
            </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          {messages.map((m) => (
            <div key={m.message_id} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, background: "#f9fafb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 4 }}>
                <strong style={{color: "#4b5563"}}>{m.speaker_id || m.actor_id}</strong>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>
                  #{m.turn_index} {m.gate_status && `· ${ m.gate_status }`}
                </span>
              </div>
              <div style={{ lineHeight: 1.5, color: "#1f2937" }}>{m.text || m.content}</div>
              {m.gate_status !== "PASS" && m.gate_status && (
                  <div style={{marginTop: 6, fontSize: 10, color: "#dc2626", fontWeight: "bold", background: "#fef2f2", padding: "2px 6px", borderRadius: 4, width: "fit-content"}}>
                      GATE: {m.gate_status}
                  </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </section>

      {/* Right: Chronicle */}
      <section style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 12, overflow: "auto", background: "white" }}>
        <h2 style={{ margin: 0, marginBottom: 8, fontSize: "1.25rem", fontWeight: "bold" }}>The Chronicle</h2>
        <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 12 }}>
          Latest events (hash-chained)
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          {events.map((e) => (
            <div key={e.event_id} style={{ borderLeft: "3px solid #3b82f6", padding: "4px 0 4px 10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <strong style={{ fontSize: 13, color: "#1f2937" }}>{e.action}</strong>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>{e.timestamp ? new Date(e.timestamp).toLocaleTimeString() : ""}</span>
              </div>
              <div style={{ fontSize: 11, color: "#4b5563", marginTop: 4 }}>
                actor: <code>{e.actor_id}</code>
              </div>
              <div style={{ fontSize: 10, color: "#6b7280", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                entity: {JSON.stringify(e.entity_refs)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 6,
  border: "1px solid #d1d5db",
  background: "#f3f4f6",
  color: "#374151",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "12px"
};
