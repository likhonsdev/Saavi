// index.ts
import { executor } from './agent/executor';

async function main() {
  const userRequest = process.argv.slice(2).join(' ');

  if (!userRequest) {
    console.error("Please provide a task. Example: \nnode dist/index.js \"Add a loading spinner to the login button\"");
    process.exit(1);
  }

  console.log(`SAAVI initialized. Task: "${userRequest}"`);
  await executor.run(userRequest);
}

main().catch(error => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});
