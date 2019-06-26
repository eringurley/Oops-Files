const animals = [
  'dog',
  'cat',
  'zebra',
  'sloth',
  'giraffe',
  'koala',
  'horse',
];

const getAnimal = () => {
  const index = Math.floor(Math.random() * animals.length);
  return animals[index];
};

module.exports = { getAnimal };
