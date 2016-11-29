var express = require('express');

// create our app
var app = express();
const PORT = process.env.PORT /* for Heroku */ || 3000;

/* In case you need to redirect https traffic to http to prevent
 * mixed protocol errors
 */
 
/*
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
*/

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
