const express = require('express')
const { movieIndex, movieCreate, movieUpdate, movieDelete, movieDetails } = require('../controller/movieController');


const router = express.Router()

// C- creating movies

router.post('/',movieCreate)


//  R-reading 

router.get('/',movieIndex)
router.get('/:id',movieDetails)



// U-updating

router.put('/:id',movieUpdate)



// D-deleting

router.delete('/:id', movieDelete)

module.exports=router