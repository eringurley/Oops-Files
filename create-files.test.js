const fs = require('fs');
const { getAnimal, createFiles } = require('./create-files');

describe('create files', () => {
  afterEach(done => { 
    fs.readdir('./fixtures', (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      files.forEach(file => {
        fs.unlink(`./fixtures/${file}`, err => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });
  it('can get a random animal species', () => {
    const animal = getAnimal();
    expect(animal).toEqual(expect.any(String));
  });

  it('can write a bunch of files with animal in them', done => {
    createFiles('./fixtures', 100, err => {
      expect(err).toBeFalsy();
      fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(100);
        done();
      });
    });
  });
});

