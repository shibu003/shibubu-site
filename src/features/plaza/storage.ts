
import fs from "fs";
import path from "path";
import { PlazaMessage, ChronicleEvent, ActorPresence, MoveRequest, RoomDef, ACTOR_IDS } from "./types";

const DATA_DIR = path.join(process.cwd(), ".plaza_data");

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");
const PRESENCE_FILE = path.join(DATA_DIR, "presence.json");
const MOVES_FILE = path.join(DATA_DIR, "moves.json");

function loadJson<T>(file: string): T[] {
    if (!fs.existsSync(file)) return [];
    try {
        const data = fs.readFileSync(file, "utf-8");
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading ${file}`, e);
        return [];
    }
}

function saveJson<T>(file: string, data: T[]) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Seed Rooms
const DEFAULT_ROOMS: RoomDef[] = [
    { room_id: "plaza_main", name: "The Plaza", risk_class: "LOW", capabilities: ["read", "write"] },
    { room_id: "lounge", name: "Lounge", risk_class: "LOW", capabilities: ["read", "write"] },
    { room_id: "legislative_hall", name: "Legislative Hall", risk_class: "HIGH", capabilities: ["vote"] },
    { room_id: "sandbox", name: "Sandbox Terminal", risk_class: "HIGH", capabilities: ["execute"] },
    { room_id: "chronicle", name: "The Chronicle", risk_class: "HIGH", capabilities: ["read_audit"] }
];

// Seed Presence
function ensurePresence() {
    if (!fs.existsSync(PRESENCE_FILE)) {
        const initialPresence: ActorPresence[] = [
            { actor_id: ACTOR_IDS.PROPOSER, current_room_id: "plaza_main", status: "ACTIVE" },
            { actor_id: ACTOR_IDS.DEBATE, current_room_id: "plaza_main", status: "ACTIVE" },
            { actor_id: ACTOR_IDS.AUDITOR, current_room_id: "plaza_main", status: "ACTIVE" }
        ];
        saveJson(PRESENCE_FILE, initialPresence);
    }
}

ensurePresence();

export const plazaStore = {
    getMessages: (): PlazaMessage[] => loadJson<PlazaMessage>(MESSAGES_FILE),
    addMessage: (msg: PlazaMessage) => {
        const list = loadJson<PlazaMessage>(MESSAGES_FILE);
        list.push(msg);
        saveJson(MESSAGES_FILE, list);
    },

    getEvents: (): ChronicleEvent[] => loadJson<ChronicleEvent>(EVENTS_FILE),
    addEvent: (evt: ChronicleEvent) => {
        const list = loadJson<ChronicleEvent>(EVENTS_FILE);
        list.push(evt);
        saveJson(EVENTS_FILE, list);
    },

    getLatestEventHash: (): string => {
        const list = loadJson<ChronicleEvent>(EVENTS_FILE);
        if (list.length === 0) return "sha256:" + "0".repeat(64); // Genesis hash
        return list[list.length - 1].event_hash;
    },

    // Presence
    getPresence: (): ActorPresence[] => loadJson<ActorPresence>(PRESENCE_FILE),
    updatePresence: (actorId: string, updates: Partial<ActorPresence>) => {
        const list = loadJson<ActorPresence>(PRESENCE_FILE);
        const idx = list.findIndex(p => p.actor_id === actorId);
        if (idx >= 0) {
            list[idx] = { ...list[idx], ...updates };
        } else {
            // fallback if new actor
            list.push({ actor_id: actorId, current_room_id: "plaza_main", status: "ACTIVE", ...updates } as ActorPresence);
        }
        saveJson(PRESENCE_FILE, list);
    },
    getActorPresence: (actorId: string): ActorPresence | undefined => {
        const list = loadJson<ActorPresence>(PRESENCE_FILE);
        return list.find(p => p.actor_id === actorId);
    },

    // Moves
    getMoves: (): MoveRequest[] => loadJson<MoveRequest>(MOVES_FILE),
    addMove: (move: MoveRequest) => {
        const list = loadJson<MoveRequest>(MOVES_FILE);
        list.push(move);
        saveJson(MOVES_FILE, list);
    },
    updateMove: (moveId: string, updates: Partial<MoveRequest>) => {
        const list = loadJson<MoveRequest>(MOVES_FILE);
        const idx = list.findIndex(m => m.move_id === moveId);
        if (idx >= 0) {
            list[idx] = { ...list[idx], ...updates };
            saveJson(MOVES_FILE, list);
        }
    },
    getMove: (moveId: string): MoveRequest | undefined => {
        const list = loadJson<MoveRequest>(MOVES_FILE);
        return list.find(m => m.move_id === moveId);
    },

    // Rooms
    getRooms: (): RoomDef[] => {
        return DEFAULT_ROOMS;
    },
    getRoom: (roomId: string): RoomDef | undefined => {
        return DEFAULT_ROOMS.find(r => r.room_id === roomId);
    }
};
