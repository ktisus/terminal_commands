const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc,file) => {
            return '${acc} ${file}' ;
        }, '');
        console.log(filesToString);
    })
};

module.exports.touch = () => {
    fs.writeFile ('touchfile.txt', 'This is touch file', (err) => {
        if (err) throw err;
        console.log('File created')
    });
};



module.exports.mkdir = () => {
    fs.mkdir ('./',{recursive: true}, (err) => {
        if (err) throw err;
        console.log('Folder created');
    });
};