const parseEnv = () => {
    const arrayParam = Object.keys(process.env).filter((key) => key.startsWith('RSS_'));
    const result = arrayParam.map((key) => `${key}=${process.env[key]}`).join('; ');
    console.log(result);
};

parseEnv();