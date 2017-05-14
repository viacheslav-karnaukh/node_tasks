const net = require("net");

const port = process.argv[2];
const server = net.createServer((connection) => {
    connection.end(new Date().toISOString().slice(0,-8).replace('T', ' ') + '\n');
});

server.listen(port);
