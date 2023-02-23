const mongo= require('mongoose');

const data= mongo.Schema;

const str_data= new data({

    items:String,
    price:Number,
    notes:String,

});

const at= mongo.model('add_items',str_data);

module.exports=at;
