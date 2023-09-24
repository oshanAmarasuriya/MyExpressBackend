const express = require("express")
const app=express()

app.listen(3000)

const usrRouter= require('./routes/users');
app.use('/users',usrRouter);