
const mongoose =require('mongoose')

//mongodb url

const mongoURL='mongodb://localhost:27017/hotel'

// connection setup

mongoose.connect(mongoURL,{
    useNewURLParser: true,
    useUnifiedTopology:true
})

// mongodb maintain the default connection object represent the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log('mogodb server are connected..')
});

db.on('error',()=>{
    console.log("error in mongodb connection")
});


db.on('disconnected',()=>{
    console.log('mogodb disconnected')
});

module.exports=db;