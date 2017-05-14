const http = require("http");

const port = process.argv[2];

const server = http.createServer((req, res) => {
    var receivedData = '';
    req.on('data', (chunk) => receivedData += chunk);
    req.on('end', () => res.end(`${receivedData.toUpperCase()}\n`));
});

server.listen(port);
