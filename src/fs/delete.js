import {unlink} from "node:fs";
import { join } from "node:path";

const pathDir = './src/fs/files';
const fileName = join(pathDir, 'fileToRemove.txt');

const remove = async () => {
    unlink(fileName, (err) => {
        if (err) throw new Error('ErrorFS operation failed');
    })
};

await remove();