import { FileManager } from './fileManager';
import * as process from 'process';

describe('FileManager', () => {
  it('should return the current workspace path', () => {
    const workspace = process.cwd();
    const fileManager = new FileManager(workspace);
    expect(fileManager.getWorkspace()).toBe(workspace);
  });
});
