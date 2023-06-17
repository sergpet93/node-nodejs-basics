import * as fs from 'node:fs';

const transform = async () => {
    try{
        process.stdout.on('data', (chunk) => {
            process.stdin.on()
        })
    } catch (error) {
        throw new Error(error)
    }
};

await transform();