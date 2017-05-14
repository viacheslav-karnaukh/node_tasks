const httpCollect = require('./httpCollect');
const url = process.argv[2];

httpCollect(url)
    .then((data) => console.log(data.length, data))
    .catch((e) => console.error(e));
