const request = require('request');

const fetchBreedDescription = (breedName, callback) => { //callback here is equal to (error, desc) in index.js
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let cat = data[0];

    if (error) {//if there is an error then:
      callback(error, null); //if there is an error, then the callback function in index calls error and console.logs it and sets desc to null
      return;
    }
    if (!error) {
      callback(null, cat.description); //sets error to null and logs the cat description
      return;
    }
  });
};

module.exports = { fetchBreedDescription };