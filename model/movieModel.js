const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    name:String,
    origin:String,
    language:String

})

const Movie = model("Movie",movieSchema)
module.exports=Movie