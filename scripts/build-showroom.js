const { executeAsync } = require('./helpers.js');
const process = require('process');

(async function () {
  await executeAsync(`node ../scripts/icon-packer.js`, './src');
  await executeAsync(`node ../scripts/generate-docs.js`, './src');
  const args = process.argv.slice(2).join(' ');
  console.log(
    `ng build demo-project --configuration=production --output-path=../showroom ${args}`
  );
  await executeAsync(
    `ng build demo-project --configuration=production --output-path=../showroom ${args}`,
    'src'
  );
})();
