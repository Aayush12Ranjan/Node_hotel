const mongoose= require('mongoose')

const personSchema= new mongoose.Schema({
    name: {
    type: String,
    required:true
    },

    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','manager', 'waiter'],
        requird:true
    },

    email:{
        type:String,
        required:true,
        Unique:true
    },

    address:{
        type:String
    },
    salery:{
        type: Number,
        required:true

    }

})

//create person model

const person=mongoose.model('person', personSchema);
module.exports=person;

