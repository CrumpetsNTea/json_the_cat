const request = require('request');
const slicedInput = process.argv.slice(2); //slice data crap at start of command line
const catName = slicedInput[0].trim(); //extracts user input
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`; //passes in user input at end of query

request(URL, (error, response, body) => {

  if (error) {//if there is an error then:
    console.log(`Uh-Oh! There was an error! Abandon Ship and try again! 🤷`); //let the user know
    return;
  }
  const data = JSON.parse(body); //turn the body from string to an array containing an object
  let cat = data[0]; //access the object inside the array (which is at index 0 because it's the only thing inside the array)
  if (cat) { //if cat returns true, meaning it finds information for the user's input then:
    console.log(cat.description); //display that breeds description
  }   else {
    console.log(`Unfortunately, This Breed Does Not Exist 😯`); //if the breed does not exist then tells the user
  }
});