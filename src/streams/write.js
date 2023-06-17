import * as path from 'node:path';
import {createWriteStream} from 'fs';
import { fileURLToPath } from 'node:url';


const pathDir = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    try {
        const data = createWriteStream(path.join(pathDir, '/files/fileToWrite.txt'), 'utf8');
        process.stdin.on('data', (chunk) => {
            data.write(chunk)
        })
    } catch (error) {
        throw new Error(error);
    }
};

await write();