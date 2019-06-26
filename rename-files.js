const fs = require('fs');

// callback(err, listOfFiles)
const readDirectory = (directory, callback) => {
  fs.readdir(directory, (err, files) => {
    callback(err, files);
  });
};

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, err => {
    callback(err);
  });
};

const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if(!stats) return callback(err);
    callback(err, stats && stats.mtime).toISOString();
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, callback);
};



module.exports = {
  readDirectory,
  rename,
  getModifiedTime, 
  readFile
};
