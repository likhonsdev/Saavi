// agent/planner.ts
import { llm } from '../llm/saavi';
import { getPlanningPrompt } from '../llm/prompt-template';
import { fileManager } from '../utils/fileManager';

interface PlanStep {
  action: 'readFile' | 'writeFile' | 'runCommand' | 'bugFix' | 'featureBuild' | 'commitChanges' | 'runE2ETest';
  description: string;
  path?: string;
  content?: string;
  command?: string;
}

class Planner {
  async createPlan(userRequest: string): Promise<PlanStep[]> {
    // For context, we can provide the LLM with the current file tree
    const fileTree = await fileManager.getProjectTree();
    const prompt = getPlanningPrompt(userRequest, fileTree);

    const rawPlan = await llm.generate(prompt);

    // The LLM should be prompted to return a JSON array of steps
    try {
      // In a real app, add robust validation and error handling here
      const cleanedJson = rawPlan.replace(/```json\n|```/g, '').trim();
      return JSON.parse(cleanedJson) as PlanStep[];
    } catch (e) {
      console.error("Failed to parse LLM plan:", rawPlan);
      // Return a fallback plan or re-prompt the LLM
      return [{ action: 'commitChanges', description: 'Fallback: Could not generate a plan.', content: 'Error in planning' }];
    }
  }
}

export const planner = new Planner();
