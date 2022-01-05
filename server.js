const express = require ("express");

const app = express();

require('dotenv').config()


const DBconnect = require("./DBconnect");

DBconnect();


app.listen(process.env.PORT,(err)=>
err ? console.log(err) : console.log("SERVER IS RUNNING")
);