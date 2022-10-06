const fs = require('fs');

const sourceFolder = './typings';
const typingFileList = fs.readdirSync(sourceFolder);

for (let index = 0; index < typingFileList.length; index++) {
    const file = typingFileList[index];
    const namespace = file
        .split('/').splice(-1)[0] // Get last element
        .split('.').splice(0)[0]; // Get first element
    
    const sourcePath = `${sourceFolder}/${file}`;
    const destinationFolder = `./node_modules/@types/${namespace}`;
    const destinationPath = `${destinationFolder}/index.d.ts`;
    console.log(`Copying ${sourcePath} to ${destinationPath}`);
    fs.mkdirSync(destinationFolder);
    fs.copyFileSync(sourcePath, destinationPath);
}
