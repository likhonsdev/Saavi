import * as fs from 'fs';
import * as path from 'path';

export class FileManager {
  constructor(private workspace: string) {}

  readFile(filePath: string): string {
    const fullPath = path.join(this.workspace, filePath);
    return fs.readFileSync(fullPath, 'utf-8');
  }

  writeFile(filePath: string, content: string) {
    const fullPath = path.join(this.workspace, filePath);
    fs.writeFileSync(fullPath, content, 'utf-8');
  }

  getWorkspace(): string {
    return this.workspace;
  }
}
