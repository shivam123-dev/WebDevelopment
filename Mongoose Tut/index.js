// getting started
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shivamKart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log("Connected");
// });

// Creating a new schema
var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name;
    console.log(greeting);
}


// locking a schema means converting schema into a model
var Kitten = mongoose.model('shivamKitty', kittySchema);
// creating object for schema
var shivamKitty = new Kitten({name: "shivamKitty"});
var shivamKitty2 = new Kitten({name: "shivamKitty2"});
// console.log(shivamKitty);
// console.log(shivamKitty.name);
// shivamKitty.speak();

// for saving in mongo db
shivamKitty.save(function (err, shivamKitty) {
    if (err) return console.error(err);
        // shivamKitty.speak();
});
shivamKitty2.save(function (err, k) {
    if (err) return console.error(err);
        // k.speak();
});

// for find operation
Kitten.find({name: "shivamKitty2"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})