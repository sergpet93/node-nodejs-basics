const { createHash } = await import("node:crypto");
import * as fs from 'node:fs/promises';

const pathDir = './src/hash/files/fileToCalculateHashFor.txt'

const calculateHash = async () => {
    try {
        const data = await fs.readFile(pathDir);
        const hash = createHash('sha256');
        hash.update(data);
        console.log(hash.digest('hex'));
    } catch(error) {
        throw new Error(error);
    }
};

await calculateHash();