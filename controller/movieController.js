 const movieIndex = (req,res)=>{
    res.send("get all movie list")
}

 const movieCreate = (req,res)=>{
    res.send("create all movie list")
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

    