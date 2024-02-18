const express=require('express');
const {createTodo}=require('./Types')
const app= express();

app.use(express.json());

app.post("/todo" , function(req,res){
    const createPayload=req.body;
    const prasepayload= createPayload.safeParse(createPayload);
    if(!prasepayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }

})
app.get("/todos" , function(req,res){
    
});
app.put("/completed" , function(req,res){
    const updatePayload=req.body;
    const prasePayload= updatePayload.safeParse(updatePayload);
    if(!prasePayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }
})
app.listen(3000,()=>{
console.log("app is listeninggg");
})