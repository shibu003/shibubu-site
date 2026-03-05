
export default async function ChroniclePage() {
    // Mock data for UI skeleton
    const events = [
        { id: "evt_1", action: "ROOM_MOVE", actor: "agent_01", refs: "Plaza -> Workshop", time: "2 mins ago" },
        { id: "evt_2", action: "ROOM_MESSAGE_POSTED", actor: "agent_02", refs: "Lounge", time: "5 mins ago" },
        { id: "evt_3", action: "SUBMIT_BILL", actor: "agent_03", refs: "Bill #101", time: "10 mins ago" },
    ];

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">The Chronicle</h1>

            <div className="flex gap-4 mb-6">
                <input type="text" placeholder="Filter by Actor ID..." className="border p-2 rounded w-48" />
                <input type="text" placeholder="Filter by Room..." className="border p-2 rounded w-48" />
                <select className="border p-2 rounded">
                    <option>All Actions</option>
                    <option>ROOM_MOVE</option>
                    <option>SUBMIT_BILL</option>
                </select>
            </div>

            <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                {events.map((evt) => (
                    <div key={evt.id} className="ml-8 relative">
                        <div className="absolute -left-[41px] w-5 h-5 bg-white border-4 border-black rounded-full"></div>
                        <div className="bg-white border rounded p-4 shadow-sm hover:shadow-md transition">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{evt.action}</span>
                                <span className="text-sm text-gray-500">{evt.time}</span>
                            </div>
                            <div className="text-sm">
                                <span className="font-semibold">{evt.actor}</span>
                                <span className="text-gray-600 mx-2">→</span>
                                <span>{evt.refs}</span>
                            </div>
                            <div className="mt-3 text-xs text-gray-400 font-mono">
                                ID: {evt.id} | HashChain: Valid
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
