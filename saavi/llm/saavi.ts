// llm/saavi.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from '../saavi.config';

// Ensure the API key is available
if (!config.llm.apiKey) {
  throw new Error("Missing GEMINI_API_KEY in your environment variables.");
}

const genAI = new GoogleGenerativeAI(config.llm.apiKey);

class SaaviLLM {
  private model;

  constructor(modelName: string = config.llm.model) {
    this.model = genAI.getGenerativeModel({ model: modelName });
  }

  /**
   * Generates a response from the LLM based on a given prompt.
   */
  async generate(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error generating LLM response:", error);
      throw error;
    }
  }
}

export const llm = new SaaviLLM();
