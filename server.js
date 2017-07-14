/**
 * Created by koolhavis on 7/11/17.
 */
var express = require('express');

//create our app

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('server is up')

})