const { default: mongoose } = require("mongoose");
const { boolean } = require("zod");
const dotenv = require('dotenv')
dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
    
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}