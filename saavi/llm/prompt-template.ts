export function getPlanningPrompt(userRequest: string, fileTree: string): string {
  return `
You are an expert AI software engineer. Your goal is to create a robust, step-by-step plan to address a user's request.
The user wants to: "${userRequest}"

To help you, here is the current project file structure:
${fileTree}

Based on this, please generate a plan as a JSON array of objects. Each object in the array represents a single step and should have the following format:
{
  "action": "ACTION_NAME",
  "description": "A clear, concise description of what this step does.",
  "path": "/path/to/file.ts", // Optional: The file path for file-related actions
  "content": "... a commit message ...", // Optional: Content for actions like 'commitChanges'
  "command": "npm run test" // Optional: The command for 'runCommand'
}

Possible actions are: 'readFile', 'writeFile', 'runCommand', 'bugFix', 'featureBuild', 'commitChanges', 'runE2ETest'.

Provide only the raw JSON array in your response. Do not include any other text or markdown formatting.
`;
}

export function getBugFixPrompt(originalCode: string, bugDescription: string): string {
  return `
You are an expert AI programmer specializing in fixing bugs.
A user has reported the following bug: "${bugDescription}"

Here is the code from the file that contains the bug:
\`\`\`
${originalCode}
\`\`\`

Your task is to fix the bug and provide only the complete, corrected code block.
Do not add any explanations, comments, or markdown formatting around the code. Just return the raw, fixed code.
`;
}
