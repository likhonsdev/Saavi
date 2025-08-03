import { config } from '../saavi.config';
import { Executor } from '../agent/executor';

async function main() {
  console.log('Saavi is starting in development mode...');
  const executor = new Executor(config);
  // This is a placeholder for where the agent would be started with a task for local testing.
  // For example:
  // await executor.start("Fix the login button styling");
}

main();
