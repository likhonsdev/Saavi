import { config } from './saavi.config';
import { Executor } from './agent/executor';

async function main() {
  console.log('Saavi is starting...');
  const executor = new Executor(config);
  // This is a placeholder for where the agent would be started with a task.
  // For example:
  // await executor.start("Fix the login button styling");
}

main();
