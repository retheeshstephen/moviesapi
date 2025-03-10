const Movie = require("../model/movieModel")

 const movieIndex = (req,res)=>{
    res.send("get all movie list")
}

 const movieCreate = async (req,res)=>{
//   id , title , origin , language
// console.log(req.body);
// validate the data

 const newMovie =   new Movie({
    name:req.body.name,
    origin:req.body.origin,
    language:req.body.language,
})

// successful
try {
    const movie = await  newMovie.save();
    return res.status(201).json(movie)
} catch (error) {
    return res.status(400).json({message:error.message})
}

}




 const movieUpdate = (req,res)=>{
    res.send("update all movie list")
}


 const movieDelete = (req,res)=>{
    res.send("delete all movie list")
}

module.exports={
    movieCreate,
    movieDelete,
    movieIndex,
    movieUpdate
}

    