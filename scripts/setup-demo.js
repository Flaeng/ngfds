const { executeAsync, makeDir, copyFolder, getArgument } = require('./helpers');
const glob = require('glob');
const fs = require('fs');
const readline = require('readline');

const dependencies = ['../../library-{0}/src/dist/ngfds', 'dkfds', 'cypress --save-dev'];

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
    // await executeAsync(`npm install jasmine-core@3.8.0`, solutionFolder);
  }
  await executeAsync(`npm install`, solutionFolder);

  // Create application
  await executeAsync(
    `ng generate application --name=demo-project --defaults=true --style=scss`,
    solutionFolder
  );

  // Install dependencies
  for (let index = 0; index < dependencies.length; index++) {
    const dep = dependencies[index].replace('{0}', name);
    await executeAsync(`npm install ${dep}`, solutionFolder);
  }

  // Copy source code & setup project
  const projectFolder = `${solutionFolder}/projects/demo-project`;
  copyFolder(`${projectPath}/src`, `${projectFolder}/src`);

  const tsTasks = glob.sync(`${projectFolder}/src/**/*.ts`).map(async (file) => {
    const hasChanges = await changePathOfNgfds(file);
    if (hasChanges) {
      fs.rmSync(file);
      fs.renameSync(`${file}.tmp`, file);
    } else {
      fs.rmSync(`${file}.tmp`);
    }
  });
  const scssTasks = glob.sync(`${projectFolder}/src/**/*.scss`).map(async (file) => {
    const hasChanges = await changePathOfNgfdsStyles(file);
    if (hasChanges) {
      fs.rmSync(file);
      fs.renameSync(`${file}.tmp`, file);
    } else {
      fs.rmSync(`${file}.tmp`);
    }
  });
  await Promise.all([...tsTasks, ...scssTasks]);

  await executeAsync(
    `ng build --project=demo-project --configuration=production`,
    solutionFolder
  );
})();

async function changePathOfNgfds(file) {
  const readStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  const writer = fs.createWriteStream(`${file}.tmp`);
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let hasChanges = false;
  for await (const line of rl) {
    if (line.indexOf('projects/ngfds/src/public-api') !== -1) {
      hasChanges = true;
      let newLine = line;
      newLine = newLine.replace('projects/ngfds/src/public-api', 'ngfds');
      writer.write(newLine);
    } else {
      writer.write(line);
    }
    writer.write('\n');
  }
  writer.end();
  rl.close();
  readStream.close();
  return hasChanges;
}

async function changePathOfNgfdsStyles(file) {
  const readStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  const writer = fs.createWriteStream(`${file}.tmp`);
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let hasChanges = false;
  for await (const line of rl) {
    if (line.indexOf('../../ngfds/src') !== -1) {
      hasChanges = true;
      let newLine = line;
      newLine = newLine.replace('../../ngfds/src', '../../../node_modules/ngfds/src');
      writer.write(newLine);
    } else {
      writer.write(line);
    }
    writer.write('\n');
  }
  writer.end();
  rl.close();
  readStream.close();
  return hasChanges;
}
