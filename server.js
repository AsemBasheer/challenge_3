const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

app.get('/app', function (req, res) {
    res.sendFile(__dirname + '/./compiled/client/app.js');
});

app.post('/form1', function (req, res) {
    console.log("form1 >>",req.body)
    res.end()
});
app.post('/form2', function (req, res) {
    console.log("form2 >>",req.body)
    res.end()
});
app.post('/form3', function (req, res) {
    console.log("form3 >>",req.body)
    res.end()
});


const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://AsemB:AsemB@cluster0.auxil.mongodb.net/checkOutDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log('connected to MongoDB') })
    .catch((err) => { console.log(err) });



let nameCOSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
let addressCOSchema = mongoose.Schema({
    addressLine1: String,
    addressLine2: String,
    addressCity: String,
    addressState: String,
    addressZip: Number,
    phone: Number,
});
let cSchema = mongoose.Schema({
    creditNumber: Number,
    creditExpiry: String,
    creditCVV: Number,
    billingZip: String,
});

let chechOut1 = mongoose.model('chechOut1', nameCOSchema);
let chechOut2 = mongoose.model('chechOut2', addressCOSchema);
let chechOut3 = mongoose.model('chechOut3', cSchema);


let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});