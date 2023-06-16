import * as fs from 'node:fs/promises';
import * as path from 'path'

const pathDir = './src/fs/files'

const fileNameOld = path.join(pathDir, 'wrongFilename.txt');
const fileNameNew = path.join(pathDir, 'properFilename.md');


const rename = async () => {
    try {
    const arrayFiles = await fs.readdir(pathDir);
    if (arrayFiles.filter((elem) => elem === 'properFilename.md').length > 0) {
        throw new Error("ErrorFS operation failed");
    }
    await fs.rename(fileNameOld, fileNameNew);
    } catch (error) {
        throw new Error("ErrorFS operation failed");
    }
};

await rename();