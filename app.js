const connectdb = require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const notfound = require('./middleware/not-found')
const errorhandlermiddleware= require('./middleware/error-handler')
require('dotenv').config()

app.use(express.static('/public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)
app.use(notfound)
app.use(errorhandlermiddleware)

const port = 3000

const start = async() =>{
    try{
        await connectdb(process.env.MONGO_NEWVAR)
        app.listen(port, console.log(`listening yo ${port}  ....`))
    }
    catch (error){
        console.log(error)
    }
}

start()