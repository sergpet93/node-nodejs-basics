const parseArgs = () => {
   const arrayArg = process.argv.slice(2);
   const arrayRes = [];

   for (let i = 0; i < arrayArg.length; i += 2) {
    arrayRes.push(`${arrayArg[i].slice(2)} is ${arrayArg[i + 1]}`);
   }
   console.log(arrayRes.join(', '))
};

parseArgs();