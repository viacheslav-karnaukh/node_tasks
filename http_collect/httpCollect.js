const http = require('http');
const https = require('https');

const httpCollect = (url) => {
    return new Promise((resolve, reject) => {
        (/^https/.test(url) ? https : http).get(url, (res) => {
            let dataCollected = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => dataCollected += chunk);
            res.on('end', () => resolve(dataCollected));
            res.on('error', (e) => reject(e));
        });
    });
};

module.exports = httpCollect;
