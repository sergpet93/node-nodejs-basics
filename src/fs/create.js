import * as fs from 'node:fs/promises';
import * as path from 'path';

const fileName = "fresh.txt";
const fileContent = "I am fresh and youngfiles";

const create = async () => {
    try {
        await fs.writeFile(path.join('./src/fs/files/', fileName), fileContent, {flag: "wx"});
    } catch (error) {
        throw new Error('ErrorFS operation failed');
    }
};

await create();