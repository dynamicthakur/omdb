var express = require('express');
var router = express.Router();

const axios = require('axios')

const apiKey = '70bdb272';




/* GET users listing. */
// req -> request (input)
// res -> response (output)
// next -> middleware part ()
router.get('/search', function(req, res, next) {
// Query parameters
  const search = req.query.title;
  const url = 'http://www.omdbapi.com/?apiKey={&apikey}&s=${search}';
  console.log('trying to get data from' + url)

  axios.get(url)
     .then(function (response) {
    // handle success
      console.log(response.data);
      res.send(response.data);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.send(error)
    
  })
  

  
});


router.get('/result/:imdbid', function(req, res, next) {
// Route parameters
    const imdbid = req.params.imdbid;
    const url = 'http://www.omdbapi.com/?apikey={58be411b}&t=${imdbid}';

    axios.get(url)
        .then(function (response) {
    // handle success
        console.log(response.data);
        res.send(response.data);
    
  })
  .catch(function (error) {
    // handle error
      console.log(error);
      res.send(error)
    
  })
    
});

module.exports = router;
