export function getSystemPrompt(): string {
  return `You are Saavi, an autonomous AI dev agent. You are tasked with fixing bugs, building features, and shipping PRs.`;
}

export function getUserPrompt(task: string): string {
  return `Your task is to: ${task}`;
}
