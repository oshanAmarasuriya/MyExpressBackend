const express = require('express');
const router = express.Router();

// router.use(logger) //using our middleware globally

/*API end point */
router.get("/",(req,res)=>{
    //res.sendStatus(500)
    res.send("hello");
   
})

//using our middleware only in particular endpoint
router.get("/info/:id",logger,(req,res)=>{
    const id=req.params.id;
    res.send("inside info"+id);
   
})

//use of built in middleware
/*when param 'id' is identified in the code, this function will
automatically run */
router.param("id",(req,res,next,id)=>{
    console.log(id);
    next();//executes the normal flow of the program
})

//lets define a middleware
function logger(req,res,next){
    console.log(req.originalUrl);
    next()

}

/*There are built in middleware also for sending static html 
files directly from the backend */

module.exports =router;