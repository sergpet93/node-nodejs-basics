import {pipeline} from 'node:stream';
import * as path from 'node:path';
import * as fs from 'node:fs';
import {fileURLToPath} from 'url';
import {createGunzip} from 'node:zlib';

const pathDir = path.dirname(fileURLToPath(import.meta.url));


const decompress = async () => {
    const fileZlib = fs.createReadStream(path.join(pathDir, '/files/archive.gz'));
    const zlib = createGunzip();
    const fileInput = fs.createWriteStream(path.join(pathDir, '/files/fileToCompress.txt'));

    pipeline(fileZlib, zlib, fileInput, (error) => {
        if (error) throw new Error(error);
    })
};

await decompress();