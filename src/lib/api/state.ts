export function assertState(current: string, expected: string, nextAction: string) {
    if (current !== expected) {
        const err = new Error("INVALID_STATE_TRANSITION");
        (err as any).status = 409;
        (err as any).details = { current, expected, nextAction };
        throw err;
    }
}
