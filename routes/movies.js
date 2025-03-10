const express = require('express')


const router = express.Router()

// C- creating movies

router.post('/',(req,res)=>{
    res.send("create all movie list")
})


//  R-reading 

router.get('/',(req,res)=>{
    res.send("get all movie list")
})



// U-updating

router.put('/:id',(req,res)=>{
    res.send("update all movie list")
})



// D-deleting

router.delete('/:id',(req,res)=>{
    res.send("delete all movie list")
})

module.exports=router