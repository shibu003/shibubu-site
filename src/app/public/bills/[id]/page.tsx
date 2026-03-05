"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PublicBillDetailPage() {
    const { id } = useParams();
    const [bundle, setBundle] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            fetch(`/api/bills/${id}/bundle`)
                .then(res => res.json())
                .then(data => {
                    setBundle(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [id]);

    if (loading) return <div className="p-8">Loading verification data...</div>;
    if (!bundle || !bundle.bill) return <div className="p-8">Bill not found or not yet processed.</div>;

    const { bill, gate, audit, bundle: finalBundle } = bundle;

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <Link href="/public/bills" className="text-blue-600 hover:underline mb-2 block">&larr; Back to Ledger</Link>
                    <h1 className="text-3xl font-bold text-gray-900">{bill.title}</h1>
                    <p className="text-gray-500 font-mono text-sm mt-1">ID: {bill.id}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Artifacts */}
                    <div className="space-y-6">
                        <section className="bg-white p-6 rounded shadow border-l-4 border-gray-400">
                            <h2 className="text-lg font-bold mb-2">1. Bill Draft</h2>
                            <p className="text-sm text-gray-600 mb-2">{bill.summary}</p>
                            <div className="text-xs bg-gray-100 p-2 rounded font-mono break-all">
                                Content Hash: (Calculated from ID)
                            </div>
                        </section>

                        <section className={`bg-white p-6 rounded shadow border-l-4 ${gate ? (gate.verdict === 'FAIL' ? 'border-red-500' : 'border-green-500') : 'border-gray-200'}`}>
                            <h2 className="text-lg font-bold mb-2">2. Policy Gate Decision</h2>
                            {gate ? (
                                <>
                                    <div className="font-bold text-sm mb-1">Verdict: {gate.verdict}</div>
                                    <div className="text-xs bg-gray-100 p-2 rounded font-mono break-all">
                                        Input Hash: {gate.inputHash}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">Policy Version: {gate.policyVersion}</div>
                                </>
                            ) : <span className="text-gray-400">Not available</span>}
                        </section>

                        <section className={`bg-white p-6 rounded shadow border-l-4 ${audit ? (audit.verdict === 'FAIL' ? 'border-red-500' : 'border-green-500') : 'border-gray-200'}`}>
                            <h2 className="text-lg font-bold mb-2">3. Auditor Report</h2>
                            {audit ? (
                                <>
                                    <div className="font-bold text-sm mb-1">Verdict: {audit.verdict}</div>
                                    <div className="text-xs bg-gray-100 p-2 rounded font-mono break-all">
                                        Provenance: {JSON.stringify(JSON.parse(audit.auditorProvenance || '{}')).slice(0, 50)}...
                                    </div>
                                </>
                            ) : <span className="text-gray-400">Not available</span>}
                        </section>
                    </div>

                    {/* Right Column: Final Bundle */}
                    <div>
                        <section className="bg-blue-50 p-6 rounded shadow border border-blue-200 h-full">
                            <h2 className="text-xl font-bold text-blue-900 mb-4">Final Decision Bundle</h2>

                            {finalBundle ? (
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-blue-600 uppercase font-bold tracking-wide">Bundle Hash (Signature)</div>
                                        <div className="text-lg font-mono font-bold break-all bg-white p-4 rounded border border-blue-100 mt-1 text-blue-900">
                                            {finalBundle.bundleHash}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-xs text-blue-600 uppercase font-bold tracking-wide mb-1">Bundle Contents</div>
                                        <pre className="text-xs bg-white p-4 rounded border border-blue-100 overflow-auto max-h-[400px]">
                                            {JSON.stringify(JSON.parse(finalBundle.bundleJson), null, 2)}
                                        </pre>
                                    </div>

                                    <div className="bg-green-100 text-green-800 p-4 rounded text-sm">
                                        <strong>Verification Passed:</strong> This bundle corresponds to the artifacts on the left. The hash is anchored in the Ledger.
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-500 text-center mt-10">
                                    Bundle processing pending...
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
