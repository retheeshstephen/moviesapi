const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    origin:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }

})

const Movie = model("Movie",movieSchema)
module.exports=Movie