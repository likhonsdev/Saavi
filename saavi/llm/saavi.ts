import { config } from '../saavi.config';
import OpenAI from 'openai';

export class SaaviLLM {
  private llm: OpenAI;

  constructor(private llmConfig: any) {
    if (llmConfig.provider === 'openai') {
      this.llm = new OpenAI({ apiKey: llmConfig.apiKey });
    } else {
      throw new Error(`Unsupported LLM provider: ${llmConfig.provider}`);
    }
  }

  async generate(prompt: string): Promise<string | null> {
    if (this.llm instanceof OpenAI) {
      const response = await this.llm.chat.completions.create({
        model: this.llmConfig.model,
        messages: [{ role: 'user', content: prompt }],
        temperature: this.llmConfig.temperature,
        max_tokens: this.llmConfig.maxTokens,
      });
      return response.choices[0].message.content;
    }
    return null;
  }
}
