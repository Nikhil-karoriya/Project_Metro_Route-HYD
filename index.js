const express=require('express')
const app=express();
const metroPath=require("./routes/MetroPaths")
const path=require('path');
const methodOverride=require('method-override')
const ejsMate=require('ejs-mate');
const port=8080;


//path 
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static("public"));


app.use(metroPath);




app.listen(port,()=>{
    console.log(`server is online at http://localhost:8080/home`);
})

