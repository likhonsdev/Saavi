import * as fs from 'fs';
import * as path from 'path';

export class FileManager {
  constructor(private workspace: string) {}

  readFile(filePath: string): Promise<string> {
    const fullPath = path.join(this.workspace, filePath);
    return fs.promises.readFile(fullPath, 'utf-8');
  }

  writeFile(filePath: string, content: string): Promise<void> {
    const fullPath = path.join(this.workspace, filePath);
    return fs.promises.writeFile(fullPath, content, 'utf-8');
  }

  async getProjectTree(dir: string = this.workspace, prefix: string = ''): Promise<string> {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    let tree = '';
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
        continue;
      }
      const connector = i === entries.length - 1 ? '└── ' : '├── ';
      tree += `${prefix}${connector}${entry.name}\n`;
      if (entry.isDirectory()) {
        const newPrefix = prefix + (i === entries.length - 1 ? '    ' : '│   ');
        tree += await this.getProjectTree(path.join(dir, entry.name), newPrefix);
      }
    }
    return tree;
  }

  getWorkspace(): string {
    return this.workspace;
  }
}

export const fileManager = new FileManager(process.cwd());
