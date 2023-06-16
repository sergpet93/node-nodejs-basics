import { readFile } from 'node:fs/promises';
import { join } from 'path';

const pathDir = './src/fs/files';

const read = async () => {
    try {
        const content = await readFile(join(pathDir, 'fileToRead.txt'), 'utf-8');
        console.log(content);
    } catch (err) {
        throw new Error('ErrorFS operation failed');
    }
};

await read();