// Requiring all my dependencies
var express = require('express');
var bodyParser = require('body-parser');

//require mangoose and create a database that takes strings
var app = express();


//app using all my dependencies
app.use('/', express.static('public/web'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//getting my routes

app.get('/',function(req,res){
  res.redirect('/');
})


//connecting to my server, running my sever ports 5001 or any available port
const port = process.env.PORT || 5000;

app.listen(port, function(err) {
    if (err) {
        return err;
    } else {
        console.log('server running on port 5000');
    }
});
