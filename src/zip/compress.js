import {pipeline} from 'node:stream';
import * as path from 'node:path';
import * as fs from 'node:fs';
import {fileURLToPath} from 'url';
import {createGzip} from 'node:zlib';

const pathDir = path.dirname(fileURLToPath(import.meta.url));


const compress = async () => {
    const fileInput = fs.createReadStream(path.join(pathDir, '/files/fileToCompress.txt'));
    const zlib = createGzip();
    const fileZlib = fs.createWriteStream(path.join(pathDir, '/files/archive.gz'));

    pipeline(fileInput, zlib, fileZlib, (error) => {
        if (error) throw new Error(error);
    })
};

await compress();