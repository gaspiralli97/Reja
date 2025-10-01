console.log(" Web Serverni boshlash");
const express =require("express");
const app = express();

const fs =require("fs");



let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// Mongodbga caqirish
const db= require("./server").db();
const mongodb =require("mongodb");

// 1 Kirish

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//2 Session

//3 Views
app.set("views","views");
app.set("view engine","ejs");

//4 Routing codesss
/*app.get("/", function (req, res){
    res.end("<h1>Hello World Everyone</h1>");
});

app.get("/gift", function (req, res){
    res.end("<h1>you are in gift page</h1>");
}); */

app.post("/create-item", (req, res) =>{

    console.log("user entered /create-item")
   const new_reja = req.body.reja;
   db.collection("plans").insertOne({reja: new_reja}, (err,data) =>{
    console.log(data.ops);
    res.json(data.ops[0]);

   });
});

app.post("/delete-item", (req,res) =>{
    const id= req.body.id;
    db.collection("plans").deleteOne(
      { _id: new mongodb.ObjectId(id)},
      function (err, data) {
        res.json({state: "success"});
      }
    );
});

app.get("/author", (req, res) =>{
    res.render("author", {user: user});
});

app.get("/",function(req, res) {
    console.log("user entered /")
    db.collection("plans")
    .find()
    .toArray((err,data) =>{
        if (err) {
            console.log(err);
            res.end("someting went wrong");
        } else {
            
            res.render("reja", { items: data });
        }
    });
    
});



module.exports =app;