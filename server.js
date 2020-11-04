const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

app.get('/app', function (req, res) {
    res.sendFile(__dirname + '/./compiled/client/app.js');
});

app.post('/', function (req, res) {
    console.log(req.body)
    res.end()
});


const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://AsemB:AsemB@cluster0.auxil.mongodb.net/checkOutDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log('connected to MongoDB') })
    .catch((err) => { console.log(err) });



let checkOutSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    addressLine1: String,
    addressLine2: String,
    addressCity: String,
    addressState: String,
    addressZip: Number,
    phone: Number,
    creditNumber: Number,
    creditExpiry: String,
    creditCVV: Number,
    billingZip: String,
});

let chechOut = mongoose.model('Repo', checkOutSchema);


let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});