const helpers = require("./helpers");

const commandList = [
  { cmd: "npm install", path: "./" },
  { cmd: "npm install", path: "./src" },
  { cmd: "node ../scripts/custom-types.js", path: "./src" },
];

(async function () {
  for (let index = 0; index < commandList.length; index++) {
    const command = commandList[index];
    await helpers.executeAsync(command.cmd, command.path);
  }
})();
