const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
    return;
  }
  console.log(desc);

});