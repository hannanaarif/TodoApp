const express=require('express');

const app=express();

app.use(express.json());

/*body {
title:String,
description:String
}*/

app.post('/todo',function(req,res){

})

app.get('/todos',function(req,res){
    
})

app.put('/completed',function(req,res){
    
})


app.listen(3000,()=>{
    console.log("server is running on 3000");
})