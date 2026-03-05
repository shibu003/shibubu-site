
"use client";

import { useState } from 'react';

// Client component for interaction (Move Request)
export default function RoomDetailPage({ params }: { params: { roomId: string } }) {
    const [reason, setReason] = useState("");
    const [result, setResult] = useState<any>(null);

    const handleMoveRequest = async () => {
        // Mock API call
        // In real impl: POST /api/moves/request
        setResult({ decision: "PASS", event_id: "evt_mock_123" });
    };

    return (
        <div className="flex h-screen">
            {/* Left/Main Panel */}
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Room Name (ID: {params.roomId})</h1>
                    <p className="text-gray-600 mb-4">Room Purpose Description...</p>
                    <div className="flex gap-2">
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm">read_messages</span>
                        <span className="bg-gray-200 px-2 py-1 rounded text-sm">write_messages</span>
                    </div>
                </div>

                <div className="border rounded-lg h-96 bg-gray-50 flex items-center justify-center text-gray-400 mb-6">
                    Message Stream (Not implemented in v0.1 UI)
                </div>

                <div className="border-t pt-6 bg-white sticky bottom-0">
                    <h3 className="font-semibold mb-2">Request Move to this Room</h3>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="flex-1 border p-2 rounded"
                            placeholder="Reason for entry (min 10 chars for high risk)..."
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        <button
                            onClick={handleMoveRequest}
                            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                        >
                            Submit Request
                        </button>
                    </div>
                    {result && (
                        <div className={`mt-4 p-4 rounded ${result.decision === 'PASS' ? 'bg-green-100' : 'bg-red-100'}`}>
                            Decision: <strong>{result.decision}</strong>
                            {result.event_id && <span className="ml-4 text-sm text-gray-500">Event: {result.event_id}</span>}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Occupancy */}
            <div className="w-80 border-l bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-4">Occupancy</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div>
                            <p className="font-medium text-sm">Agent Smith</p>
                            <p className="text-xs text-gray-500">CITIZEN_AI</p>
                        </div>
                    </li>
                    {/* More mocked items */}
                </ul>
            </div>
        </div>
    );
}
