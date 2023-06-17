import {cpus} from 'os'; 
import {Worker} from 'worker_threads';
import {fileURLToPath} from 'url';
import * as path from 'path';

const pathDir = path.dirname(fileURLToPath(import.meta.url));
const countCPU = cpus().length;

const performCalculations = async () => {
    let Number = 10;
    const workers = [];

    for(let i = 0; i < countCPU; i += 1) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new Worker(path.join(pathDir, 'worker.js'), {workerData: Number});
            worker.on("message", resolve);
            worker.on("error", reject);
        }));
        Number += 1;
    };

    const result = await Promise.allSettled(workers).then((workersResult) =>
    workersResult.map((res) => {
        return res.status === "fulfilled" ? { status: "resolved", data: res.value } : { status: "error", data: null };
    }));
    console.log(result);
};

await performCalculations();