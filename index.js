const { renameEverything } = require('./rename-files');

const directory = process.argv[2];

renameEverything(directory, err => {
  if(err) return console.error(err);

  console.log('Your files have been renamed!!');
});


