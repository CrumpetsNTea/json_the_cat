const request = require('request');

const fetchBreedDescription = (breedName, callback) => { //callback here is equal to (error, desc) in index.js
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {//if there is an error then:
      callback(error, null); //if there is an error, then the callback function in index calls error and console.logs it and sets desc to null
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) { //if the passed in cat name is invalid
      callback('404 CAT NOT FOUND', null);
      return;
    }
    let cat = data[0];
    callback(null, cat.description); //sets error to null and logs the cat description
  });
};

module.exports = { fetchBreedDescription };