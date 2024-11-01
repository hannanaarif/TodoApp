const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');

const app=express();

app.use(express.json());

/*body {
title:String,
description:String
}*/

app.post('/todo',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"you sent a wrong inputs",
        })
        return
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get('/todos',async function(req,res){
   const todos=await todo.find({})
   res.json({
    todos
})
    
})

app.put('/completed',async function(req,res){
    const updatePayload=req.body.id;
    const parsedupdatePayload=updateTodo.safeParse(updatePayload);
    if(!parsedupdatePayload.success){
        res.status(411).json({
            "msg":"you sent a wrong id"
        })
        return
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    });
    res.json({
        msg:"todo is marked completed"
    })
    
})


app.listen(3000,()=>{
    console.log("server is running on 3000");
})