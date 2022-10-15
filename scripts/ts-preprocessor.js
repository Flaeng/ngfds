const { getArgument, getIntArgument } = require("./helpers");
const glob = require("glob");
const fs = require("fs");
const readline = require("readline");

const path = getArgument("path");
if (!path) {
  console.error("Missing --path argument");
  return 1;
}

const ngVersionResult = getIntArgument("ng-version");
if (ngVersionResult.success === false) {
  console.error("Missing or invalid --ng-version argument");
  return 1;
}
const ngVersion = ngVersionResult.value;

(function () {
  glob(`${path}/**/*.ts`, async (err, matches) => {
    const tasks = [];
    for (const file of matches) {
      const task = applyCompilerConditions(file);
      tasks.push(task);
    }
    await Promise.all(tasks);
  });
})();

async function applyCompilerConditions(file) {
  const readStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  const writer = fs.createWriteStream(`${file}.tmp`);
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let hasChanges = false;
  let hasBeenTrueWithinCompilerFlag = false;
  let isInCompilerFlag = false;
  let isConditionTrue = false;
  for await (const line of rl) {
    const trimmedLine = line.trim();

    if (trimmedLine.toUpperCase().startsWith("// #IF")) {
      isInCompilerFlag = hasChanges = true;
      isConditionTrue = validateCondition(trimmedLine.substring(6));
      if (isConditionTrue) hasBeenTrueWithinCompilerFlag = true;

    } else if (trimmedLine.toUpperCase().startsWith("// #ELIF")) {
      isConditionTrue = validateCondition(trimmedLine.substring(8)) && !hasBeenTrueWithinCompilerFlag;
      if (isConditionTrue)
        hasBeenTrueWithinCompilerFlag = true;

    } else if (trimmedLine.toUpperCase().startsWith("// #ELSE")) {
      isConditionTrue = hasBeenTrueWithinCompilerFlag === false;

    } else if (trimmedLine.toUpperCase().startsWith("// #ENDIF")) {
      isInCompilerFlag = false;
      hasBeenTrueWithinCompilerFlag = false;

    } else {
      if (isInCompilerFlag === false) {
        writer.write(`${line}\n`);
      } else if (isConditionTrue === true) {
        writer.write(`${line.replace('// ', '')}\n`);
      }
    }
  }
  writer.end();
  if (hasChanges) {
    fs.rmSync(file);
    fs.renameSync(`${file}.tmp`, file);
  } else {
    fs.rmSync(`${file}.tmp`);
  }
}

function validateCondition(str) {
  const result = eval(`const angular = ${ngVersion}; ${str}`);
  if (typeof result === "boolean") return result;
  throw `Invalid return from condition: ${str}`;
}
