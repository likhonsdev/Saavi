// tasks/bugFix.ts
import { llm } from '../llm/saavi';
import { getBugFixPrompt } from '../llm/prompt-template';
import { fileManager } from '../utils/fileManager';

class BugFixer {
  async run(filePath: string, bugDescription: string): Promise<void> {
    if (!filePath || !bugDescription) {
      console.error("Bug fixer requires a file path and a description.");
      return;
    }
    console.log(`Attempting to fix bug in ${filePath}...`);

    const originalCode = await fileManager.readFile(filePath);
    const prompt = getBugFixPrompt(originalCode, bugDescription);

    const fixedCode = await llm.generate(prompt);

    // The LLM should be prompted to return only the code block
    const cleanedCode = this.extractCode(fixedCode);

    await fileManager.writeFile(filePath, cleanedCode);
    console.log(`Successfully applied fix to ${filePath}.`);
  }

  private extractCode(rawResponse: string): string {
    // Simple regex to pull code out of markdown ```code``` blocks
    const match = rawResponse.match(/```(?:\w+\n)?([\s\S]+)```/);
    return match ? match[1].trim() : rawResponse.trim();
  }
}

export const bugFixer = new BugFixer();
