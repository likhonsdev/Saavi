import dotenv from 'dotenv';

dotenv.config();

export const config = {
  github: {
    token: process.env.GITHUB_TOKEN,
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
  },
  llm: {
    provider: process.env.LLM_PROVIDER || 'openai',
    apiKey: process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY || process.env.GEMINI_API_KEY,
    model: process.env.SAAVI_MODEL || 'gpt-4-turbo',
    temperature: parseFloat(process.env.SAAVI_TEMPERATURE || '0.1'),
    maxTokens: parseInt(process.env.SAAVI_MAX_TOKENS || '4000'),
  },
};
