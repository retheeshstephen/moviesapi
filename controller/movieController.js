const Movie = require("../model/movieModel")

 const movieIndex =async (req,res)=>{
    try {
      const movies=   await Movie.find()
      res.json(movies)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const movieDetails = async (req,res)=>{
    try {
        const onemovie = await  Movie.findById(req.params.id);
        if(onemovie==null){
            return res.status(404).json({message:"can't find movie"})
        }
        else{
            res.json(onemovie)
        }
    
        } catch (error) {
            return res.status(500).json({message:"server error",error})
        }
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




 const movieUpdate =async (req,res)=>{
   
    
        try {
            const { id } = req.params;
            const movie = await Movie.findById(id); // Fetch the movie
    
            if (!movie) {
                return res.status(404).json({ message: "Movie not found" });
            }
    
            // Update properties
            movie.name = req.body.name || movie.name;
            movie.origin = req.body.origin || movie.origin;
            movie.language = req.body.language || movie.language;
    
            await movie.save(); // Save changes
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
   
}


 const movieDelete = (req,res)=>{
    res.send("delete all movie list")
}

module.exports={
    movieCreate,
    movieDelete,
    movieIndex,
    movieUpdate,
    movieDetails
}

    