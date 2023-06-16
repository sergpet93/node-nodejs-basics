import * as fs from 'node:fs/promises';
import * as path from 'path';

const pathDir = './src/fs/'
const pathFiles = path.join(pathDir, 'files');
const pathCopyFiles = path.join(pathDir, 'files-copy');
const options = {errorOnExist: true, force: false, recursive: true};

const copy = async () => {
    try {
        await fs.cp(pathFiles, pathCopyFiles, options);
    } catch (err) {
        throw new Error('ErrorFS operation failed');
    } 
};

await copy();
