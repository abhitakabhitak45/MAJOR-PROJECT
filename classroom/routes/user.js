const express = require ("express");
const router = express.Router();

// index route
router.get ("/users",(req,res)=>{
    res.send("GET for users");
});

// show route
router.get("/users/:id",(req,res)=>{
    res.send("SHOW for users");
});

// post route
router.post("/users",(req,res)=>{
    res.send("POST for users");
});

// delete route
router.delete("/users/:id",(req,res)=>{
    res.send("DELETE for users");
});

module.exports = router;