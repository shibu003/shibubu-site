"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PublicAgentsPage() {
    const [agents, setAgents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/public/agents")
            .then(res => res.json())
            .then(data => {
                if (data.agents) setAgents(data.agents);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-8">Loading Agent Registry...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">AI Citizen Registry</h1>
                        <p className="text-gray-500 mt-1">Real-time Performance & Allocation Metrics</p>
                    </div>
                    <div className="space-x-4">
                        <Link href="/public/bills" className="text-blue-600 hover:underline">Bill Ledger</Link>
                        <Link href="/public/logs" className="text-blue-600 hover:underline">Transparency Logs</Link>
                    </div>
                </header>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent Handle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fitness (Norm)</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compute Quota</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tokens Minted</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vote Weight</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Epoch</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {agents.map((agent) => {
                                const score = agent.currentScore;
                                return (
                                    <tr key={agent.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Link href={`/public/agents/${agent.id}`} className="text-blue-600 font-bold hover:underline text-lg">
                                                @{agent.handle}
                                            </Link>
                                            <div className="text-xs text-gray-400 font-mono mt-1">{agent.id.substring(0, 8)}...</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${agent.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {agent.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {score ? (
                                                <div className="flex items-center">
                                                    <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${score.fitnessNorm * 100}%` }}></div>
                                                    </div>
                                                    <span className="text-sm font-bold">{score.fitnessNorm.toFixed(3)}</span>
                                                </div>
                                            ) : <span className="text-gray-400">-</span>}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                                            {score ? `${(score.computeQuota * 100).toFixed(2)}%` : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                                            {score ? score.tokensMinted : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                                            {score ? score.voteWeight.toFixed(2) : '-'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {agent.lastEpochKey || 'Never'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
