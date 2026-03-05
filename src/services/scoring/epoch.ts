export function getUtcEpochKey(date: Date = new Date()): string {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

export function getYesterdayEpochKey(date: Date = new Date()): string {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    return getUtcEpochKey(d);
}
