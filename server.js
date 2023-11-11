const express = require('express')
const router = require('./routes/router')
const cors = require('cors')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())

app.use('/api/tasks',router)

const PORT = process.env.PORT 

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB is connected successfully")
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`)
    })
}).catch(err=>console.log(err))
