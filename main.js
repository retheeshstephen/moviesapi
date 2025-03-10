const  express = require('express')
const movieRoute = require('./routes/movies')

require('dotenv').config()
const app = express()



// middleware

app.use(express.json())


const connectDB = require('./connection/connection')
connectDB()



app.get('/',(req,res)=>{
    res.json({msg:"hello world!"})
})



app.use('/movies',movieRoute)



// connecting to port

const PORT = 4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`server connected successfully in ${PORT}`);
    
})




