const {
  getIntArgument,
  executeAsync,
  makeDir,
  copyFolder,
} = require("./helpers");
const fs = require("fs");

const dependencies = ["dkfds", "cypress --save-dev"];
const solutionPath = "src";
const projectPath = "src/projects/ngfds";
const typingsPath = "src/typings";

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
  await executeAsync(`ng generate library ngfds`, solutionFolder);

  // Install dependencies
  for (let index = 0; index < dependencies.length; index++) {
    const dep = dependencies[index];
    await executeAsync(`npm install ${dep}`, solutionFolder);
  }
  makeDir(`${solutionFolder}/cypress`, false);
  copyFolder(
    `${solutionPath}/cypress/support`,
    `${solutionFolder}/cypress/support`
  );

  // Copy source code & setup project
  const projectFolder = `${solutionFolder}/projects/ngfds`;
  copyFolder(`${projectPath}/src`, `${projectFolder}/src`);
  await executeAsync(`npm install dkfds`, projectFolder);
  fs.copyFileSync(
    `${projectPath}/cypress.config.ts`,
    `${projectFolder}/cypress.config.ts`
  );

  copyFolder(`${projectPath}/cypress`, `${projectFolder}/cypress`);

  // Copy typings files
  copyFolder(typingsPath, `${solutionFolder}/typings`);
  await executeAsync(`node ../../../scripts/custom-types.js`, solutionFolder);

    // Run preprocessor
  await executeAsync(
    `node scripts/ts-preprocessor.js --path temp/library-v${name}/src/projects/ngfds/src/lib --ng-version=${name}`,
    ``
  );

  // TODO: Create demo-project and copy source code
  // TODO: Add cypress to demo-project
  // TODO: Run cypress

  await executeAsync(
    `ng build --project=ngfds --configuration=production`,
    solutionFolder
  );
})();
