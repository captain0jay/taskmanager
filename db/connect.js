const mongoose = require('mongoose')

const connectdb  = (url) =>{
return mongoose.connect(url,
    {useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true})
    }//.then(()=>console.log('up and running yay....')).catch((err)=>console.log('error nooooo.....'))}

module.exports  = connectdb