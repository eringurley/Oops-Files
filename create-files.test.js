const fs = require('fs');
const { getAnimal, createFiles } = require('./create-files');

describe('create files', () => {
  it('can get a random animal species', () => {
    const animal = getAnimal();
    expect(animal).toEqual(expect.any(String));
  });

  it('can write a bunch of files with animal in them', done => {
    createFiles('./fixtures', 100, err => {
      expect(err).toBeFalsy();
      fs.readdir('./fixtures', { encoding: 'utf8' }, (err, files) => {
        expect(err).toBeFalsy();

        expect(files).toHaveLength(100);
        done();
      });
    });
  });
});

