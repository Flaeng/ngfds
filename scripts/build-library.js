const {
  getIntArgument,
  executeAsync,
  makeDir,
  copyFolder,
  getArgument,
} = require("./helpers");
const fs = require("fs");

const dependencies = ["dkfds", "cypress --save-dev"];
const solutionPath = "src";
const projectPath = "src/projects/ngfds";
const typingsPath = "src/typings";

const version = getArgument("version");
const name = version;
const versionNo = parseInt(version.replace(/[A-Za-z\-]+/g, "").split(".")[0]);
const versionNumber = Number.isNaN(versionNo) ? 99 : versionNo;

(async function () {
  // Make workspace
  const rootFolder = `temp/library-${name}`;
  makeDir(rootFolder, true);
  await executeAsync(`npm init -y`, rootFolder);

  // Install angular/cli
  await executeAsync(`npm install @angular/cli@${version}`, rootFolder);

  // Create solution
  await executeAsync(
    `ng new src --skip-git --skip-install --defaults=true --create-application=false`,
    rootFolder
  );
  const solutionFolder = `${rootFolder}/src`;
  if (versionNo <= 12) {
    await executeAsync(`npm install jasmine-core@3.8.0`, solutionFolder);
  }
  await executeAsync(`npm install`, solutionFolder);

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

  fs.copyFileSync(
    `${projectPath}/cypress.config.ts`,
    `${projectFolder}/cypress.config.ts`
  );
  fs.copyFileSync(
    `${projectPath}/package.json`,
    `${projectFolder}/package.json`
  );
  fs.copyFileSync(
    `${projectPath}/tsconfig.lib.json`,
    `${projectFolder}/tsconfig.lib.json`
  );
  fs.copyFileSync(
    `${projectPath}/tsconfig.lib.prod.json`,
    `${projectFolder}/tsconfig.lib.prod.json`
  );

  copyFolder(`${projectPath}/cypress`, `${projectFolder}/cypress`);

  // Copy typings files
  copyFolder(typingsPath, `${solutionFolder}/typings`);
  await executeAsync(`node ../../../scripts/custom-types.js`, solutionFolder);

  // Run preprocessor
  await executeAsync(
    `node scripts/ts-preprocessor.js --path ${projectFolder}/src/lib --ng-version=${versionNumber}`,
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
