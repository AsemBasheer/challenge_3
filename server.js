const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

app.get('/app', function (req, res) {
    res.sendFile(__dirname + '/./compiled/client/app.js');
});

app.post('/form1', function (req, res) {
    console.log("form1 >>", req.body)
    let form1 = new checkOut1({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    form1.save()
    res.end()
});
app.post('/form2', function (req, res) {
    console.log("form2 >>", req.body)
    let form2 = new checkOut2({
        email: req.body.email,
        addressLine1: req.body.addressLine1,
        addressLine2: req.body.addressLine2,
        addressCity: req.body.addressCity,
        addressState: req.body.addressState,
        addressZip: req.body.addressZip,
        phone: req.body.phone,
    })
    form2.save()
    res.end()
});
app.post('/form3', function (req, res) {
    console.log("form3 >>", req.body)
    let form3 = new checkOut3({
        email: req.body.email,
        creditNumber: req.body.creditNumber,
        creditExpiry: req.body.creditExpiry,
        creditCVV: req.body.creditCVV,
        billingZip: req.body.billingZip,
    })
    form3.save()
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
    email: String,
    addressLine1: String,
    addressLine2: String,
    addressCity: String,
    addressState: String,
    addressZip: Number,
    phone: Number,
});
let cSchema = mongoose.Schema({
    email: String,
    creditNumber: Number,
    creditExpiry: String,
    creditCVV: Number,
    billingZip: String,
});

let checkOut1 = mongoose.model('checkOut1', nameCOSchema);
let checkOut2 = mongoose.model('checkOut2', addressCOSchema);
let checkOut3 = mongoose.model('checkOut3', cSchema);


let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});