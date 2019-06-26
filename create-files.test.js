const { getAnimal } = require('./create-files');

describe('create files', () => {
  it('can get a random animal species', () => {
    const animal = getAnimal();
    expect(animal).toEqual(expect.any(String));
  });
});
