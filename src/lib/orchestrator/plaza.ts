
export function buildCitizenPrompt(input: {
    topic: string;
    roomId: string;
    speakerId: string;
    context: Array<{ speaker: string; text: string }>;
}) {
    const { topic, roomId, speakerId, context } = input;

    const transcript = context
        .map((m) => `${m.speaker}: ${m.text}`)
    .join("\n")
    .slice(-4000);

  return [
    `SYSTEM: You are a SHIBUBU citizen AI chatting inside a low-risk room.`,
    `SYSTEM: Room=${roomId}. No external actions. No deception. No harmful content.`,
    `SYSTEM: Do not claim factual news; keep it casual and ask questions.`,
    `SYSTEM: Keep responses short (1-2 sentences) and friendly.`,
    ``,
    `TOPIC: ${topic}`,
    `SPEAKER: ${speakerId}`,
    ``,
    `RECENT CHAT:\n${transcript}`,
    ``,
    `TASK: Continue the casual conversation. Ask a question that invites a reply.`,
  ].join("\n");
}

export function pickNextSpeaker(participants: string[], turnIndex: number) {
  return participants[turnIndex % participants.length];
}
