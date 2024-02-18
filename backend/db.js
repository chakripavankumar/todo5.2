const mongoose= require("mongoose");
 mongoose.connect("mongodb+srv://final:Pavan%408096@cluster1.chs19ed.mongodb.net/sidduboyyy")


const todoScheme= mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo= mongoose.model('todos' , todoScheme);

module.exports={
    todo
}