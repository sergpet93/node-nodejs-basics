import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const pathDir = './src/fs/files';


const list = async () => {
    try {
        const arrayFiles = await readdir(pathDir);
        console.log(arrayFiles.join(', '));
    } catch {
        throw new Error('ErrorFS operation failed');
    }  
};

await list();