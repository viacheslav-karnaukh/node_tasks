const fs = require('fs');
const path = require('path');

const filterFiles = (filePath, fileExt, cb) => {
    fs.readdir(filePath, (err, fileList) => {
        if (err) {
            cb(err);
        } else {
            cb(null, fileList.filter((file) => path.extname(file).slice(1) === fileExt));
        }
    });
};

module.exports = filterFiles;
