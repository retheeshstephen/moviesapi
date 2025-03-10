const express = require('express')
const { movieIndex, movieCreate, movieUpdate, movieDelete } = require('../controller/movieController');


const router = express.Router()

// C- creating movies

router.post('/',movieCreate)


//  R-reading 

router.get('/',movieIndex)



// U-updating

router.put('/:id',movieUpdate)



// D-deleting

router.delete('/:id', movieDelete)

module.exports=router