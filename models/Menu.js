
const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },

    ingrediants:{
        type:[String],
        default:[]
    },
    taste:{
        type:String,
        enum:['spicy','sour','sweet'],
        require:true
    },

    sales:{
        type:Number,
        default:0
    }
});

//create a model

const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;