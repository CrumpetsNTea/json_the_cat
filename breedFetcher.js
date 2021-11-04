const request = require('request');
const slicedInput = process.argv.slice(2);
const catName = slicedInput[0].trim();
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  let cat = data[0]; //access the object inside the array
  console.log(cat.description); //once we have accessed the object we can log it's contents
});