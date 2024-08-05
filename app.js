const express = require("express");
const app = express();
const path =("path")
const cookieParser=require("cookie-parser")

app.set(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("working ...");
});

app.listen(3000,()=>{
    console.log("server is running...")
});