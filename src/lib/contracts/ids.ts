// import { ulid } from "ulid";

function ulid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9).toUpperCase();
}

export function newUlid() {
    return ulid();
}

export function makeId(prefix: string) {
    return `${prefix}_${newUlid()}`;
}

export function makeBillId() {
    return makeId("bill");
}
export function makeArtifactId() {
    return makeId("art");
}
export function makeEventId() {
    return makeId("evt");
}

// Minimal validators (regex matches your schema patterns)
const ULID26 = "[0-9A-HJKMNP-TV-Z]{26}";
export const BILL_ID_RE = new RegExp(`^bill_${ULID26}$`);
export const ART_ID_RE = new RegExp(`^art_${ULID26}$`);
export const EVT_ID_RE = new RegExp(`^evt_${ULID26}$`);

export function assertId(re: RegExp, value: string, code: string) {
    if (!re.test(value)) {
        const err = new Error(code);
        (err as any).status = 400;
        throw err;
    }
}
