const express = require("express");
const cors = require("cors");
const sql = require("./models/db")
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.send("<h1> This is a RESTful APT for restaurant</h1>");
})

app.listen(PORT,()=>{
 console.log("server is runing on http://localhost:"+PORT);
});