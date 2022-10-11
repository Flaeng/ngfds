const fs = require("@supercharge/fs");

const folderpath = "projects/ngfds/src/lib/icon/";
const listfile = "icon-base/icon-base.component.html";
const sourcefile = "icon.component.ts.template";
const destinationfile = "icon.component.ts";

(async function doStuff() {
  const list = await fs.content(`${folderpath}${listfile}`);

  const iconNames = list
    .split("\n")
    .map((x) => x.trim())
    .filter((x) => x.startsWith("<symbol"))
    .map((x) => x.substring(12))
    .map((x) => x.substring(0, x.indexOf('"')))
    .map((x) => `    | '${x}'`);

  const content = await fs.content(`${folderpath}${sourcefile}`);

  const newContent = content.replace("/*OPTIONS*/", iconNames.join("\n"));

  fs.writeFile(`${folderpath}${destinationfile}`, newContent);
})();
