import axios from 'axios';

export class GitHubClient {
  private apiUrl = 'https://api.github.com';
  private headers: { [key: string]: string };

  constructor(private config: { token: string; owner: string; repo: string }) {
    this.headers = {
      'Authorization': `token ${this.config.token}`,
      'Accept': 'application/vnd.github.v3+json',
    };
  }

  async createPullRequest(branchName: string, title: string, description: string): Promise<any> {
    const url = `${this.apiUrl}/repos/${this.config.owner}/${this.config.repo}/pulls`;
    const data = {
      title,
      body: description,
      head: branchName,
      base: 'main', // Or your default branch
    };
    const response = await axios.post(url, data, { headers: this.headers });
    return response.data;
  }

  // Add other GitHub API methods as needed...
}
