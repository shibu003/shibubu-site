"use client";

import { useState, useEffect } from "react";

export default function EmergencyAdminPage() {
    const [status, setStatus] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [adminId, setAdminId] = useState("admin1"); // Simulate different admins

    const fetchStatus = async () => {
        const res = await fetch("/api/admin/emergency/status");
        const data = await res.json();
        setStatus(data);
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 3000); // Poll every 3s
        return () => clearInterval(interval);
    }, []);

    const handleStopRequest = async () => {
        if (!confirm(`Request Emergency Stop as ${adminId}?`)) return;
        setLoading(true);
        try {
            const res = await fetch("/api/admin/emergency/stop", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ actorId: adminId, approve: true })
            });
            const result = await res.json();
            alert(JSON.stringify(result, null, 2));
            fetchStatus();
        } catch (e) {
            alert("Error");
        }
        setLoading(false);
    };

    if (!status) return <div className="p-8">Loading...</div>;

    const isSystemHalted = status.status === "HALTED";
    const approvals = status.currentApprovals || [];
    const required = status.requiredApprovals || 2;

    return (
        <div className="min-h-screen bg-gray-100 p-8 font-sans">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border-t-8 border-red-600">
                <div className="p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Emergency Control Panel</h1>
                    <p className="text-gray-500 mb-8">Requires {required} administrator approvals to halt the system.</p>

                    {/* System Status Banner */}
                    <div className={`flex items-center justify-center p-6 rounded-lg text-2xl font-bold mb-8 ${isSystemHalted ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        System Status: {status.status}
                    </div>

                    {/* Pending Request */}
                    {status.pendingRequestId && !isSystemHalted && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-8">
                            <h3 className="font-bold text-yellow-800">Stop Request Pending</h3>
                            <p className="text-sm text-yellow-700 mt-1">Pending Request ID: {status.pendingRequestId}</p>
                            <div className="mt-4">
                                <span className="text-sm font-semibold text-gray-600">Current Approvals: {approvals.length} / {required}</span>
                                <div className="flex gap-2 mt-2">
                                    {approvals.map((approver: string) => (
                                        <span key={approver} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-mono">
                                            {approver}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Controls */}
                    {!isSystemHalted && (
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded">
                                <label className="text-sm font-medium text-gray-700">Simulate Admin:</label>
                                <select
                                    value={adminId}
                                    onChange={(e) => setAdminId(e.target.value)}
                                    className="border border-gray-300 rounded px-2 py-1"
                                >
                                    <option value="admin1">Admin 1</option>
                                    <option value="admin2">Admin 2</option>
                                    <option value="admin3">Admin 3</option>
                                </select>
                            </div>

                            <button
                                onClick={handleStopRequest}
                                disabled={loading || approvals.includes(adminId)}
                                className={`w-full py-4 text-white font-bold rounded shadow-lg transition-colors
                                    ${approvals.includes(adminId)
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-red-600 hover:bg-red-700'
                                    }`}
                            >
                                {approvals.includes(adminId) ? "You have approved" : "APPROVE EMERGENCY STOP"}
                            </button>
                        </div>
                    )}

                    {isSystemHalted && (
                        <div className="text-center text-gray-500 mt-8">
                            System is halted. Manual intervention required to resume.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
