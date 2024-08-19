const express=require("express");

const router=express.Router();


router.get("/home",(req,res)=>{
    res.render("homePage/home");
})

router.get("/Route",(req,res)=>{
    res.render("MetroPath");
})


module.exports=router

