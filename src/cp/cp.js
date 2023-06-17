import {fork} from 'node:child_process';
import {fileURLToPath} from 'url';
import * as path from 'node:path';

const pathDir = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (...args) => {
    const child = fork(path.join(pathDir, './files/script.js'), [...args])
};

// Put your arguments in function call to test this functionality
spawnChildProcess( );
