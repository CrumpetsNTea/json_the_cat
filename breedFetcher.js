const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(URL, (error, response, body) => {
  const obj = JSON.parse(body);
  console.log(obj);


});