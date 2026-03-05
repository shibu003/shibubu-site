
"use client";

import { useState, useEffect } from 'react';

// Types mirror the backend types
interface MonitorState {
    status: string;
    step?: string;
    messages: any[];
    events: any[];
}

export default function PlazaMonitorPage() {
    const [state, setState] = useState<MonitorState>({ status: "IDLE", messages: [], events: [] });
    const [autoRefresh, setAutoRefresh] = useState(false);

    const fetchState = async () => {
        const res = await fetch("/api/plaza/status");
        if (res.ok) {
            const data = await res.json();
            setState(data);
        }
    };

    const triggerLoop = async () => {
        await fetch("/api/plaza/loop/step", { method: "POST" });
        fetchState();
    };

    const resetLoop = async () => {
        await fetch("/api/plaza/loop/reset", { method: "POST" });
        fetchState();
    };

    useEffect(() => {
        fetchState();
        if (autoRefresh) {
            const interval = setInterval(triggerLoop, 2000); // Auto-step every 2s
            return () => clearInterval(interval);
        }
    }, [autoRefresh]);

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Left: Chronicle Stream */}
            <div className="w-1/3 bg-white border-r flex flex-col">
                <div className="p-4 border-b bg-gray-50 font-bold">Chronicle Events</div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {state.events.slice().reverse().map((evt) => (
                        <div key={evt.event_id} className="text-xs border-l-2 border-blue-500 pl-2">
                            <div className="font-mono text-gray-500">{evt.timestamp.split("T")[1].slice(0, 8)}</div>
                            <div className="font-bold text-gray-800">{evt.action}</div>
                            <div className="text-gray-600 truncate">{JSON.stringify(evt.entity_refs)}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Center: Live Chat */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 bg-white border-b shadow-sm flex justify-between items-center sticky top-0 z-10">
                    <div>
                        <h1 className="text-xl font-bold">The Plaza Monitor</h1>
                        <span className="text-sm text-gray-500">Status: {state.status} {state.step && `| Step: ${state.step}`}</span>
                    </div>
                    <div className="space-x-2">
                        <button onClick={fetchState} className="px-3 py-1 bg-gray-200 rounded">Refresh</button>
                        <button onClick={() => setAutoRefresh(!autoRefresh)} className={`px-3 py-1 rounded text-white ${autoRefresh ? 'bg-red-500' : 'bg-green-500'}`}>
                            {autoRefresh ? "Stop Auto-Loop" : "Start Auto-Loop"}
                        </button>
                        <button onClick={triggerLoop} className="px-3 py-1 bg-blue-500 text-white rounded">Step +1</button>
                        <button onClick={resetLoop} className="px-3 py-1 bg-gray-800 text-white rounded">Reset</button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {state.messages.map((msg) => (
                        <div key={msg.message_id} className={`p-4 rounded-lg border max-w-2xl ${msg.intent === 'topic' ? 'bg-blue-50 border-blue-200' :
                                msg.intent === 'audit_flag' ? 'bg-yellow-50 border-yellow-200 ml-auto' :
                                    'bg-white border-gray-200'
                            }`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-xs uppercase tracking-wide text-gray-600">{msg.actor_id}</span>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase ${msg.intent === 'topic' ? 'bg-blue-400' :
                                        msg.intent === 'audit_flag' ? 'bg-yellow-600' :
                                            msg.intent === 'argument' ? 'bg-purple-400' : 'bg-gray-400'
                                    }`}>{msg.intent}</span>
                            </div>
                            <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">{msg.content}</pre>
                            {msg.intent === 'topic' && (
                                <div className="mt-2 pt-2 border-t border-blue-100 text-xs text-blue-800">
                                    Evidence: {msg.evidence_ids.length > 0 ? msg.evidence_ids.join(", ") : "None (High Uncertainty)"}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
