console.log(" Web Serverni boshlash");
const express =require("express");
const app = express();
const http = require("http");
const fs =require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) =>{
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

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
    console.log(req.body);
    res.json({test:"success"});
});

app.get(`/portfolio`, (req, res) =>{
    res.render("portfolio", {user: user});
});

app.get("/",function(req, res){
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`the server is running successfully on port: ${PORT}`);
});