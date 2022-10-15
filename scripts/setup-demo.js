const process = require("process");
const fs = require("fs");
const { spawn } = require("child_process");

console.error('WIP');
return 1;

const versionString = getIntArgument("v");
if (versionString.success === false) {
    return 1;
}

(async function () {
  const rootFolder = `./temp/demo-project-v${version}`;
  makeDir(rootFolder, true);
  await executeAsync(`npm init -y`, rootFolder);
  await executeAsync(
    `npm install --save-dev @angular/cli@${version}`,
    rootFolder
  );
  await executeAsync(
    `ng new demo-project --skip-git --defaults=true --style=scss`,
    rootFolder
  );

    const srcFolder = `${rootFolder}/demo-project`;
    await executeAsync(`npm install dkfds`, srcFolder);
    await executeAsync(`npm install dkfds`, srcFolder);
})();
