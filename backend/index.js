const express=require('express');
const {createTodo,updateTodo}=require('./Types');
const {todo} = require("./db")
const app= express();

app.use(express.json());

app.post("/todo" ,  async function(req,res){
    const createPayload=req.body;
    const prasepayload= createTodo.safeParse(createPayload);
    if(!prasepayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }
   await todo.create({
    title: createPayload.title,
    description: createPayload.description,
   })
   res.json({
    msg:"todo created"
   })

})
app.get("/todos" , async function(req,res){
     const todos=  await todo.find({});
     res.json({
        todos
     })
});
app.put("/completed" , async function(req,res){
    const updatePayload=req.body;
    const prasePayload= updateTodo.safeParse(updatePayload);
    if(!prasePayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:" todo updated sucefully"
    })
})
app.listen(3000,()=>{
console.log("app is listeninggg");
})