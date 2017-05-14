const filterFiles = require('./filterFiles');
const [filePath, fileExt] = process.argv.slice(2);


filterFiles(filePath, fileExt, (err, files) => {
    if(err) {
        console.error(err);
    } else {
        files.forEach((file) => console.log(file));
    }
});
