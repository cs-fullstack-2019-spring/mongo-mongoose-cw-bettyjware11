var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ZooAnimalSchema = new Schema(
    {
        animal_ID: Number,

        animal_type: String,


        animal_description: String,



    });

//Export model
module.exports = mongoose.model('ZooAnimal', ZooAnimalSchema);
