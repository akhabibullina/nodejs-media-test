var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var path = 'public/audio/rain.mp3';
  // res.header('Content-Type', 'audio/mp3');
  res.sendfile(path, function(err) {
    if (err) {
        console.log('error %s', err);
    } else {
        console.log('transferred %s', path);
    }
});
});

module.exports = router;
