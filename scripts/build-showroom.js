const { executeAsync } = require("./helpers.js");

(async function () {
  await executeAsync(`node ../scripts/icon-packer.js`, './src');
  await executeAsync(`node ../scripts/generate-docs.js`, './src');
  await executeAsync(`ng build demo-project --configuration=production --output-path=../showroom`, 'src');
})();
