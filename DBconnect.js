const mongoose =require("mongoose");
require('dotenv').config();



const DBconnect = async ()=>{
    try {
        let result = await mongoose.connect("mongodb+srv://mahmoudboukhbiza:Rest-API-cp@cluster0.zjt91.mongodb.net/rest?retryWrites=true&w=majority");
        console.log("DataBase connected");
    } catch (error) {
        console.log(error);
    }

};

module.exports=DBconnect;