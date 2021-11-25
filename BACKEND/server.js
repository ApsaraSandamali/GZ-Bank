const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 4200;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

   mongoose.connect(URL,{
     //useCreateIndex: true,
     //useNewParser:true,
     //useUnifiedTopologyL: true,
     //useFindAndModify: false
   });

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("MongoDB Connection success!");
})


const customerRouter = require("./routs/customer.js");    //call customer.js file in routs (http://Localhost:8070/customer)

app.use("/customer",customerRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port no: ${PORT}`)
})
