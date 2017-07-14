/**
 * Created by koolhavis on 7/11/17.
 */
let express = require('express');

//create our app

let app = express();

const PORT = pocess.env.PORT || 3000;



//middleware
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http'){
        next();
    }else {
        res.redirect('http://' + req.hostname + req.url);
    }
});


app.use(express.static('public'));


app.listen(PORT, function () {
    console.log('server is up' + PORT);

});