const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
// app.use(express.static('public'))
app.use(express.json())

app.get('/app', function(req, res){
    res.sendFile(__dirname+'/./compiled/client/app.js');
});

app.post('/', function (req, res) {
    console.log(req.body)
    res.end()
});

let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});