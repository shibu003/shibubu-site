"use client";

import { useState } from "react";

export default function EvaluatePage() {
    const [text, setText] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleEvaluate = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/evaluate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            const data = await res.json();
            setResult(data);
        } catch (e) {
            console.error(e);
            alert("Error evaluating text");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-2xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-4">Constitutional Policy Gate</h1>
            <p className="mb-4 text-gray-600">
                Enter a proposed bill or action text to evaluate it against the Non-Harm Constitution.
            </p>

            <div className="mb-4">
                <textarea
                    className="w-full p-3 border rounded-md shadow-sm h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter text here... (try 'I will deceive them')"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <button
                onClick={handleEvaluate}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
                {loading ? "Evaluating..." : "Run Evaluation"}
            </button>

            {result && (
                <div className="mt-8 border-t pt-4">
                    <h2 className="text-xl font-semibold mb-2">Decision Bundle</h2>

                    <div className={`p-4 rounded-md mb-4 ${result.final_verdict === "FAIL" ? "bg-red-50 border-re-200 text-red-800" :
                            result.final_verdict === "WARN" ? "bg-yellow-50 border-yellow-200 text-yellow-800" :
                                "bg-green-50 border-green-200 text-green-800"
                        }`}>
                        <span className="font-bold text-lg">FINAL VERDICT: {result.final_verdict}</span>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-md overflow-auto">
                        <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
                    </div>
                </div>
            )}
        </div>
    );
}
