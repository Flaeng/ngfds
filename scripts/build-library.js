const {
  getIntArgument,
  executeAsync,
  makeDir,
  copyFolder,
} = require("./helpers");
const fs = require("fs");

const dependencies = ["dkfds"];
const cypressPath = "src/projects/ngfds/cypress";
const sourcePath = "src/projects/ngfds/src";

const nameArg = getIntArgument("version");
if (nameArg.success == false) {
  return 1;
}
const name = nameArg.value;
const version = `v${name}-lts`;

(async function () {
  // Make workspace
  const rootFolder = `temp/library-v${name}`;
  makeDir(rootFolder, true);
  await executeAsync(`npm init -y`, rootFolder);

  // Install angular/cli
  await executeAsync(`npm install @angular/cli@${version}`, rootFolder);

  // Create solution
  await executeAsync(
    `ng new src --skip-git --defaults=true --create-application=false`,
    rootFolder
  );
  const solutionFolder = `${rootFolder}/src`;

  // Create component library
  await executeAsync(`ng g library ngfds`, solutionFolder);

  // Install dependencies
  for (let index = 0; index < dependencies.length; index++) {
    const dep = dependencies[index];
    await executeAsync(`npm install ${dep}`, solutionFolder);
  }

  // Copy source code & Cypress tests
  const projectFolder = `${solutionFolder}/projects/ngfds/src`;
  copyFolder(sourcePath, projectFolder);

  const cypressFolder = `${solutionFolder}/projects/ngfds/cypress`;
  copyFolder(cypressPath, cypressFolder);

  // Run Cypress tests
  await executeAsync(
    `npx cypress run --component -b chrome -C projects/ngfds/cypress.config.ts -s projects/ngfds/cypress/e2e/**/*.cy.ts`,
    solutionFolder
  );
})();
