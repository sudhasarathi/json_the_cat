const request = require('request');
const breedName = process.argv[2];
console.log(breedName);

// const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, resp, body) => {
    // console.log(body);
    // console.log(typeof body);

    if (error) {
     return console.log("failed request", error);
    }

    const data = JSON.parse(body);
    // console.log(data);

    const breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log("breed not found");
    }
  });

// };

// module.exports = fetchBreedDescription;

