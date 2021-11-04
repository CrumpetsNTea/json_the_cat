const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via a callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {

    
    
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns error if an invalid or non existent breed is passed in', (done) =>  {
    fetchBreedDescription('Banana', (err, desc) => {

      assert.equal(desc, null);
      const expectedOutput = "404 CAT NOT FOUND";
      assert.equal(expectedOutput, err);
      done();
    });

  });
});