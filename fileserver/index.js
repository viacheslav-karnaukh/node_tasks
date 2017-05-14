const http = require("http");
const fs = require("fs");

const [port, filePath] = process.argv.slice(2);

const server = http.createServer((req, res) => {
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port);