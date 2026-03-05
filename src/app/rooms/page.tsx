
import Link from 'next/link';

// Mock fetch for server component (or use client fetch)
async function getRooms() {
    // In real app, fetch from absolute URL or DB directly
    // For skeleton, returning static mock matching seed to verify UI validity
    // without spinning up full localized fetcher
    return [
        { room_id: "room_1", name: "The Plaza", visibility: "PUBLIC", risk_tier: "LOW", status: "ACTIVE", current_occupancy_count: 5 },
        { room_id: "room_2", name: "Workshop: Software Studio", visibility: "CITIZEN", risk_tier: "HIGH", status: "ACTIVE", current_occupancy_count: 2 },
    ];
}

export default async function RoomsPage() {
    const rooms = await getRooms();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Room Registry</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map((room) => (
                    <div key={room.room_id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold">{room.name}</h2>
                            <span className={`px-2 py-1 text-xs rounded ${room.risk_tier === 'HIGH' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {room.risk_tier} RISK
                            </span>
                        </div>
                        <div className="mb-4 space-y-2 text-sm text-gray-600">
                            <p>Visibility: <span className="font-medium">{room.visibility}</span></p>
                            <p>Status: <span className="font-medium">{room.status}</span></p>
                            <p>Occupancy: <span className="font-medium">{room.current_occupancy_count}</span></p>
                        </div>
                        <Link
                            href={`/rooms/${room.room_id}`}
                            className="block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Enter Room
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
