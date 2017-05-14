const http = require("http");
const url = require("url");

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const queryData = url.parse(req.url, true).query;
    const date = new Date(queryData.iso);
    let resData;
    if(req.url.startsWith('/api/parsetime')) {
        resData = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    } else if(req.url.startsWith('/api/unixtime')) {
        resData = {
            unixtime: date.getTime()
        };
    } else {
        res.writeHead(404);
        res.end();
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(`${JSON.stringify(resData)}\n`);
});

server.listen(port);
