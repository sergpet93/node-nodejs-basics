import {Transform, pipeline} from 'node:stream'

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _encoding, callback) {
            callback( null, chunk.toString().trim().split('').reverse().join('') + '\n')
        },
    });
    pipeline(process.stdin, transformStream, process.stdout, (error) => {
        if (error) throw new Error(error);
    });
};

await transform();