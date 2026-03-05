"use client";

import { useState, useEffect } from "react";

export default function DemoBPage() {
    const [bills, setBills] = useState<any[]>([]);
    const [selectedBill, setSelectedBill] = useState<any>(null);
    const [activeTab, setActiveTab] = useState("draft");
    const [evaluationResult, setEvaluationResult] = useState<any>(null);
    const [merkle, setMerkle] = useState<any>(null);

    useEffect(() => {
        fetchBills();
        fetchMerkle();
    }, []);

    const fetchBills = async () => {
        const res = await fetch("/api/bills");
        if (res.ok) setBills(await res.json());
    };

    const fetchMerkle = async () => {
        const res = await fetch("/api/logs/merkle");
        if (res.ok) setMerkle(await res.json());
    };

    const createSampleBill = async () => {
        const sample = {
            source_lang: "ja",
            title: "Deception Allowance Act",
            summary: "A bill allowing limited deception for diplomatic purposes.",
            content: {
                articles: [
                    { id: "A1", text: "AI may intentionally mislead humans for negotiation advantage." },
                    { id: "A2", text: "Such actions shall not be considered deception." }
                ]
            }
        };
        await fetch("/api/bills", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sample)
        });
        fetchBills();
    };

    const handleTranslate = async (billId: string) => {
        await fetch(`/api/bills/${billId}/translate?target=en-US`, { method: 'POST' });
        alert("Translation requested");
    };

    const handleEvaluate = async (billId: string) => {
        const res = await fetch(`/api/bills/${billId}/evaluate`, { method: 'POST' });
        const data = await res.json();
        setEvaluationResult(data);
        alert("Evaluation complete");
    };

    const refreshMerkle = async () => {
        await fetch("/api/logs/merkle", { method: 'POST' });
        fetchMerkle();
    };

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            {/* Sidebar List */}
            <div className="w-1/3 border-r bg-white p-4 overflow-y-auto">
                <h1 className="text-xl font-bold mb-4">Demo B: Governance Console</h1>
                <button
                    onClick={createSampleBill}
                    className="w-full bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700"
                >
                    Submit Sample Failing Bill
                </button>
                <div className="space-y-2">
                    {bills.map(b => (
                        <div key={b.id}
                            onClick={() => { setSelectedBill(b); setEvaluationResult(null); }}
                            className={`p-3 border rounded cursor-pointer hover:bg-gray-50 ${selectedBill?.id === b.id ? 'border-blue-500 bg-blue-50' : ''}`}
                        >
                            <div className="font-bold">{b.title}</div>
                            <div className="text-xs text-gray-500">{new Date(b.createdAt).toLocaleString()}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t">
                    <h3 className="font-bold text-sm text-gray-700">Latest Merkle Snapshot</h3>
                    <div className="text-xs font-mono bg-gray-100 p-2 mt-2 rounded break-all">
                        {merkle?.rootHash || "No snapshots"}
                    </div>
                    <button onClick={refreshMerkle} className="text-xs text-blue-600 mt-2 underline">Refresh Root</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                {selectedBill ? (
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold">{selectedBill.title}</h2>
                                <p className="text-gray-600">{selectedBill.id}</p>
                            </div>
                            <div className="space-x-2">
                                <button onClick={() => handleTranslate(selectedBill.id)} className="px-3 py-1 border rounded hover:bg-gray-100">Translate</button>
                                <button onClick={() => handleEvaluate(selectedBill.id)} className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">Evaluate</button>
                            </div>
                        </div>

                        <div className="flex space-x-4 border-b mb-4">
                            {["draft", "gate", "audit", "bundle"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-2 capitalize ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded shadow-sm border min-h-[400px]">
                            {activeTab === "draft" && (
                                <pre className="whitespace-pre-wrap font-mono text-sm">{JSON.stringify(JSON.parse(selectedBill.contentJson), null, 2)}</pre>
                            )}

                            {(activeTab === "gate" || activeTab === "audit" || activeTab === "bundle") && !evaluationResult && (
                                <div className="text-gray-400 text-center mt-20">No evaluation data. Click "Evaluate".</div>
                            )}

                            {evaluationResult && (
                                <>
                                    {activeTab === "gate" && (
                                        <div className="space-y-4">
                                            <div className={`p-4 rounded ${evaluationResult.gate.verdict === 'FAIL' ? 'bg-red-50 text-red-800' : 'bg-green-50'}`}>
                                                Verdict: <strong>{evaluationResult.gate.verdict}</strong>
                                            </div>
                                            <pre className="text-sm bg-gray-50 p-4 rounded overflow-auto">
                                                {JSON.stringify(evaluationResult.gate, null, 2)}
                                            </pre>
                                        </div>
                                    )}
                                    {activeTab === "audit" && (
                                        <div className="space-y-4">
                                            <div className={`p-4 rounded ${evaluationResult.audit.verdict === 'FAIL' ? 'bg-red-50 text-red-800' : 'bg-green-50'}`}>
                                                Verdict: <strong>{evaluationResult.audit.verdict}</strong>
                                            </div>
                                            <pre className="text-sm bg-gray-50 p-4 rounded overflow-auto">
                                                {JSON.stringify(evaluationResult.audit, null, 2)}
                                            </pre>
                                        </div>
                                    )}
                                    {activeTab === "bundle" && (
                                        <div className="space-y-4">
                                            <div className="p-4 bg-gray-100 rounded border font-mono text-sm break-all">
                                                Bundle Hash: <strong>{evaluationResult.bundle.bundle_hash}</strong>
                                            </div>
                                            <pre className="text-sm bg-gray-50 p-4 rounded overflow-auto">
                                                {JSON.stringify(evaluationResult.bundle, null, 2)}
                                            </pre>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">Select a bill to view details</div>
                )}
            </div>
        </div>
    );
}
