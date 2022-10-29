const { executeAsync, makeDir, copyFolder, getArgument } = require('./helpers');
const fs = require('fs');

console.error('WIP');
return 1;

const dependencies = [
  "../../library-{0}/src/dist/ngfds",
  "cypress --save-dev"
];

const solutionPath = 'src';
const projectPath = 'src/projects/demo-project';
const typingsPath = 'src/typings';

const version = getArgument('version');
const name = getArgument('name');
const versionNo = parseInt(
  version.replace(/[A-Za-z\-]+/g, '').split('.')[0],
  10
);
const versionNumber = Number.isNaN(versionNo) ? 99 : versionNo;

(async function () {
  const rootFolder = `./temp/demo-project-${name}`;
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

  // Create application
  await executeAsync(
    `ng generate application --name=demo-project --defaults=true --style=scss`,
    solutionFolder
  );

  // Install dependencies
  for (let index = 0; index < dependencies.length; index++) {
    const dep = dependencies[index]
      .replace('{0}', name);
    await executeAsync(`npm install ${dep}`, solutionFolder);
  }

  // Copy source code & setup project
  const projectFolder = `${solutionFolder}/projects/demo-project`;
  copyFolder(`${projectPath}/src`, `${projectFolder}/src`);

  await executeAsync(
    `ng build --project=demo-project --configuration=production`,
    solutionFolder
  );
})();
