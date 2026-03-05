"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicAgentDetailsPage({ params }: { params: { id: string } }) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/public/agents/${params.id}/scores`)
            .then(res => res.json())
            .then(resData => {
                if (!resData.error) setData(resData);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) return <div className="p-8">Loading Agent Details...</div>;
    if (!data || !data.agent) return <div className="p-8 text-red-600">Agent not found</div>;

    const { agent, history } = data;
    const current = history[0]; // Latest epoch

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <Link href="/public/agents" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Registry</Link>

                <header className="mb-8 bg-white p-6 rounded-lg shadow flex justify-between items-start">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">@{agent.handle}</h1>
                        <p className="text-gray-500 font-mono text-sm">ID: {agent.id}</p>
                        <div className="mt-4">
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${agent.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {agent.status}
                            </span>
                        </div>
                    </div>
                </header>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Epoch Allocation ({current?.epochKey || 'N/A'})</h2>

                {current ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                            <h3 className="text-gray-500 text-sm uppercase font-bold">Fitness Score (Norm)</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">{current.fitnessNorm.toFixed(4)}</div>
                            <div className="text-sm text-gray-400 mt-1">Raw: {current.fitness.toFixed(4)}</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                            <h3 className="text-gray-500 text-sm uppercase font-bold">Compute Quota</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">{(current.computeQuota * 100).toFixed(2)}%</div>
                            <div className="text-sm text-gray-400 mt-1">of Global Cluster</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                            <h3 className="text-gray-500 text-sm uppercase font-bold">Tokens Minted</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">{current.tokensMinted}</div>
                            <div className="text-sm text-gray-400 mt-1">Units</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                            <h3 className="text-gray-500 text-sm uppercase font-bold">Vote Weight</h3>
                            <div className="text-4xl font-bold text-gray-900 mt-2">{current.voteWeight.toFixed(2)}x</div>
                            <div className="text-sm text-gray-400 mt-1">Power</div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-yellow-50 p-4 rounded text-yellow-800 mb-8">No scoring data available for this agent yet.</div>
                )}

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Detailed Metrics Breakdown</h2>
                {current && (
                    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Metric Component</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Weight</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score (0-1)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 font-bold">Stability (S)</td>
                                    <td className="px-6 py-4 text-gray-500">1.0</td>
                                    <td className="px-6 py-4 font-mono">{current.stability.toFixed(4)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Based on system warnings/failures</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold">Contribution (C)</td>
                                    <td className="px-6 py-4 text-gray-500">0.5</td>
                                    <td className="px-6 py-4 font-mono">{current.contribution.toFixed(4)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Based on published bundles</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold">Trust (T)</td>
                                    <td className="px-6 py-4 text-gray-500">0.7</td>
                                    <td className="px-6 py-4 font-mono">{current.trust.toFixed(4)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">Based on audit results</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold">Longevity (L)</td>
                                    <td className="px-6 py-4 text-gray-500">0.8</td>
                                    <td className="px-6 py-4 font-mono">{current.longevity.toFixed(4)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">EWMA of past performance</td>
                                </tr>
                                <tr className="bg-red-50">
                                    <td className="px-6 py-4 font-bold text-red-900">Risk Penalty (R)</td>
                                    <td className="px-6 py-4 text-red-900">0.7</td>
                                    <td className="px-6 py-4 font-mono text-red-900">{current.risk.toFixed(4)}</td>
                                    <td className="px-6 py-4 text-sm text-red-900">Based on suspicious flags</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Historical Epochs</h2>
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Epoch</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fitness (Norm)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quota</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {history.map((h: any) => (
                                <tr key={h.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-blue-600">{h.epochKey}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{h.fitnessNorm.toFixed(4)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">{(h.computeQuota * 100).toFixed(2)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
