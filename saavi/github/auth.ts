import { config } from '../saavi.config';

export function getGitHubToken(): string {
  if (!config.github.token) {
    throw new Error('GitHub token is not configured. Please set the GITHUB_TOKEN environment variable.');
  }
  return config.github.token;
}
