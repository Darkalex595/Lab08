const { table } = require("console");
var express = require("express");
var path = require("path")

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    id: "00000",
    name: "Nestor",
    email: "darkalex595@gmail.com",
    phone: "77477503"
}]

var walis = [{
    id: "00001",
    name: "Memo",
    email: "memo@gmail.com",
    phone: "8123564896"
}]

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.post("/api/tables", function(req, res){
    var newClient = req.body;
    if(tables.length == 0){
        walis.push(newClient);
    }
    else{
        tables.push(newClient);
    }
    console.log(newClient);
    
})

app.get("/api/tables", function(req, res){
   return res.json(tables);
})

app.get("/api/waitlist", function(req, res){
    return res.json(walis);
})

app.listen(3000, function(){
    console.log("Server Up on Port 3000")
})