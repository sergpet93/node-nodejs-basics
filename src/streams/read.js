import { createReadStream } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const readfile = createReadStream(path.join(pathDir, '/files/fileToRead.txt'), 'utf-8');
        readfile.on('data', chunk => process.stdout.write(chunk + '\n'));
    } catch (err) {
        throw new Error(err);
    }
};

await read();